import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import StatCard from "@/components/ui/StatCard";

export default async function LMSDashboard() {
  const session = await auth();
  const teacherUser = await db.teacher.findFirst({
    where: { userId: session?.user?.email ? 
      (await db.user.findUnique({ where: { email: session.user.email as string } }))?.id ?? "" : "" 
    },
    include: { classes: { include: { _count: { select: { students: true } } } } },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const classSection = teacherUser?.classes[0];

  const [totalStudents, absentToday, assignments] = await Promise.all([
    classSection ? db.student.count({ where: { classSectionId: classSection.id, status: "active" } }) : 0,
    classSection ? db.attendance.count({ where: { classSectionId: classSection.id, date: today, status: "A" } }) : 0,
    classSection ? db.assignment.count({ where: { classSectionId: classSection.id, status: "active" } }) : 0,
  ]);

  const grades = classSection
    ? await db.grade.findMany({ where: { student: { classSectionId: classSection.id } } })
    : [];
  const avgScore = grades.length
    ? Math.round(
        grades.reduce((sum, g) => {
          const scores = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
          return sum + (scores.length ? scores.reduce((a, b) => a + b) / scores.length : 0);
        }, 0) / grades.length
      )
    : 0;

  const recentAnnouncements = await db.announcement.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">
          Good morning, {session?.user?.name?.split(" ")[1] ?? "Teacher"} 👋
        </h1>
        <p className="text-sm text-[#7A6A5A] mt-1">
          {classSection?.name ?? "Your class"} · {new Date().toLocaleDateString("en-PK", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard label="Students" value={totalStudents} sub="in your class" color="maroon" />
        <StatCard label="Absent Today" value={absentToday} sub="out of class" color={absentToday > 3 ? "danger" : "amber"} />
        <StatCard label="Active Assignments" value={assignments} sub="this term" color="gold" />
        <StatCard label="Class Average" value={`${avgScore}%`} sub="all subjects" color="sage" />
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <h2 className="font-serif text-lg font-semibold text-[#4A1313] mb-4">Recent Announcements</h2>
        <div className="space-y-3">
          {recentAnnouncements.map(a => (
            <div key={a.id} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6EE]">
              <span className={`mt-0.5 h-2 w-2 rounded-full flex-shrink-0 ${
                a.priority === "high" ? "bg-[#C0392B]" : a.priority === "normal" ? "bg-[#C9A961]" : "bg-[#D9CDB5]"
              }`} />
              <div>
                <p className="text-sm font-semibold text-[#1A1008]">{a.title}</p>
                <p className="text-xs text-[#7A6A5A] mt-0.5 line-clamp-2">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
