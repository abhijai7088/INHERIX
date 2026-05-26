import { DashboardShell } from "./DashboardShell";
import {
  Upload,
  MoreHorizontal,
  FileText,
  Users,
  ClipboardList,
  AlertCircle,
  User,
  Home,
  Shield,
  DollarSign,
  Scale,
  Smartphone,
  Notebook,
  MessageSquare,
  Activity
} from "lucide-react";

const docCategories = [
  { label: "Identity", count: 5, Icon: User, color: "bg-violet/10 text-violet" },
  { label: "Property", count: 4, Icon: Home, color: "bg-teal/10 text-teal" },
  { label: "Insurance", count: 3, Icon: Shield, color: "bg-amber/10 text-amber" },
  { label: "Financial", count: 6, Icon: DollarSign, color: "bg-emerald/10 text-emerald" },
  { label: "Legal", count: 2, Icon: Scale, color: "bg-violet/10 text-violet" },
  { label: "Digital Notes", count: 2, Icon: Smartphone, color: "bg-teal/10 text-teal" },
  { label: "Family Notes", count: 1, Icon: Notebook, color: "bg-amber/10 text-amber" },
  { label: "Personal Msgs", count: 1, Icon: MessageSquare, color: "bg-rose/10 text-rose" }
];

const recentActivity = [
  { label: "Document Uploaded", detail: "PAN Card.pdf", time: "2h ago", Icon: FileText, color: "text-violet" },
  { label: "Instruction Updated", detail: "Family Guidance", time: "1d ago", Icon: ClipboardList, color: "text-teal" },
  { label: "Nominee Added", detail: "Neha Sharma", time: "2d ago", Icon: Users, color: "text-amber" },
  { label: "Consent Completed", detail: "Instruction Declaration", time: "3d ago", Icon: Activity, color: "text-emerald" }
];

export function ClientDashboard() {
  const metrics = [
    { label: "Nominees", value: "2", icon: Users, color: "bg-violet/10 text-violet" },
    { label: "Documents", value: "24", icon: FileText, color: "bg-teal/10 text-teal" },
    { label: "Instructions", value: "6", icon: ClipboardList, color: "bg-amber/10 text-amber" },
    { label: "Pending Actions", value: "3", icon: AlertCircle, color: "bg-rose/10 text-rose" }
  ];

  return (
    <DashboardShell role="client" userName="Vikram Sharma" userRole="Client">
      {/* Welcome bar */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div>
          <h2 className="text-base font-semibold text-ink">Welcome, Vikram Sharma</h2>
          <p className="text-xs text-graphite">Secure today. Protected tomorrow.</p>
        </div>
        {/* Profile completion */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[0.65rem] text-graphite">Profile Completion</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-2 w-28 rounded-full bg-slate-100">
                <div className="h-2 w-[80%] rounded-full bg-gradient-to-r from-violet to-teal" />
              </div>
              <span className="text-[0.7rem] font-bold text-ink">80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric row */}
      <div className="grid grid-cols-2 gap-3 mb-5 sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-line bg-white p-4 shadow-panel">
            <div className="flex items-center justify-between mb-2">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${m.color}`}>
                <m.icon size={16} />
              </span>
              <MoreHorizontal size={14} className="text-graphite/40" />
            </div>
            <p className="text-[0.68rem] text-graphite">{m.label}</p>
            <p className="mt-1 text-2xl font-bold text-ink">{m.value}</p>
            <button className="mt-1 text-[0.62rem] font-semibold text-violet hover:underline">View all</button>
          </div>
        ))}
      </div>

      {/* Document categories + Recent activity */}
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        {/* Document categories */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Document Categories</h3>
            <button className="flex items-center gap-1.5 rounded-xl bg-violet px-3 py-1.5 text-[0.65rem] font-bold text-white shadow-glow-sm">
              <Upload size={11} /> Upload
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2.5">
            {docCategories.map(({ label, count, Icon, color }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-mist p-3 text-center hover:border-violet/25 hover:bg-white transition-all cursor-pointer">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                  <Icon size={18} />
                </span>
                <p className="text-[0.68rem] font-semibold text-ink">{label}</p>
                <p className="text-[0.6rem] text-graphite">{count} {count === 1 ? "file" : "files"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Recent Activity</h3>
            <button className="text-xs font-semibold text-violet hover:underline">View all activity →</button>
          </div>
          <div className="grid gap-3">
            {recentActivity.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-line/60 p-3">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mist ${item.color}`}>
                  <item.Icon size={15} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-ink">{item.label}</p>
                  <p className="text-[0.65rem] text-graphite truncate">{item.detail}</p>
                </div>
                <span className="text-[0.62rem] text-graphite/50 shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
