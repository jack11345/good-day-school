import { db } from "@/lib/db";

export default async function AnnouncementsPage() {
  const announcements = await db.announcement.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="p-6">
      <div className="mb-5">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Announcements</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">School-wide notices</p>
      </div>
      <div className="space-y-3">
        {announcements.map(a => (
          <div key={a.id} className="bg-white rounded-2xl shadow-card p-5">
            <div className="flex items-start gap-3">
              <span className={`mt-1 h-2.5 w-2.5 rounded-full flex-shrink-0 ${
                a.priority === "high" ? "bg-[#C0392B]" : a.priority === "normal" ? "bg-[#C9A961]" : "bg-[#D9CDB5]"
              }`} />
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="font-semibold text-[#1A1008]">{a.title}</p>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    a.priority === "high" ? "bg-[#FAEAEA] text-[#C0392B]" : "bg-[#F5EDD5] text-[#8B6B1A]"
                  }`}>{a.priority}</span>
                </div>
                <p className="text-sm text-[#5A4A4A] leading-relaxed">{a.body}</p>
                <p className="text-xs text-[#7A6A5A] mt-2">
                  {new Date(a.createdAt).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" })} · {a.audience}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
