import { db } from "@/lib/db";
import LedgerModal from "../collection/LedgerModal";

export default async function DefaultersPage() {
  const overdue = await db.feePayment.findMany({
    where: { status: "overdue" },
    include: {
      student: {
        include: {
          classSection: true,
          feePayments: { orderBy: { month: "asc" } },
        },
      },
    },
    orderBy: { month: "asc" },
  });

  // Group by student
  const byStudent = overdue.reduce((acc, p) => {
    if (!acc[p.studentId]) acc[p.studentId] = { student: p.student, months: [] };
    acc[p.studentId].months.push(p);
    return acc;
  }, {} as Record<string, { student: typeof overdue[0]["student"]; months: typeof overdue }>);

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Defaulters</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">Students with overdue fee payments</p>
      </div>

      {Object.keys(byStudent).length === 0 ? (
        <div className="text-center py-16 text-[#7A6A5A]">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-medium">No defaulters — all fees are current</p>
        </div>
      ) : (
        <div className="space-y-3">
          {Object.values(byStudent).map(({ student, months }) => {
            const totalOverdue = months.reduce((s, m) => s + m.charged, 0);
            return (
              <div key={student.id} className="bg-white rounded-2xl shadow-card p-5 border-l-4 border-[#C0392B]">
                <div className="flex items-start justify-between">
                  <div>
                    <LedgerModal studentName={student.name} ledger={student.feePayments} />
                    <p className="text-xs text-[#7A6A5A] mt-0.5">{student.classSection.name}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {months.map(m => (
                        <span key={m.id} className="text-xs bg-[#FAEAEA] text-[#C0392B] px-2 py-0.5 rounded-full font-medium">{m.month}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#C0392B]">₨ {totalOverdue.toLocaleString()}</p>
                    <p className="text-xs text-[#7A6A5A]">{months.length} month{months.length > 1 ? "s" : ""} overdue</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
