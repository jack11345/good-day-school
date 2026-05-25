"use server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function saveAttendance(
  studentId: string,
  dateStr: string,
  status: string,
  classSectionId: string
) {
  const session = await auth();
  if (!session) return;

  const date = new Date(dateStr + "T00:00:00");
  await db.attendance.upsert({
    where: { studentId_date: { studentId, date } },
    update: { status, markedBy: session.user?.email ?? "" },
    create: { studentId, date, status, classSectionId, markedBy: session.user?.email ?? "" },
  });
}
