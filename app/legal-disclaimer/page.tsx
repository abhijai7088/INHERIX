import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AlertCircle, CheckCircle2, Landmark, Mail, Scale, ShieldCheck } from "lucide-react";
import { contactChannels } from "@/content/contactChannels";
import { createMetadata } from "@/lib/seo";
import { TrustAndCta } from "@/components/sections/TrustAndCta";

export const metadata: Metadata = createMetadata({
  title: "Legal Disclaimer",
  description: "INHERIX is designed as a continuity-oriented operational infrastructure platform.",
  path: "/legal-disclaimer"
});

const notAProvider = [
  "Court of law",
  "Legal authority",
  "Banking institution",
  "Government authority",
  "Judicial body",
  "Succession authority",
  "Financial regulatory institution"
];

const noIndependentAction = [
  "Determine legal ownership",
  "Validate inheritance claims",
  "Execute succession decisions",
  "Provide judicial rulings",
  "Determine entitlement outcomes",
  "Replace professional advice"
];

const supportScope = [
  "Continuity organization",
  "Governance visibility",
  "Trusted coordination",
  "Structured operational workflows",
  "Continuity-oriented readiness"
];

export default function LegalDisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
        <Container className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
            <ShieldCheck size={14} /> Governance Policy
          </div>
          <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl mb-6">Legal & Operational Disclaimer</h1>
          <p className="text-lg leading-8 text-white/50 max-w-3xl">
            INHERIX is designed as a continuity-oriented operational infrastructure platform focused on governance visibility and structured continuity coordination workflows.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 rounded-2xl border border-[#d8c99b]/35 bg-white p-5 shadow-[0_18px_54px_rgba(8,17,31,0.06)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#07101e] text-[#d8c99b]">
                  <AlertCircle size={20} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a6d2f]">Important legal boundary</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-ink">INHERIX is a continuity facilitation platform, not a legal decision-making authority.</h2>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-graphite">
                    The platform is intended to support structured continuity organization, governance visibility, and controlled coordination. It does not determine legal rights, ownership, succession entitlement, or statutory authority.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <section className="rounded-2xl border border-line bg-white p-6 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-rose/10 text-rose">
                    <Landmark size={19} />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-graphite/55">Institutional boundary</p>
                    <h3 className="text-lg font-black text-ink">INHERIX is not</h3>
                  </div>
                </div>
                <div className="grid gap-2">
                  {notAProvider.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-[#fbfcfb] px-4 py-3 text-sm font-semibold text-graphite">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose/70" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-line bg-white p-6 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber/10 text-[#8a6d2f]">
                    <Scale size={19} />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-graphite/55">Operational limitation</p>
                    <h3 className="text-lg font-black text-ink">INHERIX does not independently</h3>
                  </div>
                </div>
                <div className="grid gap-2">
                  {noIndependentAction.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-[#fbfcfb] px-4 py-3 text-sm font-semibold text-graphite">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c99b]" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <section className="rounded-2xl border border-line bg-white p-6 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0d9488]/10 text-[#0d9488]">
                    <CheckCircle2 size={19} />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-graphite/55">Platform role</p>
                    <h3 className="text-lg font-black text-ink">Intended support scope</h3>
                  </div>
                </div>
                <div className="grid gap-2">
                  {supportScope.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-graphite">
                      <CheckCircle2 size={15} className="shrink-0 text-[#0d9488]" />
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-line bg-white p-6 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#07101e] text-[#d8c99b]">
                    <ShieldCheck size={19} />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-graphite/55">Professional advice</p>
                    <h3 className="text-lg font-black text-ink">Legal process and advice boundary</h3>
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-7 text-graphite">
                  <p>
                    INHERIX does not replace wills, courts, succession certificates, probate processes, banking nomination systems, statutory legal procedures, or government authorities.
                  </p>
                  <p>
                    Users are encouraged to seek independent legal, tax, financial, or professional advice wherever required.
                  </p>
                  <div className="flex flex-col gap-3 rounded-2xl border border-[#0d9488]/18 bg-[#ecfeff] p-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="inline-flex items-center gap-2 font-bold text-[#12383a]">
                      <Mail size={16} />
                      Official communication
                    </span>
                    <a href={`mailto:${contactChannels.email}`} className="font-black text-[#0f766e] underline decoration-[#0f766e]/30 underline-offset-4">
                      {contactChannels.email}
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
