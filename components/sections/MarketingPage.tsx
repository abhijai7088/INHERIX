import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  FileLock2,
  Fingerprint,
  FolderArchive,
  GanttChartSquare,
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
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { FamilyAccessStickyPanel } from "@/components/sections/FamilyAccessStickyPanel";
import { MotionReveal } from "@/components/sections/MotionReveal";
import { PageHero } from "@/components/sections/PageHero";
import type { MarketingPage as MarketingPageType, SectionItem } from "@/content/site";

type HeroVisual = "workflow" | "vault" | "family" | "emergency" | "security";

const iconMap = {
  Activity,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  FileLock2,
  Fingerprint,
  FolderArchive,
  GanttChartSquare,
  KeyRound,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Scale,
  ShieldCheck,
  UserCheck,
  UsersRound
};

export function MarketingPage({ page }: { page: MarketingPageType }) {
  const heroVisual = {
    "how-it-works": "workflow",
    "digital-vault": "vault",
    "family-access-system": "family",
    "emergency-trigger-system": "emergency",
    "security-compliance": "security"
  }[page.slug] as HeroVisual | undefined;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} visual={heroVisual} />
      <CuratedPage page={page} />
      <CtaBand title={page.cta.title} text={page.cta.text} primary={page.cta.primary} secondary={page.cta.secondary} />
    </>
  );
}

function CuratedPage({ page }: { page: MarketingPageType }) {
  if (page.slug === "how-it-works") return <HowItWorks page={page} />;
  if (page.slug === "digital-vault") return <DigitalVault page={page} />;
  if (page.slug === "family-access-system") return <FamilyAccess page={page} />;
  if (page.slug === "emergency-trigger-system") return <EmergencyTrigger page={page} />;
  if (page.slug === "security-compliance") return <SecurityCompliance page={page} />;

  return <EditorialOverview page={page} visual={<WorkflowMini />} />;
}

function EditorialOverview({ page, visual }: { page: MarketingPageType; visual: ReactNode }) {
  const first = page.sections[0];
  const support = page.sections.slice(1, 4);

  return (
    <section className="premium-surface relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-line" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <MotionReveal>
            <Badge tone="violet">{first?.eyebrow ?? page.eyebrow}</Badge>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-ink sm:text-5xl">{first?.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite">{first?.body}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {(first?.items ?? support.flatMap((section) => section.items ?? []).slice(0, 4)).map((item, index) => (
                <MotionReveal key={item.title} delay={index * 0.06}>
                  <CompactItem item={item} />
                </MotionReveal>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>{visual}</MotionReveal>
        </div>
      </Container>
    </section>
  );
}

function HowItWorks({ page }: { page: MarketingPageType }) {
  return (
    <>
      <EditorialOverview page={page} visual={<WorkflowMini />} />
      <section className="premium-surface relative overflow-hidden bg-mist py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(11,120,182,0.08),transparent_28rem),radial-gradient(circle_at_88%_12%,rgba(91,100,245,0.07),transparent_26rem)]" />
        <Container className="relative">
          <div className="mb-12 max-w-3xl">
            <Badge tone="violet">Controlled Workflow</Badge>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-5xl">
              One calm continuity journey, with visible review stages.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-[#0b78b6]/20 lg:block" />
            <div className="grid gap-5">
              {page.sections.map((section, index) => (
                <div key={section.title} className="group grid gap-5 rounded-[1.6rem] border border-line bg-white p-5 shadow-panel transition hover:-translate-y-0.5 hover:shadow-soft lg:grid-cols-[4rem_1fr_0.7fr] lg:items-start">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-black text-[#0b78b6]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-ink">{section.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{section.body}</p>
                  </div>
                  <div className="grid gap-2">
                    {(section.items ?? []).map((item) => (
                      <LightMiniItem key={item.title} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function DigitalVault({ page }: { page: MarketingPageType }) {
  const [lead, ...categories] = page.sections;

  return (
    <>
      <EditorialOverview page={page} visual={<VaultConsole />} />
      <section className="premium-surface relative overflow-hidden bg-mist py-16 sm:py-24">
        <Container>
          <MotionReveal>
            <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <Badge tone="violet">Vault Categories</Badge>
              <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-5xl">Structured records without a cluttered storage feel.</h2>
              <p className="mt-4 text-base leading-8 text-graphite">{lead.body}</p>
            </div>
            <p className="panel-sheen max-w-sm rounded-2xl border border-line bg-white p-4 text-sm leading-7 text-graphite shadow-panel">
              Preview content only. Categories represent organized continuity references, not public document access.
            </p>
            </div>
          </MotionReveal>
          <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((section, index) => {
              const wide = section.title.toLowerCase().includes("governance") || section.title.toLowerCase().includes("security");
              return (
              <MotionReveal key={section.title} className={wide ? "lg:col-span-3" : undefined} delay={index * 0.06}>
                <VaultTile section={section} index={index} />
              </MotionReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

function FamilyAccess({ page }: { page: MarketingPageType }) {
  return (
    <>
      <EditorialOverview page={page} visual={<FamilyMap />} />
      <section className="family-access-section premium-surface bg-white py-16 sm:py-24">
        <Container>
          <div className="family-access-grid grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FamilyAccessStickyPanel className="family-access-sticky rounded-[1.8rem] border border-line bg-white p-7 text-ink shadow-soft">
              <Badge tone="violet">Access Philosophy</Badge>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Family access should feel guided, not exposed.</h2>
              <p className="mt-4 text-sm leading-7 text-graphite">{page.intro}</p>
              <div className="mt-6 grid gap-3">
                {["Client", "Nominee", "Admin Review", "Selective Release"].map((role, index) => (
                  <div key={role} className="access-role-row flex items-center justify-between rounded-2xl border border-line bg-mist px-4 py-3" style={{ animationDelay: `${index * 0.08}s` }}>
                    <span className="text-sm font-bold text-ink">{role}</span>
                    <span className="h-2 w-2 rounded-full bg-[#0b78b6]" />
                  </div>
                ))}
              </div>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <span className="release-meter block h-full w-[82%] rounded-full bg-gradient-to-r from-violet via-[#0b78b6] to-teal" />
              </div>
            </FamilyAccessStickyPanel>
            <div className="family-access-steps grid gap-4">
              {page.sections.map((section, index) => (
                <PolicyRow key={section.title} section={section} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function EmergencyTrigger({ page }: { page: MarketingPageType }) {
  return (
    <>
      <EditorialOverview page={page} visual={<ReviewQueue />} />
      <section className="premium-surface relative overflow-hidden bg-mist py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(245,158,11,0.08),transparent_24rem),radial-gradient(circle_at_84%_12%,rgba(11,120,182,0.08),transparent_28rem)]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Badge tone="amber">Review Logic</Badge>
              <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-5xl">A trigger is handled as a controlled review workflow.</h2>
              <p className="mt-5 text-base leading-8 text-graphite">{page.sections[0]?.body}</p>
            </div>
            <div className="rounded-[1.8rem] border border-line bg-white p-5 shadow-soft">
              {page.sections.map((section, index) => (
                <div key={section.title} className="grid gap-4 border-b border-line py-5 last:border-b-0 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-sm font-black text-[#0b78b6]">{index + 1}</span>
                  <div>
                    <h3 className="font-black text-ink">{section.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-graphite">{section.body}</p>
                  </div>
                  <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-black text-[#0b78b6]">
                    Demo state
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function SecurityCompliance({ page }: { page: MarketingPageType }) {
  return (
    <>
      <EditorialOverview page={page} visual={<SecurityMatrixVisual />} />
      <section className="premium-surface relative overflow-hidden bg-mist py-16 sm:py-24">
        <Container>
          <MotionReveal>
            <div className="mb-10 max-w-3xl">
            <Badge tone="violet">Controls & Boundaries</Badge>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-5xl">Security language that stays mature, useful, and responsible.</h2>
            </div>
          </MotionReveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.sections.map((section, index) => (
              <MotionReveal key={section.title} delay={index * 0.06}>
                <ControlCard section={section} index={index} />
              </MotionReveal>
            ))}
          </div>
          <MotionReveal delay={0.1}>
            <div className="mt-8 rounded-[1.7rem] border border-amber/20 bg-amber/10 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-lg font-black text-ink">Legal and operational boundary</h3>
                <p className="mt-2 max-w-4xl text-sm leading-7 text-graphite">
                  INHERIX supports continuity organization and workflow visibility. It is not positioned as a court, bank, government authority, judicial body, succession authority, or financial regulator.
                </p>
              </div>
              <Link href="/legal-disclaimer" prefetch className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">
                Read Disclaimer <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          </MotionReveal>
        </Container>
      </section>
    </>
  );
}

function CompactItem({ item }: { item: SectionItem }) {
  const Icon = getIcon(item.icon);

  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-panel transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-[#0b78b6]">
          <Icon size={18} />
        </span>
        <div>
          <h3 className="text-sm font-black text-ink">{item.title}</h3>
          <p className="mt-1.5 text-xs leading-6 text-graphite">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

function LightMiniItem({ item }: { item: SectionItem }) {
  const Icon = getIcon(item.icon);

  return (
    <div className="rounded-2xl border border-line bg-mist p-3">
      <div className="flex items-start gap-3">
        <Icon size={16} className="mt-0.5 shrink-0 text-[#0b78b6]" />
        <div>
          <p className="text-xs font-black text-ink">{item.title}</p>
          <p className="mt-1 text-[0.68rem] leading-5 text-graphite">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

function VaultTile({ section, index }: { section: MarketingPageType["sections"][number]; index: number }) {
  const Icon = getIcon(section.items?.[0]?.icon);
  const wide = section.title.toLowerCase().includes("governance") || section.title.toLowerCase().includes("security");

  return (
    <article className={`${wide ? "lg:col-span-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-6" : ""} vault-card group relative overflow-hidden rounded-[1.6rem] border border-line bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:shadow-soft`}>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b78b6]/10 text-[#0b78b6]">
        <Icon size={22} />
      </span>
      <div>
        <h3 className={`${wide ? "lg:mt-0" : "mt-5"} relative text-lg font-black leading-snug text-ink`}>{section.title}</h3>
        <p className={`relative mt-3 text-sm leading-7 text-graphite ${wide ? "max-w-3xl" : ""}`}>{section.body}</p>
        <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <span className="vault-meter block h-full rounded-full bg-gradient-to-r from-violet via-[#0b78b6] to-teal" style={{ width: `${52 + index * 6}%`, animationDelay: `${index * 0.08}s` }} />
        </div>
      </div>
      {wide && (
        <span className="relative mt-5 inline-flex w-fit items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-[#0b78b6] lg:mt-0">
          Governance layer
        </span>
      )}
    </article>
  );
}

function PolicyRow({ section, index }: { section: MarketingPageType["sections"][number]; index: number }) {
  const Icon = getIcon(section.items?.[0]?.icon);

  return (
    <article className="family-policy-row rounded-[1.5rem] border border-line bg-white p-5 shadow-panel transition hover:-translate-y-0.5 hover:shadow-soft" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="grid gap-4 sm:grid-cols-[3.5rem_1fr]">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet/10 text-violet">
          <Icon size={21} />
        </span>
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="text-xs font-black text-graphite/45">0{index + 1}</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <h3 className="text-lg font-black text-ink">{section.title}</h3>
          <p className="mt-3 text-sm leading-7 text-graphite">{section.body}</p>
          {(section.items ?? []).length > 0 && (
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {section.items?.map((item) => (
                <CompactItem key={item.title} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function ControlCard({ section, index }: { section: MarketingPageType["sections"][number]; index: number }) {
  const Icon = getIcon(section.items?.[0]?.icon);

  return (
    <article className="control-card group relative overflow-hidden rounded-[1.6rem] border border-line bg-white p-6 text-ink shadow-panel transition hover:-translate-y-1 hover:shadow-soft">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b78b6] via-[#5bd7ff] to-violet opacity-80" />
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-[#0b78b6]">
        <Icon size={22} />
      </span>
      <p className="relative mt-5 text-xs font-black text-graphite/45">0{index + 1}</p>
      <h3 className="relative mt-2 text-lg font-black leading-snug">{section.title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-graphite">{section.body}</p>
    </article>
  );
}

function WorkflowMini() {
  return (
    <div className="relative rounded-[2rem] border border-line bg-mist p-5 shadow-soft">
      <div className="rounded-[1.55rem] bg-ink p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase text-white/35">Continuity Map</p>
            <h3 className="mt-2 text-2xl font-black">Controlled workflow</h3>
          </div>
          <ShieldCheck className="text-[#5bd7ff]" />
        </div>
        <div className="mt-10 grid grid-cols-4 gap-3">
          {["Client", "Nominee", "Proof", "Review"].map((step, index) => (
            <div key={step} className="relative rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              {index < 3 && <span className="absolute left-full top-1/2 hidden h-px w-3 bg-cyan-300/40 lg:block" />}
              <p className="text-xs font-black text-white">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4">
          <p className="text-sm font-black text-[#5bd7ff]">Controlled release after review visibility</p>
        </div>
      </div>
    </div>
  );
}

function VaultConsole() {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 shadow-soft">
      <div className="grid gap-3 sm:grid-cols-2">
        {["Bank records", "Insurance", "Property", "Digital refs", "Family notes", "Instructions"].map((label, index) => (
          <div key={label} className={`${index === 0 ? "sm:col-span-2 bg-white text-ink" : "bg-mist text-ink"} rounded-2xl border border-line p-5 shadow-panel`}>
            <div className="flex items-center justify-between">
              <FolderArchive size={19} className="text-[#0b78b6]" />
              <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[0.62rem] font-black text-[#0b78b6]">{index === 0 ? "Primary" : "Preview"}</span>
            </div>
            <p className="mt-4 text-sm font-black">{label}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <span className="block h-full w-2/3 rounded-full bg-[#0b78b6]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FamilyMap() {
  return (
    <div className="rounded-[2rem] border border-line bg-mist p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[1.5rem] bg-ink p-6 text-white">
          <p className="text-xs font-black uppercase text-white/35">Relationship layer</p>
          <div className="mt-7 grid gap-4">
            {["Client profile", "Trusted nominee", "Admin review"].map((label, index) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 text-xs font-black text-[#5bd7ff]">{index + 1}</span>
                <span className="text-sm font-black">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {["No direct access", "Proof visibility", "Selective release"].map((label) => (
            <div key={label} className="rounded-2xl border border-line bg-white p-5 shadow-panel">
              <CheckCircle2 size={17} className="text-[#0b78b6]" />
              <p className="mt-3 text-sm font-black text-ink">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewQueue() {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 shadow-soft">
      <div className="rounded-[1.5rem] bg-ink p-6 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black">Review queue</h3>
          <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-black text-amber">Demo</span>
        </div>
        <div className="mt-6 grid gap-3">
          {[
            ["Proof submitted", "Verification"],
            ["Admin review", "Under review"],
            ["More proof requested", "Pending"],
            ["Selective release", "Controlled"]
          ].map(([label, status]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm font-bold text-white/75">{label}</span>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[0.68rem] font-black text-[#5bd7ff]">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityMatrixVisual() {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 shadow-soft">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["RBAC", UserCheck],
          ["Audit logs", Activity],
          ["Consent", BadgeCheck],
          ["Encryption-ready", Fingerprint]
        ].map(([label, Icon], index) => {
          const VisualIcon = Icon as typeof UserCheck;
          return (
            <div key={label as string} className={`${index === 0 ? "bg-white text-ink shadow-panel" : "bg-mist text-ink"} rounded-2xl border border-line p-5`}>
              <VisualIcon className="text-[#0b78b6]" size={20} />
              <p className="mt-4 text-sm font-black">{label as string}</p>
              <p className="mt-2 text-xs leading-5 text-graphite">Governance-oriented preview layer</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getIcon(icon?: string) {
  if (!icon) return ShieldCheck;
  return iconMap[icon as keyof typeof iconMap] ?? ShieldCheck;
}
