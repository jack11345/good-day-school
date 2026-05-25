"use client";
import { useState } from "react";

type Payment = {
  id: string;
  month: string;
  charged: number;
  amount: number;
  status: string;
  method: string | null;
  paidAt: Date | null;
  reference: string | null;
};

export default function LedgerModal({ studentName, ledger }: { studentName: string; ledger: Payment[] }) {
  const [open, setOpen] = useState(false);

  const totalCharged = ledger.reduce((s, p) => s + p.charged, 0);
  const totalPaid = ledger.filter(p => p.status === "paid").reduce((s, p) => s + p.amount, 0);
  const balance = totalCharged - totalPaid;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="font-medium text-[#6B1F1F] hover:text-[#4A1313] hover:underline text-left"
      >
        {studentName}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl shadow-lift w-full max-w-lg" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0E8D8]">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#4A1313]">{studentName}</h3>
                <p className="text-xs text-[#7A6A5A] mt-0.5">Payment ledger</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-[#7A6A5A] hover:text-[#1A1008] text-xl leading-none">×</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#FAF6EE] border-b border-[#F0E8D8]">
                    <th className="text-left px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">Month</th>
                    <th className="px-4 py-2.5 text-xs font-semibold text-right text-[#7A6A5A]">Charged</th>
                    <th className="px-4 py-2.5 text-xs font-semibold text-right text-[#7A6A5A]">Paid</th>
                    <th className="px-4 py-2.5 text-xs font-semibold text-center text-[#7A6A5A]">Method</th>
                    <th className="px-4 py-2.5 text-xs font-semibold text-center text-[#7A6A5A]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ledger.map(p => (
                    <tr key={p.id} className="border-b border-[#F0E8D8] last:border-0">
                      <td className="px-5 py-2.5 font-medium text-[#1A1008]">{p.month}</td>
                      <td className="px-4 py-2.5 text-right text-[#5A4A4A]">₨ {p.charged.toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-right font-medium text-[#3A6B45]">
                        {p.status === "paid" ? `₨ ${p.amount.toLocaleString()}` : "—"}
                      </td>
                      <td className="px-4 py-2.5 text-center text-xs text-[#7A6A5A]">{p.method ?? "—"}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          p.status === "paid" ? "bg-[#E8F5EC] text-[#3A6B45]"
                          : p.status === "overdue" ? "bg-[#FAEAEA] text-[#C0392B]"
                          : "bg-[#F5EDD5] text-[#8B6B1A]"
                        }`}>{p.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary bar */}
            <div className="grid grid-cols-3 gap-0 border-t border-[#F0E8D8]">
              {[
                { label: "Total charged", value: totalCharged, color: "text-[#1A1008]" },
                { label: "Total paid", value: totalPaid, color: "text-[#3A6B45]" },
                { label: "Balance due", value: balance, color: balance > 0 ? "text-[#C0392B]" : "text-[#3A6B45]" },
              ].map(({ label, value, color }) => (
                <div key={label} className="px-5 py-3 text-center border-r border-[#F0E8D8] last:border-0">
                  <p className="text-xs text-[#7A6A5A]">{label}</p>
                  <p className={`text-base font-bold mt-0.5 ${color}`}>₨ {value.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
