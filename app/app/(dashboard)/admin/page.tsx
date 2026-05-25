import { db } from "@/lib/db";
import StatCard from "@/components/ui/StatCard";

export default async function AdminDashboard() {
  const [students, staff, classes, announcements] = await Promise.all([
    db.student.count({ where: { status: "active" } }),
    db.teacher.count({ where: { status: "active" } }),
    db.classSection.count({ where: { year: 2026 } }),
    db.announcement.findMany({ orderBy: { createdAt: "desc" }, take: 4 }),
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Admin Dashboard</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">Good Day School · Rawalpindi · Academic Year 2026</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard label="Students" value={students} sub="enrolled & active" color="maroon" />
        <StatCard label="Teaching Staff" value={staff} sub="active teachers" color="gold" />
        <StatCard label="Classes" value={classes} sub="sections 2026" color="sage" />
        <StatCard label="Announcements" value={announcements.length} sub="this month" color="amber" />
      </div>

      <div className="bg-white rounded-2xl shadow-card p-5">
        <h2 className="font-serif text-lg font-semibold text-[#4A1313] mb-4">Latest Announcements</h2>
        <div className="space-y-3">
          {announcements.map(a => (
            <div key={a.id} className="flex gap-3 p-3 bg-[#FAF6EE] rounded-xl">
              <span className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${a.priority === "high" ? "bg-[#C0392B]" : "bg-[#C9A961]"}`} />
              <div>
                <p className="text-sm font-semibold text-[#1A1008]">{a.title}</p>
                <p className="text-xs text-[#7A6A5A] mt-0.5">{a.body.slice(0, 100)}…</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
