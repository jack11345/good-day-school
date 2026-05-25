import { db } from "@/lib/db";

export default async function StaffPage() {
  const staff = await db.teacher.findMany({
    include: {
      user: true,
      classes: true,
    },
    orderBy: { user: { name: "asc" } },
  });

  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Staff Directory</h1>
          <p className="text-sm text-[#7A6A5A] mt-1">{staff.length} staff members</p>
        </div>
        <button className="bg-[#4A1313] text-[#FAF6EE] text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#6B1F1F] transition-colors">
          + Add Staff
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {staff.map(t => (
          <div key={t.id} className="bg-white rounded-2xl shadow-card p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#4A1313]/8 flex items-center justify-center text-lg font-semibold text-[#4A1313] flex-shrink-0">
                {t.user.name?.split(" ").map(n => n[0]).join("").slice(0,2) ?? "?"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-[#1A1008] truncate">{t.user.name}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                    t.status === "active" ? "bg-[#E8F5EC] text-[#3A6B45]" : "bg-[#FAEAEA] text-[#C0392B]"
                  }`}>{t.status}</span>
                </div>
                <p className="text-xs text-[#7A6A5A] mt-0.5">{t.subject ?? "General"}</p>
                <p className="text-xs text-[#7A6A5A]">{t.employeeId} · {t.phone}</p>
                {t.classes.length > 0 && (
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {t.classes.map(c => (
                      <span key={c.id} className="text-[10px] bg-[#F5EDD5] text-[#8B6B1A] px-2 py-0.5 rounded-full">{c.name}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
