import { Bell, ChevronDown, Search, ShieldCheck, LayoutDashboard, Users, FileText, BookOpen, ClipboardList, Bell as BellIcon, GitBranch, Package, Activity, HeadphonesIcon, Settings, LogOut } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";

type DashboardShellProps = {
  children: ReactNode;
  role: "admin" | "client" | "nominee";
  userName: string;
  userRole: string;
};

const adminNav = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "Clients", Icon: Users },
  { label: "Nominees", Icon: Users },
  { label: "Documents", Icon: FileText },
  { label: "Instructions", Icon: BookOpen },
  { label: "Consent Logs", Icon: ClipboardList },
  { label: "Trigger Requests", Icon: BellIcon },
  { label: "Release Management", Icon: Package },
  { label: "Audit Logs", Icon: Activity },
  { label: "Support Tickets", Icon: HeadphonesIcon },
  { label: "Settings", Icon: Settings }
];

const clientNav = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "My Profile", Icon: Users },
  { label: "Nominees", Icon: Users },
  { label: "Documents", Icon: FileText },
  { label: "Instructions", Icon: BookOpen },
  { label: "Consent & Agreements", Icon: ClipboardList },
  { label: "Request History", Icon: GitBranch },
  { label: "Support", Icon: HeadphonesIcon },
  { label: "Settings", Icon: Settings },
  { label: "Logout", Icon: LogOut }
];

const nomineeNav = [
  { label: "Dashboard", Icon: LayoutDashboard, active: true },
  { label: "My Profile", Icon: Users },
  { label: "My Requests", Icon: GitBranch },
  { label: "Released Items", Icon: Package },
  { label: "Request Access", Icon: BellIcon },
  { label: "My Requests", Icon: ClipboardList },
  { label: "Instructions", Icon: BookOpen },
  { label: "Released Records", Icon: FileText },
  { label: "Support Tickets", Icon: HeadphonesIcon },
  { label: "Settings", Icon: Settings },
  { label: "Logout", Icon: LogOut }
];

const navMap = { admin: adminNav, client: clientNav, nominee: nomineeNav };
const roleColor = {
  admin: "from-[#0a1b35] to-[#1a2f55]",
  client: "from-[#1a0a2e] to-[#2d1260]",
  nominee: "from-[#0a2020] to-[#0d3535]"
};
const roleAccent = { admin: "bg-violet", client: "bg-violet", nominee: "bg-teal" };

export function DashboardShell({ children, role, userName, userRole }: DashboardShellProps) {
  const nav = navMap[role];

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-line bg-white shadow-soft">
      <div className="grid min-h-[640px] lg:grid-cols-[220px_1fr]">

        {/* Sidebar */}
        <aside className={`bg-gradient-to-b ${roleColor[role]} px-3 py-5 text-white flex flex-col`}>
          {/* Logo */}
          <div className="flex items-center gap-2.5 px-2 mb-6">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
              <Image src="/images/inherix-symbol.png" alt="INHERIX logo" width={32} height={32} className="h-8 w-8 object-contain" />
            </div>
            <div>
              <p className="text-sm font-bold leading-none">INHERIX</p>
              <p className="text-[0.6rem] text-white/50 mt-0.5">Digital Continuity</p>
            </div>
          </div>

          {/* User chip */}
          <div className="mx-2 mb-5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xs font-bold">
              {userName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{userName}</p>
              <p className="text-[0.6rem] text-white/45">{userRole}</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 grid gap-0.5">
            {nav.map(({ label, Icon, active }) => (
              <span
                key={label}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold cursor-pointer transition-colors ${
                  active
                    ? "bg-white text-ink"
                    : "text-white/50 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={14} className="shrink-0" />
                {label}
              </span>
            ))}
          </nav>

          {/* Help */}
          <div className="mx-2 mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
            <HeadphonesIcon size={16} className="text-teal mb-2" />
            <p className="text-[0.68rem] font-semibold text-white">Need Help?</p>
            <p className="text-[0.6rem] text-white/45 mt-0.5">Raise a ticket or contact our support team.</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="bg-[#f7f9fc] p-5 sm:p-6 overflow-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="hidden sm:flex items-center gap-2.5 flex-1 max-w-sm rounded-2xl border border-line bg-white px-3 py-2.5 text-sm text-graphite shadow-panel">
              <Search size={14} className="text-graphite/50 shrink-0" />
              <span className="text-[0.78rem]">Search anything...</span>
            </div>
            <div className="flex items-center gap-2.5 ml-auto">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white shadow-panel">
                <Bell size={16} className="text-graphite" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet text-[0.5rem] font-bold text-white">3</span>
              </span>
              <div className="flex items-center gap-2 rounded-2xl border border-line bg-white px-3 py-2 shadow-panel">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet to-teal flex items-center justify-center text-[0.6rem] font-bold text-white">
                  {userName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="hidden sm:block">
                  <p className="text-[0.72rem] font-semibold text-ink">{userName}</p>
                  <p className="text-[0.6rem] text-graphite">{userRole}</p>
                </div>
                <ChevronDown size={14} className="text-graphite/40" />
              </div>
            </div>
          </div>

          {/* Content */}
          {children}
        </main>
      </div>
    </div>
  );
}
