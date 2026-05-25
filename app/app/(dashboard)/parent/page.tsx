import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function ParentHome() {
  const session = await auth();
  const user = await db.user.findUnique({ where: { email: session?.user?.email as string } });
  const parent = await db.parent.findFirst({
    where: { userId: user?.id ?? "" },
    include: {
      students: {
        include: {
          classSection: true,
          feePayments: { orderBy: { month: "desc" }, take: 1 },
          attendance: { orderBy: { date: "desc" }, take: 5 },
        },
      },
    },
  });

  const children = parent?.students ?? [];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Parent Portal</h1>
        <p className="text-sm text-[#7A6A5A] mt-1">Good Day School · {session?.user?.name}</p>
      </div>

      {children.length === 0 ? (
        <div className="text-center py-16 text-[#7A6A5A]">
          <div className="text-4xl mb-3">👨‍👩‍👧</div>
          <p className="font-medium">No children linked to your account</p>
          <p className="text-sm mt-1">Contact the school office to link your children.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {children.map(child => {
            const latestFee = child.feePayments[0];
            const recentAtt = child.attendance.slice(0, 5);
            return (
              <div key={child.id} className="bg-white rounded-2xl shadow-card p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4A1313]/8 flex items-center justify-center text-xl font-bold text-[#4A1313]">
                    {child.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1008]">{child.name}</p>
                    <p className="text-xs text-[#7A6A5A]">{child.classSection.name} · Roll {child.rollNumber}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-[#FAF6EE] rounded-xl">
                    <span className="text-xs font-medium text-[#5A4A4A]">Latest fee ({latestFee?.month ?? "—"})</span>
                    <span className={`text-xs font-bold ${latestFee?.status === "paid" ? "text-[#3A6B45]" : "text-[#C0392B]"}`}>
                      {latestFee?.status ?? "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#FAF6EE] rounded-xl">
                    <span className="text-xs font-medium text-[#5A4A4A]">Recent attendance</span>
                    <div className="flex gap-1">
                      {recentAtt.map(a => (
                        <span key={a.id} className={`text-[10px] font-bold w-6 h-6 rounded-md flex items-center justify-center ${
                          a.status === "P" ? "bg-[#E8F5EC] text-[#3A6B45]" : a.status === "A" ? "bg-[#FAEAEA] text-[#C0392B]" : "bg-[#F5EDD5] text-[#D4851A]"
                        }`}>{a.status}</span>
                      ))}
                    </div>
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
