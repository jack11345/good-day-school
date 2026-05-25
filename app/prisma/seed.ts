import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import bcrypt from "bcryptjs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, "../dev.db");
const adapter = new PrismaLibSql({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hash = (p: string) => bcrypt.hash(p, 10);

  // ── Users ──────────────────────────────────────────────────────────────────
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@goodday.edu.pk" },
    update: {},
    create: {
      name: "Ms. Nadia Ahmed",
      email: "admin@goodday.edu.pk",
      passwordHash: await hash("admin123"),
      role: "admin",
    },
  });

  const teacherUser = await prisma.user.upsert({
    where: { email: "teacher@goodday.edu.pk" },
    update: {},
    create: {
      name: "Mr. Tariq Hassan",
      email: "teacher@goodday.edu.pk",
      passwordHash: await hash("teacher123"),
      role: "teacher",
    },
  });

  const accountantUser = await prisma.user.upsert({
    where: { email: "accounts@goodday.edu.pk" },
    update: {},
    create: {
      name: "Mr. Bilal Khan",
      email: "accounts@goodday.edu.pk",
      passwordHash: await hash("accounts123"),
      role: "accountant",
    },
  });

  const parentUser = await prisma.user.upsert({
    where: { email: "parent@example.com" },
    update: {},
    create: {
      name: "Mrs. Fatima Malik",
      email: "parent@example.com",
      passwordHash: await hash("parent123"),
      role: "parent",
    },
  });

  // ── Teacher profile ────────────────────────────────────────────────────────
  const teacher = await prisma.teacher.upsert({
    where: { userId: teacherUser.id },
    update: {},
    create: {
      userId: teacherUser.id,
      employeeId: "TCH-001",
      phone: "0311-1234567",
      subject: "Mathematics",
      qualification: "B.Ed, M.A. Mathematics",
      status: "active",
    },
  });

  // ── Parent profile ─────────────────────────────────────────────────────────
  const parent = await prisma.parent.upsert({
    where: { userId: parentUser.id },
    update: {},
    create: {
      userId: parentUser.id,
      phone: "0321-9876543",
      whatsapp: "0321-9876543",
      address: "House 14, Street 3, Satellite Town, Rawalpindi",
    },
  });

  // ── Class sections ─────────────────────────────────────────────────────────
  const class3A = await prisma.classSection.upsert({
    where: { grade_section_year: { grade: 3, section: "A", year: 2026 } },
    update: {},
    create: { name: "Grade 3A", grade: 3, section: "A", year: 2026, teacherId: teacher.id },
  });

  const class3B = await prisma.classSection.upsert({
    where: { grade_section_year: { grade: 3, section: "B", year: 2026 } },
    update: {},
    create: { name: "Grade 3B", grade: 3, section: "B", year: 2026 },
  });

  const class4A = await prisma.classSection.upsert({
    where: { grade_section_year: { grade: 4, section: "A", year: 2026 } },
    update: {},
    create: { name: "Grade 4A", grade: 4, section: "A", year: 2026 },
  });

  // ── Students ───────────────────────────────────────────────────────────────
  const students = [
    { name: "Zainab Malik", nameUrdu: "زینب ملک", gender: "F", rollNumber: "3A-01", classSectionId: class3A.id, parentId: parent.id },
    { name: "Ahmed Raza", nameUrdu: "احمد رضا", gender: "M", rollNumber: "3A-02", classSectionId: class3A.id },
    { name: "Sara Khan", nameUrdu: "سارہ خان", gender: "F", rollNumber: "3A-03", classSectionId: class3A.id },
    { name: "Bilal Hussain", nameUrdu: "بلال حسین", gender: "M", rollNumber: "3A-04", classSectionId: class3A.id },
    { name: "Fatima Sheikh", nameUrdu: "فاطمہ شیخ", gender: "F", rollNumber: "3A-05", classSectionId: class3A.id },
    { name: "Umar Farooq", nameUrdu: "عمر فاروق", gender: "M", rollNumber: "3A-06", classSectionId: class3A.id },
    { name: "Ayesha Siddiqui", nameUrdu: "عائشہ صدیقی", gender: "F", rollNumber: "3A-07", classSectionId: class3A.id },
    { name: "Hassan Ali", nameUrdu: "حسن علی", gender: "M", rollNumber: "3A-08", classSectionId: class3A.id },
  ];

  const createdStudents: { id: string }[] = [];
  for (const s of students) {
    const st = await prisma.student.upsert({
      where: { id: `student-${s.rollNumber}` },
      update: {},
      create: { id: `student-${s.rollNumber}`, ...s },
    });
    createdStudents.push(st);
  }

  // ── Attendance (last 5 school days) ───────────────────────────────────────
  const attDates = ["2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22", "2026-05-25"];
  const attData: Record<string, string[]> = {
    "student-3A-01": ["P","P","P","P","P"],
    "student-3A-02": ["P","P","A","P","P"],
    "student-3A-03": ["P","L","P","P","P"],
    "student-3A-04": ["P","P","P","A","P"],
    "student-3A-05": ["P","P","P","P","P"],
    "student-3A-06": ["A","P","P","P","L"],
    "student-3A-07": ["P","P","P","P","P"],
    "student-3A-08": ["P","P","P","P","A"],
  };

  for (const [studentId, statuses] of Object.entries(attData)) {
    for (let i = 0; i < attDates.length; i++) {
      await prisma.attendance.upsert({
        where: { studentId_date: { studentId, date: new Date(attDates[i]) } },
        update: {},
        create: {
          studentId,
          classSectionId: class3A.id,
          date: new Date(attDates[i]),
          status: statuses[i],
          markedBy: teacher.id,
        },
      });
    }
  }

  // ── Grades ─────────────────────────────────────────────────────────────────
  const subjects = ["English", "Urdu", "Mathematics", "Science", "Islamiyat"];
  const gradeData: Record<string, number[][]> = {
    "student-3A-01": [[85,88,90,87],[78,82,80,79],[92,95,88,91],[85,87,83,86],[90,88,92,89]],
    "student-3A-02": [[72,75,70,74],[68,65,70,67],[88,85,90,87],[75,78,72,76],[82,80,85,83]],
    "student-3A-03": [[60,55,58,62],[70,72,68,71],[55,58,52,56],[60,63,57,61],[68,65,70,67]],
    "student-3A-04": [[88,90,85,92],[82,85,80,84],[78,80,75,79],[88,85,90,87],[75,78,72,76]],
    "student-3A-05": [[95,92,98,94],[90,88,92,91],[88,90,85,89],[92,95,90,93],[96,94,98,95]],
    "student-3A-06": [[65,68,62,66],[72,75,70,73],[70,68,72,69],[65,68,62,66],[78,80,75,79]],
    "student-3A-07": [[80,82,78,81],[75,78,72,76],[85,88,82,86],[80,82,78,81],[88,85,90,87]],
    "student-3A-08": [[55,58,52,56],[60,63,57,61],[72,75,70,74],[55,58,52,56],[65,68,62,66]],
  };

  for (const [studentId, subjectGrades] of Object.entries(gradeData)) {
    for (let si = 0; si < subjects.length; si++) {
      const [q1,q2,q3,finalExam] = subjectGrades[si];
      await prisma.grade.upsert({
        where: { studentId_subject_term_year: { studentId, subject: subjects[si], term: "Term 1", year: 2026 } },
        update: {},
        create: { studentId, subject: subjects[si], term: "Term 1", year: 2026, quiz1: q1, quiz2: q2, quiz3: q3, finalExam },
      });
    }
  }

  // ── Fee structure ──────────────────────────────────────────────────────────
  const feeStructures = [
    { grade: 0, type: "tuition", amount: 4500 },
    { grade: 1, type: "tuition", amount: 5000 },
    { grade: 2, type: "tuition", amount: 5000 },
    { grade: 3, type: "tuition", amount: 5500 },
    { grade: 4, type: "tuition", amount: 5500 },
    { grade: 5, type: "tuition", amount: 6000 },
    { grade: 0, type: "transport", amount: 2000 },
    { grade: 1, type: "transport", amount: 2000 },
    { grade: 2, type: "transport", amount: 2000 },
    { grade: 3, type: "transport", amount: 2500 },
    { grade: 4, type: "transport", amount: 2500 },
    { grade: 5, type: "transport", amount: 2500 },
  ];

  for (const fs of feeStructures) {
    await prisma.feeStructure.upsert({
      where: { grade_type_year: { grade: fs.grade, type: fs.type, year: 2026 } },
      update: { amount: fs.amount },
      create: { ...fs, year: 2026 },
    });
  }

  // ── Fee payments ───────────────────────────────────────────────────────────
  const months = ["2026-01","2026-02","2026-03","2026-04","2026-05"];
  const feeStatuses: Record<string, string[]> = {
    "student-3A-01": ["paid","paid","paid","paid","paid"],
    "student-3A-02": ["paid","paid","paid","paid","pending"],
    "student-3A-03": ["paid","paid","paid","overdue","overdue"],
    "student-3A-04": ["paid","paid","overdue","overdue","overdue"],
    "student-3A-05": ["paid","paid","paid","paid","paid"],
    "student-3A-06": ["paid","paid","paid","pending","pending"],
    "student-3A-07": ["paid","paid","paid","paid","paid"],
    "student-3A-08": ["paid","overdue","overdue","overdue","overdue"],
  };

  for (const [studentId, statuses] of Object.entries(feeStatuses)) {
    for (let i = 0; i < months.length; i++) {
      const status = statuses[i];
      await prisma.feePayment.upsert({
        where: { studentId_month: { studentId, month: months[i] } },
        update: {},
        create: {
          studentId,
          month: months[i],
          charged: 5500,
          amount: 5500,
          status,
          method: status === "paid" ? ["JazzCash","Cash","Bank Transfer"][i % 3] : null,
          paidAt: status === "paid" ? new Date(`${months[i]}-05`) : null,
          reference: status === "paid" ? `REF-${studentId.slice(-4)}-${i}` : null,
        },
      });
    }
  }

  // ── Expenses ───────────────────────────────────────────────────────────────
  const expenses = [
    { title: "Teacher Salaries", category: "salary", amount: 185000, status: "paid", date: new Date("2026-05-01") },
    { title: "Electricity Bill", category: "utilities", amount: 8500, status: "paid", date: new Date("2026-05-10") },
    { title: "Stationery & Supplies", category: "supplies", amount: 12000, status: "paid", date: new Date("2026-05-12") },
    { title: "Plumbing Repair", category: "maintenance", amount: 4500, status: "pending", date: new Date("2026-05-20") },
    { title: "Internet (PTCL)", category: "utilities", amount: 3500, status: "pending", date: new Date("2026-05-25") },
  ];

  for (const exp of expenses) {
    await prisma.expense.create({ data: exp }).catch(() => {});
  }

  // ── Announcements ──────────────────────────────────────────────────────────
  const announcementsExist = await prisma.announcement.count();
  if (!announcementsExist) {
    await prisma.announcement.createMany({
      data: [
        { title: "PTM scheduled for June 3rd", body: "Parent-Teacher Meeting for all grades will be held on June 3rd, 2026 from 9am–12pm. All parents are encouraged to attend.", priority: "high", audience: "all", createdBy: adminUser.id },
        { title: "Grade 5 Board Exam prep starts", body: "Extra preparation sessions for board exams will begin from June 1st. Students must bring textbooks and notebooks.", priority: "normal", audience: "teachers", createdBy: adminUser.id },
        { title: "Eid holiday notice", body: "School will be closed for Eid from June 6–8. Classes resume June 9th.", priority: "normal", audience: "all", createdBy: adminUser.id },
      ],
    });
  }

  // ── Assignments ────────────────────────────────────────────────────────────
  const assignmentsExist = await prisma.assignment.count();
  if (!assignmentsExist) {
    await prisma.assignment.createMany({
      data: [
        { title: "Fractions worksheet", subject: "Mathematics", description: "Complete exercises 5.1–5.3 from textbook", dueDate: new Date("2026-05-27"), status: "active", classSectionId: class3A.id, teacherId: teacher.id },
        { title: "Chapter 4 comprehension", subject: "English", description: "Read chapter 4 and answer questions 1–10", dueDate: new Date("2026-05-29"), status: "active", classSectionId: class3A.id, teacherId: teacher.id },
        { title: "Quiz 3 review sheet", subject: "Science", description: "Revise chapter 6: Plants and photosynthesis", dueDate: new Date("2026-06-02"), status: "active", classSectionId: class3A.id, teacherId: teacher.id },
      ],
    });
  }

  console.log("✅ Database seeded.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
