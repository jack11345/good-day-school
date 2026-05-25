import { db } from "@/lib/db";
import StatCard from "@/components/ui/StatCard";

export default async function FinanceDashboard() {
  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const [allPayments, expenses] = await Promise.all([
    db.feePayment.findMany({ where: { month: thisMonth } }),
    db.expense.findMany({ where: { date: { gte: new Date(now.getFullYear(), now.getMonth(), 1) } } }),
  ]);

  const collected = allPayments.filter(p => p.status === "paid").reduce((s, p) => s + p.amount, 0);
  const outstanding = allPayments.filter(p => p.status !== "paid").reduce((s, p) => s + p.charged, 0);
  const totalExpenses = expenses.filter(e => e.status === "paid").reduce((s, e) => s + e.amount, 0);
  const netSurplus = collected - totalExpenses;

  const recentPayments = await db.feePayment.findMany({
    where: { status: "paid", paidAt: { not: null } },
    include: { student: true },
    orderBy: { paidAt: "desc" },
    take: 5,
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Finance Dashboard</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">
          {now.toLocaleDateString("en-PK", { month: "long", year: "numeric" })}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard label="Collected" value={`₨ ${collected.toLocaleString()}`} sub="this month" color="sage" />
        <StatCard label="Outstanding" value={`₨ ${outstanding.toLocaleString()}`} sub="pending / overdue" color={outstanding > 50000 ? "danger" : "amber"} />
        <StatCard label="Expenses" value={`₨ ${totalExpenses.toLocaleString()}`} sub="paid this month" color="maroon" />
        <StatCard label="Net Surplus" value={`₨ ${netSurplus.toLocaleString()}`} sub="collected minus expenses" color={netSurplus > 0 ? "sage" : "danger"} />
      </div>

      <div className="bg-white rounded-2xl shadow-card p-5">
        <h2 className="font-serif text-lg font-semibold text-[#4A1313] mb-4">Recent Payments</h2>
        <div className="space-y-2">
          {recentPayments.map(p => (
            <div key={p.id} className="flex items-center justify-between py-2.5 border-b border-[#F0E8D8] last:border-0">
              <div>
                <p className="text-sm font-medium text-[#1A1008]">{p.student.name}</p>
                <p className="text-xs text-[#7A6A5A]">{p.month} · {p.method}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#3A6B45]">₨ {p.amount.toLocaleString()}</p>
                <p className="text-xs text-[#7A6A5A]">{p.paidAt ? new Date(p.paidAt).toLocaleDateString("en-PK", { day: "numeric", month: "short" }) : ""}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
