import { DashboardShell } from "./DashboardShell";
import { adminDashboard } from "@/content/dashboard";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  Users,
  UserCheck,
  FolderOpen,
  Bell,
  Package,
  TicketCheck,
  TrendingUp,
  TrendingDown,
  MoreHorizontal
} from "lucide-react";

const metricIcons = [Users, UserCheck, Users, Bell, Package, TicketCheck];
const metricColors = [
  "bg-violet/10 text-violet",
  "bg-teal/10 text-teal",
  "bg-violet/10 text-violet",
  "bg-orange/10 text-orange",
  "bg-amber/10 text-amber",
  "bg-rose/10 text-rose"
];

export function AdminDashboard() {
  const metrics = [
    { label: "Total Clients", value: "18", delta: "+2", up: true },
    { label: "Active Clients", value: "11", delta: "+1", up: true },
    { label: "Nominees", value: "24", delta: "+3", up: true },
    { label: "Trigger Requests", value: "3", delta: "Review", up: false },
    { label: "Pending Releases", value: "1", delta: "Controlled", up: false },
    { label: "Support Tickets", value: "2", delta: "Open", up: true }
  ];

  const recentRequests = [
    { name: "Request by Rajesh Sharma", detail: "Client: Vikram Sharma", status: "Under Review", ago: "1h ago" },
    { name: "Request by Priya Mehta", detail: "Client: Arvind Mehta", status: "Submitted", ago: "3h ago" },
    { name: "Request by Neha Verma", detail: "Client: Suresh Verma", status: "More Proof", ago: "5h ago" },
    { name: "Request by Aman Patel", detail: "Client: Mahesh Patel", status: "Approved", ago: "1d ago" }
  ];

  const statusColor: Record<string, string> = {
    "Under Review": "status-review",
    "Submitted": "status-submitted",
    "More Proof": "status-proof",
    "Approved": "status-approved",
    "Released": "status-released",
    "Pending": "status-pending"
  };

  // Donut chart segments (CSS)
  const donutColors = [
    { pct: 61, color: "#19b6a2", label: "Active", count: 11 },
    { pct: 22, color: "#f6c85f", label: "Pending", count: 4 },
    { pct: 11, color: "#635bff", label: "On Hold", count: 2 },
    { pct: 6, color: "#ef476f", label: "Closed", count: 1 }
  ];

  // Build conic-gradient for donut
  let cumulativePct = 0;
  const conicStops = donutColors.map(({ pct, color }) => {
    const start = cumulativePct;
    cumulativePct += pct;
    return `${color} ${start}% ${cumulativePct}%`;
  });
  const donutGradient = `conic-gradient(${conicStops.join(", ")})`;

  // Chart points for SVG line chart
  const chartPoints = "0,110 45,88 82,104 125,76 158,90 190,42 235,26 272,60 312,78 350,38 390,30 420,12";
  const chartPoints2 = "0,132 45,120 82,126 125,104 158,111 190,88 235,72 272,90 312,100 350,74 390,62 420,42";
  const monthLabels = ["01 May", "06 May", "11 May", "16 May", "20 May"];

  return (
    <DashboardShell role="admin" userName="Admin User" userRole="Super Admin">
      {/* Welcome bar */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div>
          <h2 className="text-base font-semibold text-ink">Welcome, Admin</h2>
          <p className="text-xs text-graphite">Here&#39;s what&#39;s happening with INHERIX today.</p>
        </div>
        <span className="text-xs text-graphite bg-mist rounded-xl px-3 py-1.5 border border-line">May 20, 2025</span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3 mb-5 lg:grid-cols-3 xl:grid-cols-6">
        {metrics.map((m, i) => {
          const Icon = metricIcons[i];
          return (
            <div key={m.label} className="rounded-2xl border border-line bg-white p-4 shadow-panel">
              <div className="flex items-center justify-between mb-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${metricColors[i]}`}>
                  <Icon size={16} />
                </span>
                <MoreHorizontal size={14} className="text-graphite/40" />
              </div>
              <p className="text-[0.7rem] text-graphite">{m.label}</p>
              <p className="mt-1 text-xl font-bold text-ink">{m.value}</p>
              <p className={`mt-1 flex items-center gap-0.5 text-[0.65rem] font-semibold ${m.up ? "text-emerald" : "text-rose"}`}>
                {m.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {m.delta}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom 3-col grid */}
      <div className="grid gap-4 xl:grid-cols-3">
        {/* Donut chart */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Clients by Status</h3>
            <button className="text-xs font-semibold text-violet hover:underline">View all clients →</button>
          </div>
          <div className="flex items-center gap-5">
            {/* Donut */}
            <div
              className="relative h-32 w-32 shrink-0 rounded-full"
              style={{ background: donutGradient }}
            >
              <div className="absolute inset-[18%] rounded-full bg-white flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-ink">18</span>
                <span className="text-[0.6rem] text-graphite">Total</span>
              </div>
            </div>
            {/* Legend */}
            <div className="grid gap-2">
              {donutColors.map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-xs text-graphite">
                  <span className="h-2.5 w-2.5 rounded-sm shrink-0" style={{ background: d.color }} />
                  <span>{d.label}</span>
                  <span className="ml-auto font-semibold text-ink">{d.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Line chart */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Trigger Requests Overview</h3>
            <select className="text-[0.68rem] font-semibold text-graphite bg-mist border border-line rounded-xl px-2 py-1">
              <option>This Month</option>
            </select>
          </div>
          <div className="relative h-36">
            <svg viewBox="0 0 420 140" className="h-full w-full" role="img" aria-label="Demo trigger request line chart">
              {/* Area fill */}
              <defs>
                <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#635bff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon fill="url(#area-fill)" points={`0,140 ${chartPoints} 420,140`} />
              <polyline fill="none" stroke="#635bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={chartPoints} />
              <polyline fill="none" stroke="#19b6a2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" points={chartPoints2} />
            </svg>
            {/* X axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
              {monthLabels.map((m) => (
                <span key={m} className="text-[0.58rem] text-graphite/50">{m}</span>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[0.65rem] text-graphite"><span className="h-2 w-4 rounded-full bg-violet inline-block" /> Trigger Requests</span>
            <span className="flex items-center gap-1.5 text-[0.65rem] text-graphite"><span className="h-2 w-4 rounded-full bg-teal inline-block border-dashed border border-teal" /> Released</span>
          </div>
        </div>

        {/* Recent requests */}
        <div className="rounded-2xl border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Recent Trigger Requests</h3>
            <button className="text-xs font-semibold text-violet hover:underline">View all →</button>
          </div>
          <div className="grid gap-3">
            {recentRequests.map((req) => (
              <div key={req.name} className="flex items-start justify-between gap-3 rounded-xl border border-line/60 p-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/10 text-[0.65rem] font-bold text-violet">
                    {req.name.split(" ").slice(-2, -1)[0]?.[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink truncate">{req.name}</p>
                    <p className="text-[0.65rem] text-graphite">{req.detail}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className={`rounded-full px-2.5 py-0.5 text-[0.62rem] font-bold ${statusColor[req.status] ?? "bg-mist text-graphite"}`}>
                    {req.status}
                  </span>
                  <span className="text-[0.6rem] text-graphite/50">{req.ago}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
