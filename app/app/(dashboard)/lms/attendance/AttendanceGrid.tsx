"use client";
import { useState, useTransition } from "react";
import { saveAttendance } from "./actions";

type Student = { id: string; name: string; rollNumber: string };
type AttMap = Record<string, Record<string, string>>;

const STATUS_COLORS: Record<string, string> = {
  P: "bg-[#3A6B45]/15 text-[#3A6B45]",
  A: "bg-[#C0392B]/12 text-[#C0392B]",
  L: "bg-[#D4851A]/15 text-[#D4851A]",
};

export default function AttendanceGrid({
  students,
  dates,
  initialAtt,
  classSectionId,
}: {
  students: Student[];
  dates: string[];
  initialAtt: AttMap;
  classSectionId: string;
}) {
  const [att, setAtt] = useState<AttMap>(initialAtt);
  const [isPending, startTransition] = useTransition();
  const today = dates[dates.length - 1];

  function cycle(studentId: string) {
    const cur = att[studentId]?.[today] ?? "P";
    const next = { P: "A", A: "L", L: "P" }[cur] as string;
    const updated = {
      ...att,
      [studentId]: { ...att[studentId], [today]: next },
    };
    setAtt(updated);
    startTransition(() => saveAttendance(studentId, today, next, classSectionId));
  }

  function formatDate(iso: string) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-PK", { weekday: "short", day: "numeric", month: "short" });
  }

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#F0E8D8]">
              <th className="text-left px-5 py-3 font-semibold text-[#7A6A5A] text-xs uppercase tracking-widest w-40">
                Student
              </th>
              {dates.map(d => (
                <th
                  key={d}
                  className={`px-4 py-3 text-xs font-semibold text-center ${
                    d === today ? "text-[#6B1F1F] bg-[#F5EDD5]" : "text-[#7A6A5A]"
                  }`}
                >
                  {formatDate(d)}
                  {d === today && <span className="block text-[9px] mt-0.5 text-[#C9A961]">TODAY</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s.id} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF6EE]/50"}>
                <td className="px-5 py-3 font-medium text-[#1A1008]">
                  <span className="text-[#7A6A5A] text-xs mr-2">{s.rollNumber}</span>
                  {s.name}
                </td>
                {dates.map(d => {
                  const status = att[s.id]?.[d] ?? "P";
                  return (
                    <td key={d} className="px-4 py-3 text-center">
                      <button
                        onClick={() => d === today && cycle(s.id)}
                        disabled={d !== today || isPending}
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold transition-all
                          ${STATUS_COLORS[status] ?? "bg-[#D9CDB5] text-[#7A6A5A]"}
                          ${d === today ? "cursor-pointer hover:opacity-80 active:scale-95" : "cursor-default"}`}
                      >
                        {status}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 bg-[#FAF6EE] border-t border-[#F0E8D8] flex gap-4 text-xs text-[#7A6A5A]">
        <span><strong className="text-[#3A6B45]">P</strong> Present</span>
        <span><strong className="text-[#C0392B]">A</strong> Absent</span>
        <span><strong className="text-[#D4851A]">L</strong> Late</span>
        <span className="ml-auto">Click today&apos;s column to toggle</span>
        {isPending && <span className="text-[#C9A961]">Saving…</span>}
      </div>
    </div>
  );
}
