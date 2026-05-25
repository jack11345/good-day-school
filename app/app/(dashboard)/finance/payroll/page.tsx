import { db } from "@/lib/db";

export default async function PayrollPage() {
  const teachers = await db.teacher.findMany({
    include: { user: true },
    orderBy: { user: { name: "asc" } },
  });

  const SALARY = 42000;

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Payroll</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">May 2026 · {teachers.length} staff</p>
      </div>
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6EE] border-b border-[#F0E8D8]">
              <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">Staff</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Employee ID</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Gross</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Net</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Status</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t, i) => (
              <tr key={t.id} className={`border-b border-[#F0E8D8] last:border-0 hover:bg-[#FAF6EE]/60 ${i % 2 === 1 ? "bg-[#FAF6EE]/30" : ""}`}>
                <td className="px-5 py-3 font-medium text-[#1A1008]">{t.user.name}</td>
                <td className="px-4 py-3 text-center text-xs text-[#7A6A5A]">{t.employeeId}</td>
                <td className="px-4 py-3 text-right text-[#5A4A4A]">₨ {SALARY.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-bold text-[#1A1008]">₨ {SALARY.toLocaleString()}</td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs font-semibold bg-[#E8F5EC] text-[#3A6B45] px-2.5 py-1 rounded-full">paid</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
