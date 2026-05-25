"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

type NavItem = { label: string; href: string; icon: string } | { section: string };

const NAV: Record<string, NavItem[]> = {
  teacher: [
    { section: "Classroom" },
    { label: "Dashboard",  href: "/lms",            icon: "⊞" },
    { label: "Attendance", href: "/lms/attendance",  icon: "✓" },
    { label: "Grade Book", href: "/lms/grades",      icon: "📊" },
    { label: "Reports",    href: "/lms/reports",     icon: "📈" },
    { label: "Assignments",href: "/lms/assignments", icon: "📝" },
    { section: "School" },
    { label: "Announcements", href: "/lms/announcements", icon: "📢" },
  ],
  admin: [
    { section: "Management" },
    { label: "Dashboard",   href: "/admin",            icon: "⊞" },
    { label: "Enrolment",   href: "/admin/enrolment",  icon: "🎓" },
    { label: "Staff",       href: "/admin/staff",      icon: "👥" },
    { label: "Classes",     href: "/admin/classes",    icon: "🏫" },
    { section: "Communication" },
    { label: "Announcements", href: "/admin/announcements", icon: "📢" },
  ],
  accountant: [
    { section: "Finance" },
    { label: "Dashboard",   href: "/finance",            icon: "⊞" },
    { label: "Collection",  href: "/finance/collection", icon: "💳" },
    { label: "Fee Structure", href: "/finance/structure", icon: "📋" },
    { label: "Defaulters",  href: "/finance/defaulters", icon: "⚠" },
    { label: "Expenses",    href: "/finance/expenses",   icon: "🧾" },
    { label: "Payroll",     href: "/finance/payroll",    icon: "💼" },
  ],
  parent: [
    { section: "My Children" },
    { label: "Home",        href: "/parent",          icon: "🏠" },
    { label: "Fees",        href: "/parent/fees",     icon: "💳" },
    { label: "Attendance",  href: "/parent/attendance", icon: "✓" },
    { label: "Leave",       href: "/parent/leave",    icon: "📅" },
    { label: "Messages",    href: "/parent/messages", icon: "💬" },
  ],
};

export default function Sidebar({ role, userName }: { role: string; userName: string }) {
  const pathname = usePathname();
  const nav = NAV[role] ?? NAV.teacher;

  return (
    <aside className="w-56 flex-shrink-0 bg-[#4A1313] flex flex-col overflow-y-auto">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="font-serif text-xl font-semibold text-[#FAF6EE] leading-tight">Good Day</div>
        <div className="text-[10px] font-semibold tracking-[.14em] uppercase text-[#C9A961] mt-0.5">School LMS</div>
      </div>

      {/* User chip */}
      <div className="px-4 py-3 border-b border-white/10">
        <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Signed in as</div>
        <div className="text-sm font-medium text-white/90 truncate">{userName}</div>
        <div className="inline-block mt-1 text-[10px] font-semibold bg-[#C9A961]/20 text-[#C9A961] px-2 py-0.5 rounded-full capitalize">
          {role}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5">
        {nav.map((item, i) => {
          if ("section" in item) {
            return (
              <div key={i} className="px-2 pt-4 pb-1 text-[9px] font-bold uppercase tracking-[.16em] text-white/30">
                {item.section}
              </div>
            );
          }
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-[#C9A961]/20 text-[#C9A961]"
                  : "text-white/70 hover:bg-white/8 hover:text-white"
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full text-left text-xs text-white/40 hover:text-white/70 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          ← Sign out
        </button>
      </div>
    </aside>
  );
}
