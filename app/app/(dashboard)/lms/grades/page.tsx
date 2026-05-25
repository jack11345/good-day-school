import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

const SUBJECTS = ["English", "Urdu", "Mathematics", "Science", "Islamiyat"];

function gradeLabel(avg: number) {
  if (avg >= 90) return { label: "A+", color: "text-[#3A6B45]" };
  if (avg >= 80) return { label: "A",  color: "text-[#3A6B45]" };
  if (avg >= 70) return { label: "B",  color: "text-[#C9A961]" };
  if (avg >= 60) return { label: "C",  color: "text-[#D4851A]" };
  if (avg >= 50) return { label: "D",  color: "text-[#C0392B]" };
  return { label: "F", color: "text-[#C0392B] font-bold" };
}

export default async function GradesPage() {
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
    include: { grades: { where: { term: "Term 1", year: 2026 } } },
    orderBy: { rollNumber: "asc" },
  });

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Grade Book</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">{classSection.name} · Term 1 · 2026</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0E8D8] bg-[#FAF6EE]">
                <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-widest text-[#7A6A5A]">Student</th>
                {SUBJECTS.map(s => (
                  <th key={s} className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">{s}</th>
                ))}
                <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Overall</th>
                <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => {
                const subjectAvgs: number[] = SUBJECTS.map(sub => {
                  const g = s.grades.find(gr => gr.subject === sub);
                  if (!g) return 0;
                  const scores = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
                  return scores.length ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
                });
                const overall = subjectAvgs.filter(Boolean).length
                  ? Math.round(subjectAvgs.filter(Boolean).reduce((a, b) => a + b) / subjectAvgs.filter(Boolean).length)
                  : 0;
                const { label, color } = gradeLabel(overall);

                return (
                  <tr key={s.id} className={i % 2 === 0 ? "" : "bg-[#FAF6EE]/40"}>
                    <td className="px-5 py-3 font-medium text-[#1A1008]">{s.name}</td>
                    {subjectAvgs.map((avg, si) => (
                      <td key={si} className="px-4 py-3 text-center">
                        <span className={`text-sm font-semibold ${avg >= 70 ? "text-[#1A1008]" : "text-[#C0392B]"}`}>
                          {avg || "—"}
                        </span>
                        {avg > 0 && (
                          <div className="w-10 mx-auto mt-1 h-1 rounded-full bg-[#F0E8D8] overflow-hidden">
                            <div
                              className={`h-full rounded-full ${avg >= 80 ? "bg-[#3A6B45]" : avg >= 60 ? "bg-[#C9A961]" : "bg-[#C0392B]"}`}
                              style={{ width: `${avg}%` }}
                            />
                          </div>
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-center font-bold text-[#1A1008]">{overall}%</td>
                    <td className={`px-4 py-3 text-center font-bold text-lg ${color}`}>{label}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
