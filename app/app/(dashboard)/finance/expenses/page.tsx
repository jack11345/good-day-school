import { db } from "@/lib/db";

export default async function ExpensesPage() {
  const expenses = await db.expense.findMany({ orderBy: { date: "desc" } });
  const total = expenses.filter(e => e.status === "paid").reduce((s, e) => s + e.amount, 0);

  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Expenses</h1>
          <p className="text-sm text-[#7A6A5A] mt-1">Total paid: ₨ {total.toLocaleString()}</p>
        </div>
        <button className="bg-[#4A1313] text-[#FAF6EE] text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#6B1F1F] transition-colors">
          + Add Expense
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6EE] border-b border-[#F0E8D8]">
              <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">Title</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Category</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Amount</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Date</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(e => (
              <tr key={e.id} className="border-b border-[#F0E8D8] last:border-0 hover:bg-[#FAF6EE]/60">
                <td className="px-5 py-3 font-medium text-[#1A1008]">{e.title}</td>
                <td className="px-4 py-3 text-center">
                  <span className="text-xs bg-[#F0E8D8] text-[#7A6A5A] px-2 py-0.5 rounded-full capitalize">{e.category}</span>
                </td>
                <td className="px-4 py-3 text-right font-semibold text-[#1A1008]">₨ {e.amount.toLocaleString()}</td>
                <td className="px-4 py-3 text-center text-[#7A6A5A] text-xs">
                  {new Date(e.date).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    e.status === "paid" ? "bg-[#E8F5EC] text-[#3A6B45]" : "bg-[#F5EDD5] text-[#8B6B1A]"
                  }`}>{e.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
