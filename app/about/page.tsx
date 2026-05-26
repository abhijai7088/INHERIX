import type { Metadata } from "next";
import { BadgeCheck, Building2, HeartHandshake, Landmark, Scale, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { MotionReveal } from "@/components/sections/MotionReveal";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { contactChannels } from "@/content/contactChannels";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About INHERIX",
  description: "Founder vision, ethics-first continuity thinking, and India-first trust infrastructure positioning for INHERIX.",
  path: "/about"
});

const principles = [
  {
    title: "Founder Vision",
    text: "INHERIX is guided by a founder-led belief that family continuity should become more structured, responsible, and understandable in the digital age.",
    Icon: HeartHandshake
  },
  {
    title: "Long-Term Continuity Philosophy",
    text: "The platform is being shaped around long-term readiness rather than short-term storage, hype, or panic-driven access.",
    Icon: Landmark
  },
  {
    title: "India-First Trust Infrastructure",
    text: "INHERIX is being developed with Indian families, professionals, governance expectations, and continuity realities in mind.",
    Icon: Building2
  },
  {
    title: "Ethics-First Operations",
    text: "Sensitive family information requires calm processes, consent awareness, controlled visibility, and clear institutional boundaries.",
    Icon: ShieldCheck
  },
  {
    title: "Responsible Digital Continuity",
    text: "The mission is to help families organize records, instructions, and trusted relationships before moments of uncertainty arise.",
    Icon: BadgeCheck
  },
  {
    title: "Professional Collaboration",
    text: "INHERIX is positioned to work alongside advisors, advocates, accountants, and other trusted professionals where appropriate.",
    Icon: Scale
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About INHERIX"
        title="A founder-led continuity institution for modern families."
        intro="INHERIX is being built as India-first trust infrastructure for responsible digital continuity, combining structured family readiness, ethics-first operations, and professional collaboration."
        primary="Schedule Consultation"
        secondary="View Principles"
        visual="family"
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <MotionReveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0d9488]">Why INHERIX exists</p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
                  Continuity should be organized before families are forced to search for answers.
                </h2>
                <p className="mt-6 text-lg leading-9 text-graphite">
                  Digital asset loss is increasing globally, emergency information remains fragmented, and many families lack a responsible continuity structure. INHERIX exists to bring order, trust, and governance-oriented thinking to that sensitive moment.
                </p>
                <p className="mt-6 rounded-2xl border border-[#0f766e]/18 bg-[#ecfeff] p-4 text-sm font-semibold leading-7 text-[#12383a]">
                  Official communication: <a href={`mailto:${contactChannels.email}`} className="underline decoration-[#0f766e]/30 underline-offset-4">{contactChannels.email}</a>
                </p>
              </div>
            </MotionReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map(({ title, text, Icon }, index) => (
                <MotionReveal key={title} delay={index * 0.04}>
                  <article className="h-full rounded-2xl border border-line bg-[#fbfcfb] p-6 shadow-panel">
                    <Icon size={22} className="text-[#0b78b6]" />
                    <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-graphite">{text}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Build continuity around responsibility, not urgency."
        text="INHERIX is being developed as calm trust infrastructure for families, nominees, and professional continuity coordination."
        primary="Schedule Consultation"
        secondary="Explore Dashboard Preview"
      />
    </>
  );
}
