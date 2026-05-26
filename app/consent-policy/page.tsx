import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ShieldCheck } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { TrustAndCta } from "@/components/sections/TrustAndCta";

export const metadata: Metadata = createMetadata({
  title: "Consent & Authorization",
  description: "Structured governance-oriented workflows designed around continuity-focused user consent principles.",
  path: "/consent-policy"
});

export default function ConsentPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
        <Container className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
            <ShieldCheck size={14} /> Governance Policy
          </div>
          <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl mb-6">Consent & Operational Authorization Policy</h1>
          <p className="text-lg leading-8 text-white/50 max-w-3xl">
            Structured governance-oriented workflows designed around responsible operational coordination and continuity-focused user consent principles.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:text-ink prose-p:text-graphite prose-li:text-graphite">
            <h2>Consent-Oriented Workflow Structure</h2>
            <p>INHERIX is designed around:</p>
            <ul>
              <li>Controlled operational visibility</li>
              <li>Governance-oriented coordination</li>
              <li>User-managed continuity workflows</li>
              <li>Structured operational authorization</li>
            </ul>

            <h2>User Authorization Principles</h2>
            <p>Users maintain operational control over:</p>
            <ul>
              <li>Continuity organization</li>
              <li>Beneficiary structures</li>
              <li>Visibility preferences</li>
              <li>Coordination workflows</li>
            </ul>

            <h2>Workflow Verification Awareness</h2>
            <p>
              Certain continuity-oriented operational workflows may involve structured review visibility and governance-oriented operational handling.
            </p>

            <h2>Communication Consent</h2>
            <p>
              Users may receive continuity-related operational communication associated with consultation workflows, platform coordination, or governance-oriented continuity activities.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
