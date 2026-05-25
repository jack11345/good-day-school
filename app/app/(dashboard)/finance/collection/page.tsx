import { db } from "@/lib/db";
import LedgerModal from "./LedgerModal";

export default async function CollectionPage() {
  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const payments = await db.feePayment.findMany({
    where: { month: thisMonth },
    include: {
      student: {
        include: {
          classSection: true,
          feePayments: { orderBy: { month: "asc" } },
        },
      },
    },
    orderBy: { student: { name: "asc" } },
  });

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Collection Register</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">
          {now.toLocaleDateString("en-PK", { month: "long", year: "numeric" })} · Click a student name to view full ledger
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6EE] border-b border-[#F0E8D8]">
              <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">Student</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Class</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Charged</th>
              <th className="px-4 py-3 text-xs font-semibold text-right text-[#7A6A5A]">Paid</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Method</th>
              <th className="px-4 py-3 text-xs font-semibold text-center text-[#7A6A5A]">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={p.id} className={`border-b border-[#F0E8D8] last:border-0 hover:bg-[#FAF6EE]/60 ${i % 2 === 1 ? "bg-[#FAF6EE]/30" : ""}`}>
                <td className="px-5 py-3">
                  <LedgerModal
                    studentName={p.student.name}
                    ledger={p.student.feePayments}
                  />
                </td>
                <td className="px-4 py-3 text-center text-[#7A6A5A]">{p.student.classSection.name}</td>
                <td className="px-4 py-3 text-right font-medium">₨ {p.charged.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-medium text-[#3A6B45]">
                  {p.status === "paid" ? `₨ ${p.amount.toLocaleString()}` : "—"}
                </td>
                <td className="px-4 py-3 text-center text-xs text-[#7A6A5A]">{p.method ?? "—"}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    p.status === "paid" ? "bg-[#E8F5EC] text-[#3A6B45]"
                    : p.status === "overdue" ? "bg-[#FAEAEA] text-[#C0392B]"
                    : "bg-[#F5EDD5] text-[#8B6B1A]"
                  }`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
