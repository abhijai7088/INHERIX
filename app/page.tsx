import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Eye,
  FileLock2,
  Fingerprint,
  HeartHandshake,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  ShieldCheck,
  UserCheck,
  UsersRound
} from "lucide-react";
import { LazyDashboardPreview } from "@/components/dashboard-preview/LazyDashboardPreview";
import { MotionReveal } from "@/components/sections/MotionReveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { homePage } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: homePage.seo.title,
  description: homePage.seo.description,
  path: "/"
});

const problemIcons = [FileLock2, UsersRound, Eye];
const definitionIcons = [Layers3, UsersRound, ClipboardCheck, ShieldCheck, Activity, LockKeyhole];
const workflowIcons = [UserCheck, UsersRound, Fingerprint, Scale, KeyRound];
const roleIcons = [UsersRound, UserCheck, Landmark, ShieldCheck];
const governanceIcons = [BadgeCheck, LockKeyhole, Activity, UsersRound, Fingerprint, Eye];
const securityIcons = [ShieldCheck, Building2, LockKeyhole, Activity, Layers3, Scale];
const professionalNetworkIcons = [Landmark, Scale, BadgeCheck, ShieldCheck, Building2, Network];

function DemoDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/55 backdrop-blur ${className}`}>
      {homePage.finalCta.disclaimer}
    </p>
  );
}

function DarkSection({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden bg-[#030712] py-24 text-white sm:py-32 ${className}`}>
      <div className="absolute inset-0 premium-grid-dark opacity-[0.26]" />
      <div className="absolute left-[8%] top-0 h-96 w-96 rounded-full bg-[#12375f]/25 blur-[130px]" />
      <div className="absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-[#14b8a6]/14 blur-[120px]" />
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. Emotional Hero */}
      <section className="relative isolate overflow-hidden bg-[#030712] text-white">
        <div className="absolute inset-0 premium-grid-dark opacity-[0.18]" />
        <div className="absolute left-[-10rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#2f2d91]/24 blur-[140px]" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#14b8a6]/16 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_22%,rgba(59,130,246,0.13),transparent_30rem),radial-gradient(circle_at_74%_88%,rgba(20,184,166,0.14),transparent_28rem)]" />
        <div className="motion-blur-band motion-blur-band-one" />
        <div className="motion-blur-band motion-blur-band-two" />
        <div className="parallax-depth-layer" />

        <Container className="relative z-10 grid min-h-[calc(100svh-3.8rem)] items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-4xl">
            <div className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-teal-400 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              {homePage.hero.positioning}
            </div>

            <h1 className="mt-6 max-w-5xl text-[2.75rem] font-extrabold leading-[1.02] text-white sm:text-[3.35rem] lg:text-[3.65rem] xl:text-[4.05rem]">
              <span className="animate-fade-up block [animation-delay:120ms] [animation-fill-mode:both]">Organize What</span>
              <span className="animate-fade-up block text-gradient-hero [animation-delay:220ms] [animation-fill-mode:both]">Matters Most</span>
              <span className="animate-fade-up block [animation-delay:320ms] [animation-fill-mode:both]">For Your Family</span>
            </h1>

            <p className="mt-7 max-w-2xl animate-fade-up text-base leading-8 text-white/70 sm:text-lg [animation-delay:420ms] [animation-fill-mode:both]">
              {homePage.hero.intro}
            </p>
            <p className="mt-4 max-w-xl animate-fade-up border-l border-[#14b8a6]/45 pl-4 text-sm font-semibold leading-7 text-[#ccfbf1]/86 [animation-delay:470ms] [animation-fill-mode:both]">
              {homePage.hero.trustLine}
            </p>

            {/* Security Badges Row */}
            <div className="animate-fade-up [animation-delay:520ms] [animation-fill-mode:both]">
              <div className="hero-security-badges">
                <div className="hero-security-badge">
                  <span className="hero-security-dot" />
                  Encrypted Systems
                </div>
                <div className="hero-security-badge">
                  <span className="hero-security-dot" />
                  RBAC Governance
                </div>
                <div className="hero-security-badge">
                  <span className="hero-security-dot" />
                  Audit Trails
                </div>
                <div className="hero-security-badge">
                  <span className="hero-security-dot" />
                  3-Role Architecture
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Dashboard Card */}
          <div className="animate-fade-up lg:-mr-4 [animation-delay:240ms] [animation-fill-mode:both]">
            <div className="hero-dashboard-card">
              {/* Card Header */}
              <div className="hero-card-header">
                <div className="hero-card-logo">
                  <div className="hero-card-logo-icon">
                    <ShieldCheck size={18} className="text-white" />
                  </div>
                  <div className="hero-card-logo-text">
                    <span className="hero-card-logo-title">INHERIX</span>
                    <span className="hero-card-logo-sub">Admin Control Center</span>
                  </div>
                </div>
                <div className="hero-live-badge">
                  <span className="hero-live-dot" />
                  Demo Preview
                </div>
              </div>

              {/* Stats Grid */}
              <div className="hero-stats-grid">
                <div className="hero-stat-cell">
                  <div className="hero-stat-label">Documents</div>
                  <div className="hero-stat-value">16</div>
                  <div className="hero-stat-change positive">Illustrative</div>
                </div>
                <div className="hero-stat-cell">
                  <div className="hero-stat-label">Nominees</div>
                  <div className="hero-stat-value">4</div>
                  <div className="hero-stat-change positive">Mapped roles</div>
                </div>
                <div className="hero-stat-cell">
                  <div className="hero-stat-label">Requests</div>
                  <div className="hero-stat-value">2</div>
                  <div className="hero-stat-change warning">1 pending</div>
                </div>
              </div>

              {/* Workflow Panel */}
              <div className="hero-workflow-section">
                <div className="hero-workflow-header">
                  <LockKeyhole size={14} className="hero-workflow-icon" />
                  <span className="hero-workflow-title">Controlled Release Workflow</span>
                </div>
                <div className="hero-workflow-step">
                  <span className="hero-step-label">Nominee proof submitted</span>
                  <span className="hero-status-badge verification">Verification</span>
                </div>
                <div className="hero-workflow-step">
                  <span className="hero-step-label">Admin review in progress</span>
                  <span className="hero-status-badge under-review">Under Review</span>
                </div>
                <div className="hero-workflow-step">
                  <span className="hero-step-label">Selective release approved</span>
                  <span className="hero-status-badge released">Released</span>
                </div>
              </div>
              <div className="hero-dashboard-disclaimer">
                {homePage.finalCta.disclaimer}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem Statement */}
      <section className="relative overflow-hidden bg-[#eef2f5] pb-24 pt-28 sm:pb-32 sm:pt-36">
        <div className="absolute inset-0 premium-grid opacity-70" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <MotionReveal>
              <div>
                <Badge tone="amber">{homePage.problem.eyebrow}</Badge>
                <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
                  {homePage.problem.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-graphite">{homePage.problem.text}</p>
                <div className="mt-9 grid gap-4">
                  {homePage.problem.items.map((item, index) => {
                    const Icon = problemIcons[index] ?? FileLock2;
                    return (
                      <div key={item.title} className="rounded-[1.35rem] border border-line bg-white/95 p-5 shadow-[0_18px_46px_rgba(8,17,31,0.065)]">
                        <div className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf6f8] text-[#0b78b6]">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-ink">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-graphite">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-[0_22px_70px_rgba(8,17,31,0.13)]">
                <div className="overflow-hidden rounded-[1.55rem] bg-[#08111f]">
                  <Image
                    src={homePage.assets.problem}
                    alt="Fragmented family records representing digital continuity challenges"
                    width={1710}
                    height={960}
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* 3. What INHERIX Is */}
      <section className="relative overflow-hidden bg-[#eef2f5] py-24 sm:py-32">
        <div className="absolute inset-0 premium-grid opacity-45" />
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#07101e] p-6 text-white shadow-[0_34px_110px_rgba(8,17,31,0.18)] sm:p-8 lg:p-10">
            <div className="absolute inset-0 premium-grid-dark opacity-35" />
            <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#12375f]/40 blur-[120px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#14b8a6]/16 blur-[110px]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <MotionReveal>
                <div>
                  <Badge tone="green">{homePage.definition.eyebrow}</Badge>
                  <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.06] sm:text-5xl">
                    INHERIX is not a document locker. It is structured continuity infrastructure.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-9 text-white/62">{homePage.definition.text}</p>
                  <div className="mt-8 border-l border-[#14b8a6]/45 pl-5">
                    <p className="text-sm font-semibold leading-7 text-[#99f6e4]/85">
                      Built for secure organization, trusted coordination, proof review, governance visibility, and controlled operational release.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {homePage.definition.principles.slice(0, 4).map((principle, index) => {
                  const Icon = definitionIcons[index] ?? Layers3;
                  return (
                    <MotionReveal key={principle} delay={index * 0.05}>
                      <div className="group h-full rounded-[1.65rem] border border-white/10 bg-white/[0.065] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#14b8a6]/35 hover:bg-white/[0.085]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[#75d7ef]">
                          <Icon size={21} />
                        </div>
                        <h3 className="mt-5 text-lg font-black text-white">{principle}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/52">
                          {[
                            "Continuity information is arranged into clear, responsible structures.",
                            "Trusted relationships are defined before any future coordination is needed.",
                            "Requests are framed around proof and review rather than open access.",
                            "Approved visibility stays controlled, traceable, and operationally clear."
                          ][index]}
                        </p>
                      </div>
                    </MotionReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. India's Digital Continuity Infrastructure */}
      <DarkSection>
        <MotionReveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#14b8a6]">Infrastructure positioning</p>
            <h2 className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-[4.4rem]">{homePage.infrastructure.title}</h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/62">{homePage.infrastructure.text}</p>
          </div>
        </MotionReveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {homePage.infrastructure.pillars.map((pillar, index) => (
            <MotionReveal key={pillar.title} delay={index * 0.06}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-[#14b8a6]/35">
                <span className="text-xs font-black text-[#14b8a6]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/56">{pillar.text}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </DarkSection>

      {/* 5. Core Trust Workflow */}
      <section className="relative overflow-hidden bg-[#f4f6f8] py-24 sm:py-32">
        <div className="absolute inset-0 premium-grid opacity-75" />
        <Container className="relative z-10">
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="green">Core trust workflow</Badge>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">Client to controlled release, through structured review.</h2>
              <p className="mt-6 text-lg leading-8 text-graphite">
                The INHERIX workflow is designed to make continuity coordination understandable without implying automatic access or entitlement outcomes.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-16 grid gap-4 lg:grid-cols-5">
            {homePage.workflow.map((step, index) => {
              const Icon = workflowIcons[index] ?? ShieldCheck;
              return (
                <MotionReveal key={step.title} delay={index * 0.05}>
                  <div className="relative h-full rounded-[2rem] border border-line bg-[#fbfcfb]/88 p-6 shadow-panel">
                    {index < homePage.workflow.length - 1 ? (
                      <div className="absolute left-1/2 top-full h-4 w-px bg-line lg:left-full lg:top-1/2 lg:h-px lg:w-4" />
                    ) : null}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08111f] text-white">
                      <Icon size={21} />
                    </div>
                    <span className="mt-6 block text-xs font-black uppercase tracking-[0.18em] text-[#0b78b6]">Step 0{index + 1}</span>
                    <h3 className="mt-2 text-xl font-black text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. Dashboard Preview */}
      <LazyDashboardPreview />

      {/* 7. Professional Access Layer */}
      <section className="relative overflow-hidden bg-[#eef2f5] py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <MotionReveal>
              <div className="lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-[2rem] border border-[#07101e]/10 bg-[#030712] p-2 shadow-[0_28px_90px_rgba(8,17,31,0.16)]">
                  <div className="overflow-hidden rounded-[1.55rem]">
                    <Image
                      src={homePage.assets.professional}
                      alt="Professional continuity consultation scene for trusted planning"
                      width={1710}
                      height={960}
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 rounded-[1.7rem] border border-white/80 bg-white/78 p-5 shadow-[0_18px_56px_rgba(8,17,31,0.08)] backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0d9488]">Experience inside INHERIX</p>
                  <div className="mt-4 grid gap-3">
                    {["Guided family setup", "Trusted professional context", "Controlled review visibility"].map((item, index) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-[#f8fafc] px-4 py-3">
                        <span className="text-sm font-bold text-ink">{item}</span>
                        <span className="text-xs font-black text-[#0b78b6]">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div>
                <Badge tone="amber">{homePage.professionalAccess.eyebrow}</Badge>
                <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">{homePage.professionalAccess.title}</h2>
                <p className="mt-6 text-lg leading-9 text-graphite">{homePage.professionalAccess.text}</p>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {homePage.professionalAccess.roles.map((role, index) => {
                    const Icon = roleIcons[index] ?? UsersRound;
                    return (
                      <div key={role.title} className="rounded-[1.55rem] border border-white/80 bg-white/72 p-5 shadow-[0_16px_46px_rgba(8,17,31,0.07)] backdrop-blur transition hover:-translate-y-1 hover:border-[#14b8a6]/35 hover:bg-white">
                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#e7f7fb] text-[#0b78b6]">
                          <Icon size={20} />
                        </span>
                        <h3 className="mt-4 font-black text-ink">{role.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-graphite">{role.text}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 rounded-[1.5rem] border border-[#14b8a6]/28 bg-[#ecfeff] p-5 shadow-[0_18px_46px_rgba(13,148,136,0.08)]">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#050816] text-[#14b8a6]">
                      <HeartHandshake size={20} />
                    </div>
                    <p className="text-sm font-semibold leading-7 text-[#4b3b1c]">
                      Built for calm legal consultation, family continuity planning, emergency coordination, and professional review without fear-based messaging.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* 7b. Emergency Coordination Moment */}
      <section className="relative overflow-hidden bg-[#f4f6f8] py-20 sm:py-24">
        <div className="absolute inset-0 premium-grid opacity-55" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <MotionReveal>
              <div>
                <Badge tone="green">Emergency continuity moment</Badge>
                <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
                  Hospital, family, and review roles stay coordinated without panic-driven access.
                </h2>
                <p className="mt-6 text-lg leading-9 text-graphite">
                  INHERIX presents emergency continuity as a controlled coordination workflow: a family request is logged, proof is reviewed, professional context can be attached, and authorized visibility remains governed.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <div className="relative overflow-hidden rounded-[2.2rem] border border-[#07101e]/10 bg-[#07101e] p-6 text-white shadow-[0_28px_95px_rgba(8,17,31,0.18)]">
                <div className="absolute inset-0 premium-grid-dark opacity-30" />
                <div className="relative grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/42">Care context</p>
                        <h3 className="mt-2 text-2xl font-black">Emergency request intake</h3>
                      </div>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0d9488] text-white">
                        <Activity size={20} />
                      </span>
                    </div>
                    <div className="mt-6 grid gap-3">
                      {["Hospital contact noted", "Family nominee identified", "Proof awaiting review"].map((item, index) => (
                        <div key={item} className="release-step rounded-2xl border border-white/10 bg-[#050a13]/58 p-4" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-bold text-white/78">{item}</p>
                            <span className="text-xs font-black text-[#14b8a6]">0{index + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/42">Review channel</p>
                    <div className="mt-5 grid gap-3">
                      {[
                        { title: "Family", text: "Submits continuity request", Icon: UsersRound },
                        { title: "Professional", text: "Adds consultation context", Icon: Scale },
                        { title: "Admin", text: "Reviews proof and access scope", Icon: ClipboardCheck },
                        { title: "Authorized release", text: "Controlled visibility only", Icon: ShieldCheck }
                      ].map(({ title, text, Icon }, index) => (
                        <div key={title} className="consult-flow-row flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050a13]/58 p-4" style={{ animationDelay: `${index * 0.08}s` }}>
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#14b8a6]/12 text-[#14b8a6]">
                            <Icon size={17} />
                          </span>
                          <span>
                            <span className="block text-sm font-black text-white">{title}</span>
                            <span className="block text-xs font-semibold leading-5 text-white/45">{text}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* 8. Trust & Governance */}
      <DarkSection>
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#14b8a6]">Trust and governance</p>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl">Built around trust, governance, and responsible continuity coordination.</h2>
          </div>
        </MotionReveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homePage.governance.map((item, index) => {
            const Icon = governanceIcons[index] ?? ShieldCheck;
            return (
              <MotionReveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-white/20">
                  <Icon size={22} className="text-[#14b8a6]" />
                  <h3 className="mt-5 text-lg font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{item.text}</p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </DarkSection>

      {/* 9. Security & Compliance */}
      <section className="relative overflow-hidden bg-[#eef2f5] py-24 sm:py-32">
        <div className="absolute inset-0 premium-grid opacity-70" />
        <Container className="relative z-10">
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="violet">Security and compliance</Badge>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">Security & Trust Infrastructure</h2>
              <p className="mt-6 text-lg leading-8 text-graphite">
                INHERIX uses responsible architecture language because this homepage is a preview of the product direction, not a claim that backend systems are live.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-line bg-[#07101e] p-5 text-white shadow-[0_24px_80px_rgba(8,17,31,0.13)] sm:p-6">
              <div className="relative grid gap-3 md:grid-cols-4">
                {[
                  { label: "User", Icon: UserCheck },
                  { label: "Encrypted Vault", Icon: FileLock2 },
                  { label: "Verification", Icon: Fingerprint },
                  { label: "Authorized Release", Icon: KeyRound }
                ].map(({ label, Icon }, index, steps) => (
                  <div key={label} className="relative">
                    {index < steps.length - 1 ? (
                      <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-[#14b8a6] md:block" size={22} />
                    ) : null}
                    <div className="security-trust-node rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-5" style={{ animationDelay: `${index * 0.12}s` }}>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#14b8a6]/12 text-[#14b8a6]">
                        <Icon size={20} />
                      </span>
                      <p className="mt-4 text-sm font-black text-white">{label}</p>
                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <span className="security-meter block h-full rounded-full bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#14b8a6]" style={{ width: `${64 + index * 10}%`, animationDelay: `${index * 0.14}s` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homePage.security.map((item, index) => {
              const Icon = securityIcons[index] ?? ShieldCheck;
              return (
                <MotionReveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-[2rem] border border-line bg-[#fbfcfb]/88 p-6 shadow-panel">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6f8] text-[#0b78b6]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 text-lg font-black text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 10. Founder Vision */}
      <section className="relative overflow-hidden bg-[#07111f] py-24 text-white sm:py-32">
        <div className="absolute inset-0 premium-grid-dark opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c99b]/28 to-transparent" />
        <div className="absolute left-[-8rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#12375f]/24 blur-[130px]" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#14b8a6]/16 blur-[140px]" />
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <MotionReveal>
              <div className="flex h-full flex-col justify-center rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#14b8a6]">Founder vision</p>
                <h2 className="mt-6 text-4xl font-extrabold leading-[1.06] sm:text-5xl">{homePage.founder.title}</h2>
                <p className="mt-6 text-lg leading-9 text-white/62">{homePage.founder.text}</p>
                <div className="mt-8 h-px w-32 bg-gradient-to-r from-[#14b8a6]/65 to-transparent" />
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <figure className="relative min-h-[30rem] overflow-hidden rounded-[2.4rem] border border-white/12 bg-[#0b1524] p-8 shadow-[0_34px_120px_rgba(0,0,0,0.30)] sm:p-10">
                <Image
                  src={homePage.assets.professional}
                  alt="Professional continuity consultation scene for trusted planning"
                  width={1710}
                  height={960}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-28"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(3,7,18,0.96)_0%,rgba(3,7,18,0.86)_48%,rgba(3,7,18,0.55)_100%)]" />
                <div className="absolute inset-0 premium-grid-dark opacity-20" />
                <div className="relative flex min-h-[24rem] flex-col justify-end">
                  <blockquote className="max-w-3xl text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl">
                    &ldquo;{homePage.founder.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-white/10 pt-5 text-sm font-bold text-[#99f6e4]">
                    {homePage.founder.attribution}
                  </figcaption>
                </div>
              </figure>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* 11. Future Professional Network */}
      <section className="relative overflow-hidden bg-[#f4f6f8] py-20 sm:py-28">
        <div className="absolute inset-0 premium-grid opacity-55" />
        <Container className="relative z-10">
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge tone="amber">Professional network</Badge>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">{homePage.professionalNetwork.title}</h2>
              <p className="mt-6 text-lg leading-8 text-graphite">{homePage.professionalNetwork.text}</p>
            </div>
          </MotionReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homePage.professionalNetwork.categories.map((category, index) => {
              const Icon = professionalNetworkIcons[index] ?? Building2;
              return (
                <MotionReveal key={category} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-panel">
                    <Icon size={20} className="text-[#0b78b6]" />
                    <h3 className="mt-4 text-lg font-black text-ink">{category}</h3>
                    <p className="mt-2 text-sm leading-7 text-graphite">
                      Future collaboration category for continuity planning, documentation context, and responsible family coordination.
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 12. Future of Digital Continuity */}
      <section className="relative overflow-hidden bg-[#0a1624] py-20 text-white sm:py-28">
        <div className="absolute inset-0 premium-grid-dark opacity-18" />
        <Container className="relative z-10">
          <MotionReveal>
            <div className="mx-auto max-w-5xl rounded-[2.3rem] border border-white/10 bg-white/[0.045] p-8 text-center backdrop-blur sm:p-12">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d8c99b]">Future of digital continuity</p>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl">{homePage.future.title}</h2>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-white/64">{homePage.future.text}</p>
            </div>
          </MotionReveal>
        </Container>
      </section>

      {/* 13. Premium CTA */}
      <section className="relative overflow-hidden bg-[#050816] py-28 text-white sm:py-36">
        <div className="absolute inset-0 premium-grid-dark opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_50%_100%,rgba(216,201,155,0.16),transparent_38rem)]" />
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#12375f]/18 blur-[150px]" />
        <Container className="relative z-10">
          <MotionReveal>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.8rem] border border-white/12 bg-[#0b1625]/82 p-8 text-center shadow-[0_34px_130px_rgba(0,0,0,0.30)] backdrop-blur sm:p-14 lg:p-16">
              <div className="mx-auto mb-10 h-px max-w-xl bg-gradient-to-r from-transparent via-[#d8c99b]/55 to-transparent" />
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d8c99b]">{homePage.hero.positioning}</p>
              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.06] sm:text-6xl">{homePage.finalCta.title}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/64">{homePage.finalCta.text}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-[#030712] transition hover:-translate-y-0.5 hover:bg-[#ccfbf1]"
                >
                  {homePage.finalCta.primary}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/16 bg-white/[0.07] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
                >
                  {homePage.finalCta.secondary}
                </Link>
              </div>
              <DemoDisclaimer className="mt-8" />
            </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}
