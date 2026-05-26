import type { Metadata } from "next";
import { Activity, ClipboardCheck, Eye, LockKeyhole, Scale, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { MotionReveal } from "@/components/sections/MotionReveal";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { contactChannels } from "@/content/contactChannels";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Operational Principles",
  description: "The operating principles behind INHERIX continuity infrastructure, controlled access, governance visibility, and responsible support.",
  path: "/operational-principles"
});

const principles = [
  { title: "Continuity-Focused", text: "INHERIX is designed around long-term family continuity planning and structured readiness.", Icon: ClipboardCheck },
  { title: "Trust-Oriented", text: "Sensitive information is positioned through controlled access, consent awareness, and responsible communication.", Icon: ShieldCheck },
  { title: "Institution-Style", text: "The platform experience is shaped to feel calm, professional, and governance-oriented.", Icon: Scale },
  { title: "Controlled Access", text: "Visibility is framed through defined roles, review workflows, and operational boundaries.", Icon: LockKeyhole },
  { title: "Audit Visibility", text: "Activity histories and workflow events support accountability in the product direction.", Icon: Activity },
  { title: "Operational Safeguards", text: "The platform is currently in controlled preview stage while infrastructure and support channels mature.", Icon: Eye }
];

export default function OperationalPrinciplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Operational Principles"
        title="Quiet institutional confidence, expressed through responsible operating principles."
        intro="INHERIX is positioned as continuity infrastructure, not a cloud locker, crypto platform, AI hype company, or document storage tool."
        primary="Contact INHERIX"
        secondary="Read Legal Disclaimer"
        visual="legal"
      />

      <section className="bg-[#f4f6f8] py-16 sm:py-24">
        <Container>
          <MotionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0d9488]">Controlled preview stage</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
                Built around governance, clarity, and long-term continuity.
              </h2>
              <p className="mt-6 text-lg leading-8 text-graphite">
                Platform currently in controlled preview stage. Official communication is available through <a href={`mailto:${contactChannels.email}`} className="font-bold text-[#0f766e] underline decoration-[#0f766e]/30 underline-offset-4">{contactChannels.email}</a>.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ title, text, Icon }, index) => (
              <MotionReveal key={title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-panel">
                  <Icon size={22} className="text-[#0b78b6]" />
                  <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="A continuity platform should be calm, clear, and accountable."
        text="INHERIX uses responsible language around encrypted systems, layered permissions, controlled access, audit visibility, operational safeguards, and infrastructure monitoring."
        primary="Contact INHERIX"
        secondary="View Dashboard Preview"
      />
    </>
  );
}
