import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

const SUBJECTS = ["English", "Urdu", "Mathematics", "Science", "Islamiyat"];

export default async function ReportsPage() {
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
  });

  // Per-subject averages
  const subjectStats = SUBJECTS.map(sub => {
    const scores = students.flatMap(s => {
      const g = s.grades.find(gr => gr.subject === sub);
      if (!g) return [];
      const vals = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
      return vals.length ? [Math.round(vals.reduce((a, b) => a + b) / vals.length)] : [];
    });
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
    return { subject: sub, avg };
  });

  // At-risk students (overall avg < 60)
  const atRisk = students
    .map(s => {
      const avgs = SUBJECTS.map(sub => {
        const g = s.grades.find(gr => gr.subject === sub);
        if (!g) return null;
        const vals = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
        return vals.length ? Math.round(vals.reduce((a, b) => a + b) / vals.length) : null;
      }).filter(Boolean) as number[];
      const overall = avgs.length ? Math.round(avgs.reduce((a, b) => a + b) / avgs.length) : 0;
      return { ...s, overall };
    })
    .filter(s => s.overall < 65)
    .sort((a, b) => a.overall - b.overall);

  const maxBar = Math.max(...subjectStats.map(s => s.avg), 100);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Class Reports</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">{classSection.name} · Term 1 · 2026</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Subject averages bar chart */}
        <div className="bg-white rounded-2xl shadow-card p-5">
          <h2 className="font-serif text-lg font-semibold text-[#4A1313] mb-4">Subject Averages</h2>
          <div className="space-y-3">
            {subjectStats.map(({ subject, avg }) => (
              <div key={subject}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[#1A1008]">{subject}</span>
                  <span className={`font-bold ${avg < 70 ? "text-[#C0392B]" : "text-[#3A6B45]"}`}>{avg}%</span>
                </div>
                <div className="h-2 bg-[#F0E8D8] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${avg < 70 ? "bg-[#C0392B]" : avg < 80 ? "bg-[#C9A961]" : "bg-[#3A6B45]"}`}
                    style={{ width: `${(avg / maxBar) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3 text-xs text-[#7A6A5A]">
            <span>🟩 &gt;80% strong</span>
            <span>🟨 70–80% fair</span>
            <span>🟥 &lt;70% needs help</span>
          </div>
        </div>

        {/* At-risk panel */}
        <div className="bg-white rounded-2xl shadow-card p-5">
          <h2 className="font-serif text-lg font-semibold text-[#4A1313] mb-1">At-Risk Students</h2>
          <p className="text-xs text-[#7A6A5A] mb-4">Overall average below 65% — needs additional support</p>
          {atRisk.length === 0 ? (
            <div className="text-center py-8 text-[#7A6A5A]">
              <div className="text-3xl mb-2">🎉</div>
              <p className="text-sm font-medium">All students above threshold</p>
            </div>
          ) : (
            <div className="space-y-2">
              {atRisk.map(s => (
                <div key={s.id} className="flex items-center justify-between p-3 bg-[#FAEAEA] rounded-xl">
                  <div>
                    <p className="text-sm font-semibold text-[#1A1008]">{s.name}</p>
                    <p className="text-xs text-[#7A6A5A]">
                      Weak in: {SUBJECTS.filter(sub => {
                        const g = s.grades.find(gr => gr.subject === sub);
                        if (!g) return false;
                        const vals = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
                        const avg = vals.length ? vals.reduce((a, b) => a + b) / vals.length : 0;
                        return avg < 65;
                      }).join(", ")}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-[#C0392B]">{s.overall}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="px-5 py-4 border-b border-[#F0E8D8] flex items-center justify-between">
          <h2 className="font-serif text-lg font-semibold text-[#4A1313]">Full Grade Summary</h2>
          <a
            href="/api/reports/export-csv"
            className="text-xs font-semibold text-[#6B1F1F] hover:text-[#4A1313] border border-[#C9A961] rounded-lg px-3 py-1.5 hover:bg-[#F5EDD5] transition-colors"
          >
            Export CSV ↓
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FAF6EE] border-b border-[#F0E8D8]">
                <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">Student</th>
                {SUBJECTS.map(s => <th key={s} className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">{s.slice(0,4)}</th>)}
                <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Avg</th>
                <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => {
                const avgs = SUBJECTS.map(sub => {
                  const g = s.grades.find(gr => gr.subject === sub);
                  if (!g) return 0;
                  const vals = [g.quiz1, g.quiz2, g.quiz3, g.finalExam].filter(Boolean) as number[];
                  return vals.length ? Math.round(vals.reduce((a, b) => a + b) / vals.length) : 0;
                });
                const overall = avgs.filter(Boolean).length
                  ? Math.round(avgs.filter(Boolean).reduce((a, b) => a + b) / avgs.filter(Boolean).length)
                  : 0;
                const gradeLetter = overall >= 90 ? "A+" : overall >= 80 ? "A" : overall >= 70 ? "B" : overall >= 60 ? "C" : overall >= 50 ? "D" : "F";
                return (
                  <tr key={s.id} className="border-b border-[#F0E8D8] last:border-0 hover:bg-[#FAF6EE]/60">
                    <td className="px-5 py-3 font-medium text-[#1A1008]">{s.name}</td>
                    {avgs.map((avg, i) => (
                      <td key={i} className={`px-4 py-3 text-center font-medium ${avg < 60 ? "text-[#C0392B]" : avg < 70 ? "text-[#D4851A]" : "text-[#1A1008]"}`}>
                        {avg || "—"}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-center font-bold">{overall}%</td>
                    <td className={`px-4 py-3 text-center font-bold ${overall >= 70 ? "text-[#3A6B45]" : "text-[#C0392B]"}`}>{gradeLetter}</td>
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
