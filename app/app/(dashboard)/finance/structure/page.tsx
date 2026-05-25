import { db } from "@/lib/db";

export default async function FeeStructurePage() {
  const structures = await db.feeStructure.findMany({ where: { year: 2026 }, orderBy: { grade: "asc" } });

  const grades = [0, 1, 2, 3, 4, 5];
  const gradeLabels: Record<number, string> = { 0: "KG", 1: "Grade 1", 2: "Grade 2", 3: "Grade 3", 4: "Grade 4", 5: "Grade 5" };

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Fee Structure</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">Academic year 2026 · All amounts in PKR</p>
      </div>
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6EE] border-b border-[#F0E8D8]">
              <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">Class</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Tuition / mo</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Transport / mo</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Total / mo</th>
            </tr>
          </thead>
          <tbody>
            {grades.map(g => {
              const tuition = structures.find(s => s.grade === g && s.type === "tuition")?.amount ?? 0;
              const transport = structures.find(s => s.grade === g && s.type === "transport")?.amount ?? 0;
              return (
                <tr key={g} className="border-b border-[#F0E8D8] last:border-0 hover:bg-[#FAF6EE]/50">
                  <td className="px-5 py-3 font-medium text-[#1A1008]">{gradeLabels[g]}</td>
                  <td className="px-4 py-3 text-right text-[#5A4A4A]">₨ {tuition.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-[#5A4A4A]">₨ {transport.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right font-bold text-[#1A1008]">₨ {(tuition + transport).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
