import {
  Activity,
  ArrowRight,
  Bell,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileLock2,
  Fingerprint,
  KeyRound,
  Landmark,
  LockKeyhole,
  Network,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primary?: string;
  secondary?: string;
  visual?: "workflow" | "vault" | "family" | "emergency" | "security" | "dashboard" | "contact" | "legal";
};

export function PageHero({
  eyebrow,
  title,
  intro,
  primary = "Book Consultation",
  secondary = "View Dashboard Preview",
  visual = "workflow"
}: PageHeroProps) {
  const primaryHref = visual === "contact" ? "/contact#consultation-form" : "/contact";
  const secondaryHref = visual === "contact" ? "/dashboard-preview" : "/dashboard-preview";

  return (
    <section className="hero-dark relative overflow-hidden border-b border-white/10 pb-20 pt-20 text-white sm:pb-24 sm:pt-24">
      <div className="absolute inset-0 premium-grid-dark opacity-30" />
      <div className="absolute left-[16%] top-[8%] h-[30rem] w-[30rem] rounded-full bg-violet/6 blur-[130px]" />
      <div className="absolute bottom-[-12rem] right-[18%] h-[28rem] w-[28rem] rounded-full bg-[#0b78b6]/6 blur-[120px]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5bd7ff]/30 to-transparent" />

      <Container className="relative">
        <div className="grid min-w-0 gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(620px,1.2fr)] xl:items-center">
          <div className="animate-fade-up min-w-0 max-w-3xl [animation-fill-mode:both]">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-[#0b78b6]/10 px-4 py-2 text-xs font-black text-[#5bd7ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5bd7ff]" />
              {eyebrow}
            </div>
            <h1 className="mt-7 font-display text-[clamp(2.75rem,6vw,4.65rem)] font-black leading-[0.98] text-white">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{intro}</p>
            <div className="mt-7 grid max-w-2xl gap-2 sm:grid-cols-3">
              {["Controlled", "Verification-oriented", "Audit-visible"].map((item) => (
                <div key={item} className="animated-rail rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-xs font-black text-white/70 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} prefetch className="magnetic-action inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b78b6] px-6 py-3 text-sm font-black text-white shadow-[0_18px_42px_rgba(14,165,233,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1596d2]">
                {primary}
                <ArrowRight size={16} />
              </Link>
              <Link href={secondaryHref} prefetch className="premium-glint inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                {secondary}
              </Link>
            </div>
          </div>

          <div className="animate-fade-up min-w-0 [animation-delay:80ms] [animation-fill-mode:both]">
            <HeroVisual visual={visual} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({ visual }: { visual: NonNullable<PageHeroProps["visual"]> }) {
  if (visual === "vault") return <VaultHero />;
  if (visual === "family") return <FamilyHero />;
  if (visual === "emergency") return <EmergencyHero />;
  if (visual === "security") return <SecurityHero />;
  if (visual === "dashboard") return <DashboardHero />;
  if (visual === "contact") return <ContactHero />;
  if (visual === "legal") return <LegalHero />;
  return <WorkflowHero />;
}

function HeroPanel({ children }: { children: ReactNode }) {
  return (
    <div className="panel-sheen premium-depth relative mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-soft backdrop-blur">
      <div className="premium-orbit" />
      <div className="relative min-h-[420px] overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#060b15] p-6">
        <div className="absolute inset-0 premium-grid-dark opacity-30" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function VisualTitle({ eyebrow, title, icon }: { eyebrow: string; title: string; icon: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[0.7rem] font-black uppercase tracking-[0.16em] text-white/40">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
      </div>
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0b78b6] text-white shadow-[0_18px_42px_rgba(14,165,233,0.25)]">
        {icon}
      </span>
    </div>
  );
}

function WorkflowHero() {
  const steps = [
    { title: "Structure Information", text: "Organize important information in a secure digital vault.", Icon: FileLock2, preview: "vault", tone: "from-[#0b78b6]/28 to-[#5b64f5]/10" },
    { title: "Define Instructions", text: "Add clear instructions for every situation and wish.", Icon: BookOpenCheck, preview: "instructions", tone: "from-[#0b78b6]/24 to-[#5bd7ff]/10" },
    { title: "Assign Nominees", text: "Select trusted nominees and define roles clearly.", Icon: UsersRound, preview: "nominees", tone: "from-[#5b64f5]/26 to-[#a43fe0]/10" },
    { title: "Configure Access", text: "Set access levels, conditions and verification for each nominee.", Icon: LockKeyhole, preview: "access", tone: "from-[#0b78b6]/26 to-[#5b64f5]/10" },
    { title: "Family Coordination", text: "Keep your family informed and aligned when it matters most.", Icon: Network, preview: "family", tone: "from-[#0f766e]/32 to-[#d8c99b]/10" }
  ];

  return (
    <div className="panel-sheen premium-depth relative mx-auto w-full max-w-4xl rounded-[1.8rem] border border-[#5bd7ff]/14 bg-white/5 p-2 shadow-soft backdrop-blur">
      <div className="premium-orbit" />
      <div className="relative overflow-hidden rounded-[1.45rem] border border-[#5bd7ff]/14 bg-[#030712] p-4 sm:p-5">
        <div className="absolute inset-0 premium-grid-dark opacity-24" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0b78b6]/14 blur-[100px]" />
        <div className="absolute bottom-[-7rem] left-[8%] h-64 w-64 rounded-full bg-[#5b64f5]/10 blur-[100px]" />
        <div className="absolute bottom-[-6rem] right-[6%] h-64 w-64 rounded-full bg-[#14b8a6]/10 blur-[100px]" />
        <div className="relative">
          <div className="text-center">
            <p className="flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.24em] text-[#5bd7ff]">
              <span className="hidden h-px w-12 bg-[#5bd7ff]/50 sm:block" />
              How INHERIX Works
              <span className="hidden h-px w-12 bg-[#5bd7ff]/50 sm:block" />
            </p>
            <h2 className="mx-auto mt-3 max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[3.2rem]">
              Five Steps to <span className="bg-gradient-to-r from-[#5bd7ff] via-[#5b64f5] to-[#14b8a6] bg-clip-text text-transparent">Secure Family Continuity</span>
            </h2>
          </div>

          <div className="relative mt-8 grid gap-3 xl:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-7 hidden border-t border-dashed border-[#5bd7ff]/40 xl:block" />
            {steps.map(({ title, text, Icon, preview, tone }, index) => (
              <div key={title} className="relative">
                {index < steps.length - 1 ? (
                  <ArrowRight className="absolute -right-5 top-7 z-20 hidden text-[#5bd7ff] xl:block" size={20} />
                ) : null}
                <div className={`relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#5bd7ff]/38 bg-gradient-to-br ${index === 4 ? "from-[#14b8a6] to-[#0f766e]" : "from-[#0b78b6] to-[#5b64f5]"} text-xl font-black text-white shadow-[0_0_34px_rgba(91,215,255,0.28)]`}>
                  {index + 1}
                </div>
                <div className={`mt-3 flex min-h-[23.5rem] flex-col rounded-[1.25rem] border border-[#1f8fff]/28 bg-gradient-to-b ${tone} p-3 text-center shadow-[0_22px_60px_rgba(0,0,0,0.24)]`}>
                  <Icon className="mx-auto text-[#5bd7ff]" size={24} />
                  <h3 className="mt-3 min-h-[2.6rem] text-base font-black leading-tight text-white">{title}</h3>
                  <p className="mx-auto mt-2 min-h-[3.8rem] max-w-[10.5rem] text-[0.72rem] font-medium leading-[1.15rem] text-white/72">{text}</p>
                  <WorkflowStepPreview type={preview} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-2 rounded-[1.35rem] border border-[#5bd7ff]/14 bg-white/[0.045] p-3 sm:grid-cols-5">
            {["Information Structured", "Instructions Defined", "Nominees Assigned", "Access Configured", "Family Secured"].map((item, index) => (
              <div key={item} className="flex items-center justify-center gap-2 rounded-2xl px-2 py-2 text-center text-[0.72rem] font-bold text-white/68">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#5bd7ff]/20 bg-[#0b78b6]/15">
                  <CheckCircle2 size={14} className={index === 4 ? "text-[#14b8a6]" : "text-[#5bd7ff]"} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowStepPreview({ type }: { type: string }) {
  if (type === "vault") {
    return (
      <div className="mt-auto rounded-2xl border border-[#5bd7ff]/16 bg-[#07111f]/82 p-2.5">
        <div className="relative mx-auto mb-2.5 grid h-16 w-20 place-items-center rounded-2xl border border-[#5bd7ff]/18 bg-[#0b78b6]/12">
          <div className="absolute bottom-2 h-10 w-12 rounded-xl bg-[#1f93f2]/25 shadow-[0_0_28px_rgba(31,147,242,0.22)]" />
          <FileLock2 className="relative text-[#5bd7ff]" size={24} />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {["Property", "Legal", "Banking", "Assets"].map((item) => (
            <span key={item} className="min-w-0 rounded-lg border border-white/8 bg-white/[0.055] px-1 py-1.5 text-center text-[0.48rem] font-bold leading-none text-white/66">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (type === "instructions") {
    return (
      <div className="mt-auto rounded-2xl border border-[#5bd7ff]/16 bg-[#07111f]/82 p-2.5">
        <p className="mb-2 text-left text-[0.58rem] font-black text-white/70">Instructions</p>
        {["Emergency", "Legal Notes", "Asset Wishes", "Medical"].map((item) => (
          <div key={item} className="mb-1.5 flex items-center gap-2 rounded-xl bg-white/[0.055] px-2.5 py-1.5 last:mb-0">
            <CheckCircle2 size={12} className="text-[#14b8a6]" />
            <span className="text-[0.55rem] font-bold text-white/68">{item}</span>
          </div>
        ))}
      </div>
    );
  }
  if (type === "nominees") {
    return (
      <div className="relative mt-auto h-28 overflow-hidden rounded-2xl border border-[#5bd7ff]/16 bg-[#07111f]/82">
        <span className="absolute inset-x-4 top-1/2 h-px border-t border-dashed border-[#5bd7ff]/32" />
        <span className="absolute left-1/2 top-5 h-[4.7rem] -translate-x-1/2 border-l border-dashed border-[#5bd7ff]/32" />
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#8b7cff]/36 bg-[#8b7cff]/18 text-[0.58rem] font-black text-white shadow-[0_0_22px_rgba(139,124,255,0.16)]">You</span>
        {[
          { label: "Primary", className: "left-1/2 top-3 -translate-x-1/2" },
          { label: "Co", className: "left-2 top-1/2 -translate-y-1/2" },
          { label: "Co", className: "right-2 top-1/2 -translate-y-1/2" },
          { label: "Contingent", className: "left-1/2 bottom-2 -translate-x-1/2" }
        ].map((node) => (
          <span key={node.label + node.className} className={`absolute rounded-full border border-[#5bd7ff]/28 bg-[#07111f] px-2 py-1 text-[0.48rem] font-black text-white/80 ${node.className}`}>
            {node.label}
          </span>
        ))}
      </div>
    );
  }
  if (type === "access") {
    return (
      <div className="mt-auto rounded-2xl border border-[#5bd7ff]/16 bg-[#07111f]/82 p-2.5">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-[1.1rem] border border-[#5bd7ff]/24 bg-[#0b78b6]/18 text-[#5bd7ff] shadow-[0_0_30px_rgba(91,215,255,0.14)]">
          <ShieldCheck size={30} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["Rules", "Verify", "Release"].map((item) => (
            <span key={item} className="rounded-lg bg-white/[0.055] py-1.5 text-[0.5rem] font-bold text-white/62">{item}</span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="mt-auto rounded-2xl border border-[#14b8a6]/20 bg-gradient-to-b from-[#0f766e]/20 to-[#07111f]/82 p-2.5">
      <div className="mb-2.5 grid h-14 place-items-center rounded-2xl bg-[radial-gradient(circle_at_50%_80%,rgba(216,201,155,0.28),transparent_4rem)]">
        <UsersRound className="text-[#d8c99b]" size={28} />
      </div>
      {["Notifications", "Secure Updates", "Coordination"].map((item) => (
        <div key={item} className="mb-1.5 flex items-center gap-2 rounded-xl bg-white/[0.055] px-2.5 py-1.5 last:mb-0">
          <Network size={12} className="text-[#5bd7ff]" />
          <span className="text-[0.54rem] font-bold text-white/68">{item}</span>
        </div>
      ))}
    </div>
  );
}

function VaultHero() {
  const records = [
    ["Identity", "2 refs", FileLock2],
    ["Property", "1 file", Landmark],
    ["Insurance", "1 doc", ShieldCheck],
    ["Financial", "2 notes", KeyRound]
  ];
  return (
    <HeroPanel>
      <VisualTitle eyebrow="Digital vault" title="Continuity record map" icon={<FileLock2 size={20} />} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {records.map(([label, count, Icon], index) => (
          <div key={String(label)} className="float-slow rounded-3xl border border-white/10 bg-white/5 p-5" style={{ animationDelay: `${index * 0.15}s` }}>
            <Icon className="text-[#5bd7ff]" size={22} />
            <p className="mt-4 text-xl font-black text-white">{label as string}</p>
            <p className="text-sm font-bold text-white/50">{count as string}</p>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-violet to-teal" style={{ width: `${52 + index * 10}%` }} />
            </div>
          </div>
        ))}
      </div>
    </HeroPanel>
  );
}

function FamilyHero() {
  const roles = [
    { label: "Client", detail: "Profile owner", tone: "bg-white text-ink" },
    { label: "Nominee", detail: "Trusted request role", tone: "bg-white/[0.08] text-white" },
    { label: "Advisor", detail: "Planning support", tone: "bg-white/[0.08] text-white" },
    { label: "Admin Review", detail: "Governance layer", tone: "bg-white/[0.08] text-white" }
  ];

  const checkpoints = ["Relationship defined", "Proof reviewed", "Release controlled"];

  return (
    <HeroPanel>
      <VisualTitle eyebrow="Family access" title="Trusted relationship governance" icon={<Network size={20} />} />
      <div className="relative mt-8 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(91,215,255,0.08),transparent_15rem),radial-gradient(circle_at_90%_95%,rgba(20,184,166,0.07),transparent_13rem)]" />
        <div className="relative grid gap-4 lg:grid-cols-[0.86fr_1fr]">
          <div className="rounded-[1.15rem] border border-white/10 bg-[#050a13]/72 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/42">Role boundary</p>
              <span className="rounded-full border border-[#5bd7ff]/20 bg-[#5bd7ff]/10 px-3 py-1 text-[0.62rem] font-black text-[#5bd7ff]">Preview</span>
            </div>
            <div className="space-y-2.5">
              {roles.map((role, index) => (
                <div
                  key={role.label}
                  className={`release-step flex items-center gap-3 rounded-2xl border border-white/10 p-3 ${role.tone}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#5bd7ff]/12 text-[#5bd7ff]">
                    <UsersRound size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black">{role.label}</span>
                    <span className="block truncate text-[0.68rem] opacity-65">{role.detail}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.055] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/42">Controlled path</p>
                <h3 className="mt-2 text-xl font-black text-white">Client to nominee visibility</h3>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0b78b6] text-white shadow-[0_14px_34px_rgba(14,165,233,0.22)]">
                <ShieldCheck size={18} />
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {checkpoints.map((item, index) => (
                <div key={item} className="consult-flow-row rounded-2xl border border-white/10 bg-[#050a13]/58 p-3" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-white">{item}</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[0.62rem] font-black text-[#5bd7ff]">0{index + 1}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="workflow-meter h-full rounded-full bg-gradient-to-r from-[#5b64f5] via-[#0b78b6] to-[#14b8a6]" style={{ width: `${58 + index * 14}%`, animationDelay: `${index * 0.12}s` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#5bd7ff]/16 bg-[#5bd7ff]/8 p-3 text-xs font-bold leading-5 text-white/70">
              Access is presented as a structured preview with proof review, governance visibility, and controlled release language.
            </div>
          </div>
        </div>
      </div>
    </HeroPanel>
  );
}

function EmergencyHero() {
  const rows = [
    ["Request submitted", "Submitted", "status-submitted"],
    ["Proof uploaded", "Verification", "status-proof"],
    ["Admin review", "Under Review", "status-review"],
    ["Selective release", "Controlled", "status-approved"]
  ];
  return (
    <HeroPanel>
      <VisualTitle eyebrow="Trigger workflow" title="Review before release" icon={<Bell size={20} />} />
      <div className="mt-8 space-y-3">
        {rows.map(([label, status, className]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="flex items-center gap-3 text-sm font-bold text-white">
                <ClipboardCheck size={17} className="text-[#5bd7ff]" />
                {label}
              </p>
              <span className={`rounded-full px-3 py-1 text-xs font-black ${className}`}>{status}</span>
            </div>
          </div>
        ))}
      </div>
    </HeroPanel>
  );
}

function SecurityHero() {
  const controls = [
    { label: "RBAC awareness", state: "Configured", width: "62%" },
    { label: "Audit visibility", state: "Enabled", width: "58%" },
    { label: "Consent logs", state: "Active", width: "66%" },
    { label: "No public access", state: "Restricted", width: "72%" }
  ];
  return (
    <HeroPanel>
      <VisualTitle eyebrow="Trust architecture" title="Governance control plane" icon={<LockKeyhole size={20} />} />
      <div className="relative mt-8 grid gap-4">
        {controls.map((control, index) => (
          <div key={control.label} className="security-row rounded-2xl border border-white/10 bg-white/5 p-4" style={{ animationDelay: `${index * 0.16}s` }}>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm font-bold text-white">
                <Fingerprint size={16} className="text-[#5bd7ff] security-fingerprint" />
                {control.label}
              </p>
              <p className="text-xs font-black text-[#5bd7ff]">{control.state}</p>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="security-meter h-2 rounded-full bg-gradient-to-r from-violet to-teal" style={{ width: control.width, animationDelay: `${index * 0.18}s` }} />
            </div>
          </div>
        ))}
      </div>
    </HeroPanel>
  );
}

function DashboardHero() {
  const roles = [
    { label: "Admin", value: "3", detail: "pending requests", Icon: ShieldCheck },
    { label: "Client", value: "10", detail: "records mapped", Icon: UsersRound },
    { label: "Nominee", value: "2", detail: "released items", Icon: KeyRound }
  ];

  return (
    <HeroPanel>
      <VisualTitle eyebrow="Product preview" title="Role-based command center" icon={<Activity size={20} />} />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {roles.map(({ label, value, detail, Icon }, index) => {
          return (
          <div key={String(label)} className="role-preview-card rounded-2xl border border-white/10 bg-white/5 p-4" style={{ animationDelay: `${index * 0.16}s` }}>
            <Icon size={16} className="text-[#5bd7ff]" />
            <p className="text-xs font-bold text-white/45">{label}</p>
            <p className="mt-3 text-3xl font-black text-white">{value}</p>
            <p className="mt-1 text-xs font-bold text-[#5bd7ff]">{detail}</p>
          </div>
          );
        })}
      </div>
      <div className="mt-5 rounded-2xl border border-white/10 bg-white p-5 text-ink">
        <p className="text-sm font-black">Client {"->"} Nominee {"->"} Proof {"->"} Admin Review {"->"} Release</p>
        <div className="mt-4 h-2.5 rounded-full bg-slate-100">
          <div className="workflow-meter h-2.5 w-[78%] rounded-full bg-gradient-to-r from-violet via-teal to-amber" />
        </div>
      </div>
    </HeroPanel>
  );
}

function ContactHero() {
  return (
    <HeroPanel>
      <VisualTitle eyebrow="Consultation flow" title="From request to structured guidance" icon={<CalendarClock size={20} />} />
      <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-panel">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(91,215,255,0.08),transparent_12rem)]" />
        <div className="relative grid gap-4">
          {[
            ["01", "Share details", "Use the consultation form below"],
            ["02", "Scope discussion", "Continuity needs are reviewed"],
            ["03", "Guided next step", "Workflow fit is explained"]
          ].map(([num, title, text], index) => (
            <div key={title} className="consult-flow-row rounded-2xl border border-white/10 bg-white/[0.055] p-4" style={{ animationDelay: `${index * 0.16}s` }}>
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0b78b6]/20 text-sm font-black text-[#5bd7ff]">{num}</span>
                <div>
                  <p className="text-sm font-black text-white">{title}</p>
                  <p className="mt-1 text-xs font-bold text-white/45">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/contact#consultation-form" prefetch className="magnetic-action relative mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-ink">
          Go to consultation form
          <ArrowRight size={15} />
        </Link>
      </div>
    </HeroPanel>
  );
}

function LegalHero() {
  const items = [
    "Not a court, bank, or government authority",
    "Does not determine legal ownership",
    "Does not replace professional advice",
    "Supports structured continuity organization"
  ];
  return (
    <HeroPanel>
      <VisualTitle eyebrow="Governance policy" title="Clear operational boundaries" icon={<Landmark size={20} />} />
      <div className="mt-8 space-y-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-white">
            <span>{item}</span>
            {index === 3 ? <CheckCircle2 size={18} className="text-[#5bd7ff]" /> : <KeyRound size={18} className="text-white/30" />}
          </div>
        ))}
      </div>
    </HeroPanel>
  );
}
