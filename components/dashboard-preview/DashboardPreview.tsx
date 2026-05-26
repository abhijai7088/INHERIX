"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  FileLock2,
  FolderLock,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Users,
  UserCheck
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AdminDashboard } from "./AdminDashboard";
import { ClientDashboard } from "./ClientDashboard";
import { NomineeDashboard } from "./NomineeDashboard";

const views = [
  {
    id: "admin",
    label: "Admin View",
    icon: ShieldCheck,
    description: "Governance control center with full platform oversight",
    component: AdminDashboard
  },
  {
    id: "client",
    label: "Client View",
    icon: Users,
    description: "Personal continuity dashboard with document management",
    component: ClientDashboard
  },
  {
    id: "nominee",
    label: "Nominee View",
    icon: UserCheck,
    description: "Access management with controlled release tracking",
    component: NomineeDashboard
  }
];

const features = [
  { label: "My Assets", icon: FolderLock, color: "text-[#14b8a6]" },
  { label: "Nominee Management", icon: Users, color: "text-[#3b82f6]" },
  { label: "Emergency Requests", icon: TimerReset, color: "text-[#b45309]" },
  { label: "Timeline Activity", icon: Activity, color: "text-[#6366f1]" },
  { label: "Digital Vault", icon: FileLock2, color: "text-[#14b8a6]" },
  { label: "Secure Access Granted", icon: CheckCircle2, color: "text-[#3b82f6]" }
];

const proofMetrics = [
  { label: "Assets Stored", value: 154, suffix: "", detail: "structured demo assets" },
  { label: "Nominees", value: 3, suffix: "", detail: "trusted roles mapped" },
  { label: "Pending Requests", value: 1, suffix: "", detail: "awaiting review" },
  { label: "Security Status", value: 100, suffix: "%", detail: "Protected" }
];

const sampleFlow = [
  "My Assets",
  "Property Documents (+1)",
  "Insurance (+3)",
  "Nominee Request Received",
  "Admin Verification",
  "Secure Access Granted"
];

export function DashboardPreview() {
  const [active, setActive] = useState("admin");
  const View = views.find((v) => v.id === active)?.component ?? AdminDashboard;

  return (
    <section className="premium-surface relative overflow-hidden bg-[#eef2f5] py-20 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(10,27,53,0.08),transparent_26rem),radial-gradient(circle_at_80%_12%,rgba(15,118,110,0.06),transparent_24rem)] pointer-events-none" />

      <Container>
        {/* Section header */}
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <Badge tone="amber">Preview-only operational workspace</Badge>
            <h2 className="heading-section mt-5 text-4xl font-extrabold text-ink sm:text-5xl">
              Dashboard proof of structured
              <br />
              <span className="text-gradient">continuity operations.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Explore how INHERIX may organize documents, nominees, requests, audit visibility, and controlled release workflows inside a calm operational dashboard. This is a non-functional walkthrough for website preview only.
            </p>

          </div>

          <div className="rounded-[1.7rem] border border-white/90 bg-white/60 p-4 shadow-[0_24px_70px_rgba(8,17,31,0.10)] backdrop-blur">
            <div className="grid h-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ label, icon: Icon, color }) => (
                <div key={label} className="dashboard-feature-card group flex min-h-28 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/82 p-4 shadow-[0_12px_34px_rgba(8,17,31,0.045)] transition hover:-translate-y-0.5 hover:border-[#14b8a6]/30 hover:bg-white hover:shadow-[0_18px_48px_rgba(8,17,31,0.09)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#f1f5f9]">
                    <Icon size={18} className={color} />
                  </span>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-4">
          {proofMetrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.45rem] border border-white/80 bg-white/82 p-5 shadow-panel">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-graphite/70">{metric.label}</p>
              <p className="mt-3 text-3xl font-black text-ink">
                {metric.label === "Security Status" ? (
                  "Protected"
                ) : (
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} duration={1400} />
                )}
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  style={{ width: metric.label === "Pending Requests" ? "38%" : "100%" }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#14b8a6]"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-graphite">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Role tabs selector */}
        <div className="mb-8 rounded-[1.7rem] border border-white/80 bg-[#f8fafc]/88 p-3 shadow-[0_20px_60px_rgba(8,17,31,0.08)] backdrop-blur">
          <div className="grid gap-3 lg:grid-cols-[13rem_1fr] lg:items-center">
            <div className="rounded-[1.25rem] bg-[#0b1220] px-5 py-4 text-white">
              <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/35">Select role view</p>
              <p className="mt-1 text-sm font-black">Demo role views</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {views.map((view) => {
                const Icon = view.icon;
                const isActive = view.id === active;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActive(view.id)}
                    className={`group rounded-[1.25rem] border p-4 text-left transition-all duration-200 ${
                      isActive
                        ? "border-[#14b8a6]/35 bg-[#14b8a6]/8 shadow-[0_16px_36px_rgba(20,184,166,0.08)]"
                        : "border-line bg-white hover:border-violet/20 hover:bg-mist"
                    }`}
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? "bg-[#0d9488] text-white" : "bg-mist text-graphite group-hover:bg-[#14b8a6]/10 group-hover:text-[#0d9488]"} transition-colors`}>
                      <Icon size={18} />
                    </div>
                    <p className={`text-sm font-bold ${isActive ? "text-[#0d9488]" : "text-ink"}`}>{view.label}</p>
                    <p className="mt-1 text-[0.68rem] text-graphite leading-5">{view.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dashboard render */}
        <div className="panel-sheen relative overflow-hidden rounded-[2.35rem] border border-[#07101e]/10 bg-[#07101e] p-3 shadow-[0_34px_110px_rgba(8,17,31,0.20)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-[1.8rem] bg-white"
            >
              <View />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 w-[calc(100%-2.5rem)] max-w-3xl -translate-x-1/2 rounded-full border border-white/15 bg-[#07101e]/82 px-4 py-2 text-center text-[0.68rem] font-semibold text-white/62 shadow-[0_18px_42px_rgba(0,0,0,0.22)] backdrop-blur">
            Demo Preview Only — Features and workflows subject to final release architecture.
          </div>
        </div>

        {/* Demo notice */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-[#f8fafc]/88 px-5 py-4">
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-[#14b8a6]" />
            <p className="text-sm font-medium text-graphite">
              <span className="font-bold text-ink">Demo Preview Only.</span>{" "}
              Features and workflows subject to final release architecture. All data is sample/placeholder.
            </p>
          </div>
          <Link
            href="/dashboard-preview"
            prefetch
            className="flex items-center gap-2 text-sm font-semibold text-[#0d9488] hover:gap-3 transition-all whitespace-nowrap"
          >
            Full preview page <ArrowRight size={14} />
          </Link>
        </div>

        {/* Workflow strip */}
        <div className="relative mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#080d18] px-6 py-7 shadow-[0_28px_90px_rgba(8,17,31,0.20)] sm:px-8">
          <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
          <div className="relative mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#14b8a6]">Experience inside INHERIX</p>
              <h3 className="mt-2 text-2xl font-black text-white">A calm preview of the controlled continuity journey.</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/48">
              The flow below shows how the product experience should feel: structured, guided, and review-oriented.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-6 relative">
            {sampleFlow.map((title, index) => (
              <div key={title} className="dashboard-workflow-card rounded-2xl border border-white/12 bg-white/[0.065] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <span className="text-[0.65rem] font-bold text-white/30 font-display">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-[0.68rem] leading-5 text-white/45">
                  {index < sampleFlow.length - 1 ? "Moves forward through controlled workflow visibility." : "Demo state shown after governance review."}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 relative">
            <Link href="/contact" prefetch className="btn-primary text-sm px-5 py-2.5">
              Schedule Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/how-it-works" prefetch className="btn-ghost-dark text-sm px-5 py-2.5">
              Understand Workflow
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
