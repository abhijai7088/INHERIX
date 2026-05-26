import { DashboardShell } from "./DashboardShell";
import {
  FileText,
  Package,
  AlertCircle,
  TicketCheck,
  MoreHorizontal,
  ChevronRight,
  Shield
} from "lucide-react";

const myRequests = [
  { label: "Request for Vikram Sharma", sub: "Submitted on 16 May 2025", status: "Under Review", color: "status-review" },
  { label: "Request for Vikram Sharma", sub: "Submitted on 10 May 2025", status: "More Proof", color: "status-proof" },
  { label: "Request for Vikram Sharma", sub: "Submitted on 28 Apr 2025", status: "Approved", color: "status-approved" }
];

const releasedItems = [
  { label: "Bank Statements", sub: "Released on 15 May 2025", Icon: FileText, color: "bg-violet/10 text-violet" },
  { label: "Property Documents", sub: "Released on 12 May 2025", Icon: Package, color: "bg-teal/10 text-teal" },
  { label: "Insurance Policy", sub: "Released on 10 May 2025", Icon: Shield, color: "bg-amber/10 text-amber" }
];

export function NomineeDashboard() {
  const metrics = [
    { label: "My Requests", value: "2", icon: FileText, color: "bg-violet/10 text-violet" },
    { label: "Released Items", value: "7", icon: Package, color: "bg-teal/10 text-teal" },
    { label: "Pending Proofs", value: "1", icon: AlertCircle, color: "bg-amber/10 text-amber" },
    { label: "Support Tickets", value: "1", icon: TicketCheck, color: "bg-rose/10 text-rose" }
  ];

  return (
    <DashboardShell role="nominee" userName="Neha Sharma" userRole="Nominee">
      {/* Welcome bar */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div>
          <h2 className="text-base font-semibold text-ink">Welcome, Neha Sharma</h2>
          <p className="text-xs text-graphite">We are here to support you.</p>
        </div>
        {/* Profile completion */}
        <div className="text-right">
          <p className="text-[0.65rem] text-graphite">Profile Completion</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-2 w-28 rounded-full bg-slate-100">
              <div className="h-2 w-[60%] rounded-full bg-gradient-to-r from-violet to-teal" />
            </div>
            <span className="text-[0.7rem] font-bold text-ink">60%</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
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

      {/* My Requests + Released Items */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* My Requests */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">My Requests</h3>
            <button className="text-xs font-semibold text-violet hover:underline">View all</button>
          </div>
          <div className="grid gap-3">
            {myRequests.map((req, i) => (
              <div key={i} className="flex items-start justify-between gap-3 rounded-xl border border-line/60 p-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-violet/40 mt-1.5" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink truncate">{req.label}</p>
                    <p className="text-[0.62rem] text-graphite">{req.sub}</p>
                  </div>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[0.62rem] font-bold whitespace-nowrap ${req.color}`}>
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Released Items */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Recently Released Items</h3>
            <button className="text-xs font-semibold text-violet hover:underline">View all</button>
          </div>
          <div className="grid gap-3">
            {releasedItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-line/60 p-3">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                  <item.Icon size={15} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-ink">{item.label}</p>
                  <p className="text-[0.62rem] text-graphite">{item.sub}</p>
                </div>
                <ChevronRight size={14} className="text-graphite/30" />
              </div>
            ))}
          </div>

          {/* Governance note */}
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-mist border border-line p-3">
            <Shield size={13} className="text-violet shrink-0 mt-0.5" />
            <p className="text-[0.62rem] text-graphite leading-5">
              Note: You will only see the records and instructions that are released by the admin.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
