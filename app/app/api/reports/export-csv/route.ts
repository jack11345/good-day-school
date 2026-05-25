import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const SUBJECTS = ["English", "Urdu", "Mathematics", "Science", "Islamiyat"];

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({ where: { email: session.user?.email as string } });
  const teacher = await db.teacher.findFirst({
    where: { userId: user?.id ?? "" },
    include: { classes: true },
  });

  const classSection = teacher?.classes[0];
  if (!classSection) return NextResponse.json({ error: "No class" }, { status: 400 });

  const students = await db.student.findMany({
    where: { classSectionId: classSection.id },
    include: { grades: { where: { term: "Term 1", year: 2026 } } },
    orderBy: { rollNumber: "asc" },
  });

  const header = ["Roll No", "Name", ...SUBJECTS, "Overall Avg", "Grade"];
  const rows = students.map(s => {
    const avgs = SUBJECTS.map(sub => {
      const g = s.grades.find(gr => gr.subject === sub);
      if (!g) return 0;
      const vals = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
      return vals.length ? Math.round(vals.reduce((a, b) => a + b) / vals.length) : 0;
    });
    const overall = avgs.filter(Boolean).length
      ? Math.round(avgs.filter(Boolean).reduce((a, b) => a + b) / avgs.filter(Boolean).length)
      : 0;
    const grade = overall >= 90 ? "A+" : overall >= 80 ? "A" : overall >= 70 ? "B" : overall >= 60 ? "C" : overall >= 50 ? "D" : "F";
    return [s.rollNumber ?? "", s.name, ...avgs, overall, grade];
  });

  const csv = [header, ...rows].map(r => r.join(",")).join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${classSection.name}-Term1-grades.csv"`,
    },
  });
}
