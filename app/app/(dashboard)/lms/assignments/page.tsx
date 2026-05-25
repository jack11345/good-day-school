import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function AssignmentsPage() {
  const session = await auth();
  const user = await db.user.findUnique({ where: { email: session?.user?.email as string } });
  const teacher = await db.teacher.findFirst({
    where: { userId: user?.id ?? "" },
    include: { classes: true },
  });

  const classSection = teacher?.classes[0];
  if (!classSection) return <div className="p-6 text-[#7A6A5A]">No class assigned.</div>;

  const assignments = await db.assignment.findMany({
    where: { classSectionId: classSection.id },
    orderBy: { dueDate: "asc" },
  });

  const now = new Date();
  const active = assignments.filter(a => a.status === "active" && new Date(a.dueDate) >= now);
  const overdue = assignments.filter(a => a.status === "active" && new Date(a.dueDate) < now);
  const closed = assignments.filter(a => a.status === "closed");

  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold text-[#4A1313]">Assignments</h1>
          <p className="text-sm text-[#7A6A5A] mt-1">{classSection.name}</p>
        </div>
        <button className="bg-[#4A1313] text-[#FAF6EE] text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#6B1F1F] transition-colors">
          + New Assignment
        </button>
      </div>

      {overdue.length > 0 && (
        <div className="mb-4 p-4 bg-[#FAEAEA] rounded-2xl border border-[#C0392B]/20">
          <p className="text-sm font-semibold text-[#C0392B] mb-2">⚠ {overdue.length} overdue</p>
          {overdue.map(a => <AssignmentRow key={a.id} a={a} overdue />)}
        </div>
      )}

      {active.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-[#7A6A5A] uppercase tracking-widest mb-2">Active</p>
          <div className="space-y-2">
            {active.map(a => <AssignmentRow key={a.id} a={a} />)}
          </div>
        </div>
      )}

      {closed.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-[#7A6A5A] uppercase tracking-widest mb-2">Closed</p>
          <div className="space-y-2 opacity-60">
            {closed.map(a => <AssignmentRow key={a.id} a={a} />)}
          </div>
        </div>
      )}

      {assignments.length === 0 && (
        <div className="text-center py-16 text-[#7A6A5A]">
          <div className="text-4xl mb-3">📝</div>
          <p className="font-medium">No assignments yet</p>
          <p className="text-sm mt-1">Create your first assignment using the button above.</p>
        </div>
      )}
    </div>
  );
}

function AssignmentRow({ a, overdue }: { a: { id: string; title: string; subject: string; dueDate: Date; description: string | null }; overdue?: boolean }) {
  return (
    <div className={`bg-white rounded-xl shadow-card p-4 flex items-start gap-4 ${overdue ? "border border-[#C0392B]/20" : ""}`}>
      <div className={`mt-0.5 h-2 w-2 rounded-full flex-shrink-0 ${overdue ? "bg-[#C0392B]" : "bg-[#C9A961]"}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <p className="font-semibold text-[#1A1008]">{a.title}</p>
          <span className="text-xs text-[#7A6A5A] bg-[#F0E8D8] px-2 py-0.5 rounded-full">{a.subject}</span>
        </div>
        {a.description && <p className="text-xs text-[#7A6A5A] mt-1">{a.description}</p>}
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-xs font-semibold ${overdue ? "text-[#C0392B]" : "text-[#5A4A4A]"}`}>
          Due {new Date(a.dueDate).toLocaleDateString("en-PK", { day: "numeric", month: "short" })}
        </p>
      </div>
    </div>
  );
}
