import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ShieldCheck } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { TrustAndCta } from "@/components/sections/TrustAndCta";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "INHERIX is being designed with awareness toward responsible information handling and privacy principles.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
        <Container className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
            <ShieldCheck size={14} /> Governance Policy
          </div>
          <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl mb-6">Privacy Policy</h1>
          <p className="text-lg leading-8 text-white/50 max-w-3xl">
            INHERIX is being designed with awareness toward responsible information handling, governance-oriented operational practices, and continuity-focused privacy principles.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:text-ink prose-p:text-graphite prose-li:text-graphite">
            <h2>Information Handling Philosophy</h2>
            <p>The platform architecture focuses on:</p>
            <ul>
              <li>Responsible operational handling</li>
              <li>Governance visibility</li>
              <li>Structured continuity workflows</li>
              <li>Privacy-oriented coordination systems</li>
            </ul>

            <h2>Information Categories</h2>
            <p>May include:</p>
            <ul>
              <li>User profile information</li>
              <li>Continuity-related records</li>
              <li>Operational workflow data</li>
              <li>Governance visibility logs</li>
              <li>Coordination-related information</li>
            </ul>

            <h2>Operational Security Awareness</h2>
            <p>The platform is being designed with awareness toward:</p>
            <ul>
              <li>Encryption-oriented systems</li>
              <li>Access controls</li>
              <li>Operational monitoring</li>
              <li>Governance-oriented visibility</li>
            </ul>

            <h2>Data Usage Principles</h2>
            <p>Information is intended to support:</p>
            <ul>
              <li>Platform continuity workflows</li>
              <li>Operational coordination</li>
              <li>Governance visibility</li>
              <li>Continuity-oriented user experience</li>
            </ul>

            <h2>User Rights & Visibility</h2>
            <p>
              Users may request operational clarification regarding continuity-related information visibility and governance-oriented workflow handling.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
