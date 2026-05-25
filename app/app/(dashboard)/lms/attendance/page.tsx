import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import AttendanceGrid from "./AttendanceGrid";

export default async function AttendancePage() {
  const session = await auth();
  const user = await db.user.findUnique({ where: { email: session?.user?.email as string } });
  const teacher = await db.teacher.findFirst({
    where: { userId: user?.id ?? "" },
    include: { classes: true },
  });

  const classSection = teacher?.classes[0];
  if (!classSection) return <div className="p-6 text-[#7A6A5A]">No class assigned.</div>;

  const students = await db.student.findMany({
    where: { classSectionId: classSection.id, status: "active" },
    orderBy: { rollNumber: "asc" },
  });

  // Get attendance for last 5 school days
  const dates: Date[] = [];
  const d = new Date();
  while (dates.length < 5) {
    if (d.getDay() !== 0 && d.getDay() !== 6) dates.unshift(new Date(d));
    d.setDate(d.getDate() - 1);
  }

  const attendance = await db.attendance.findMany({
    where: {
      classSectionId: classSection.id,
      date: { gte: dates[0], lte: dates[4] },
    },
  });

  // Build lookup: studentId → date string → status
  const attMap: Record<string, Record<string, string>> = {};
  for (const a of attendance) {
    const key = a.date.toISOString().split("T")[0];
    if (!attMap[a.studentId]) attMap[a.studentId] = {};
    attMap[a.studentId][key] = a.status;
  }

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Attendance</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">{classSection.name} · Click today&apos;s column to toggle P / A / L</p>
      </div>
      <AttendanceGrid
        students={students.map(s => ({ id: s.id, name: s.name, rollNumber: s.rollNumber ?? "" }))}
        dates={dates.map(d => d.toISOString().split("T")[0])}
        initialAtt={attMap}
        classSectionId={classSection.id}
      />
    </div>
  );
}
