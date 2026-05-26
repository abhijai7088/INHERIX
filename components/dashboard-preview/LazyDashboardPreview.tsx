"use client";

import dynamic from "next/dynamic";

const DashboardPreview = dynamic(() => import("./DashboardPreview").then((mod) => mod.DashboardPreview), {
  ssr: false,
  loading: () => <DashboardPreviewLoadingShell />
});

export function LazyDashboardPreview() {
  return <DashboardPreview />;
}

function DashboardPreviewLoadingShell() {
  return (
    <section className="premium-surface relative overflow-hidden bg-[#eef2f5] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(10,27,53,0.08),transparent_26rem),radial-gradient(circle_at_80%_12%,rgba(15,118,110,0.06),transparent_24rem)] pointer-events-none" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full border border-amber/20 bg-amber/10 px-3 py-1 text-xs font-black text-amber">
              Preview-only operational workspace
            </span>
            <h2 className="heading-section mt-5 text-4xl font-extrabold text-ink sm:text-5xl">
              Dashboard proof of structured
              <br />
              <span className="text-gradient">continuity operations.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite">
              Explore how INHERIX may organize documents, nominees, requests, audit visibility, and controlled release workflows inside a calm operational dashboard.
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-white/90 bg-white/60 p-4 shadow-[0_24px_70px_rgba(8,17,31,0.10)]">
            <div className="grid h-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["My Assets", "Nominee Management", "Emergency Requests", "Timeline Activity", "Digital Vault", "Secure Access"].map((label) => (
                <div key={label} className="rounded-2xl border border-slate-200/80 bg-white/82 p-4 shadow-[0_12px_34px_rgba(8,17,31,0.045)]">
                  <span className="block h-4 w-4 rounded-lg bg-[#14b8a6]/40" />
                  <span className="mt-4 block text-sm font-semibold text-ink">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.35rem] border border-[#07101e]/10 bg-[#07101e] p-3 shadow-[0_34px_110px_rgba(8,17,31,0.20)]">
          <div className="rounded-[1.8rem] bg-white p-6">
            <div className="grid gap-4 lg:grid-cols-4">
              {["Assets Stored", "Nominees", "Pending Requests", "Security Status"].map((label, index) => (
                <div key={label} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-graphite/70">{label}</p>
                  <p className="mt-3 text-2xl font-black text-ink">{index === 3 ? "Protected" : index === 1 ? "3" : index === 2 ? "1" : "154"}</p>
                  <div className="mt-4 h-2 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#14b8a6]" style={{ width: index === 2 ? "38%" : "100%" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.4rem] border border-slate-200 bg-white p-5">
              <div className="h-64 rounded-[1.1rem] bg-gradient-to-br from-slate-50 to-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
