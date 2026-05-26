import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { TrustAndCta } from "@/components/sections/TrustAndCta";
import { contactChannels } from "@/content/contactChannels";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Structured operational terms governing the use of the INHERIX continuity-oriented platform.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
        <Container className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
            <ShieldCheck size={14} /> Governance Policy
          </div>
          <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl mb-6">Terms & Conditions</h1>
          <p className="text-lg leading-8 text-white/50 max-w-3xl">
            Structured operational terms governing the use of the INHERIX continuity-oriented platform, workflows, governance systems, and operational coordination services.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:text-ink prose-p:text-graphite prose-li:text-graphite">
            <h2>Platform Usage Terms</h2>
            <p>
              Defines responsible operational use of the INHERIX platform and continuity-oriented workflows.
            </p>

            <h2>User Responsibilities</h2>
            <p>Users remain responsible for:</p>
            <ul>
              <li>Information accuracy</li>
              <li>Operational coordination</li>
              <li>Authorized continuity usage</li>
              <li>Compliance with applicable laws</li>
            </ul>

            <h2>Operational Workflow Limitations</h2>
            <p>INHERIX operates as a continuity-oriented operational infrastructure platform and does not independently determine:</p>
            <ul>
              <li>Legal ownership</li>
              <li>Succession entitlement</li>
              <li>Judicial validity</li>
              <li>Legal authority</li>
            </ul>

            <h2>Service Availability</h2>
            <p>
              Platform services may evolve, improve, pause, or update as part of operational development and governance-oriented continuity enhancement.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Platform designs, operational systems, workflows, branding, UI structures, and continuity-oriented infrastructure remain protected intellectual property unless otherwise contractually agreed.
            </p>

            <h2>Official Communication</h2>
            <p>For terms-related communication, users may contact <a href={`mailto:${contactChannels.email}`}>{contactChannels.email}</a>.</p>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
