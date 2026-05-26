import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ShieldCheck } from "lucide-react";
import { contactChannels } from "@/content/contactChannels";
import { createMetadata } from "@/lib/seo";
import { TrustAndCta } from "@/components/sections/TrustAndCta";

export const metadata: Metadata = createMetadata({
  title: "Data Access & Visibility",
  description: "Operational visibility systems and governance-oriented workflow structures designed to support continuity coordination.",
  path: "/data-access-policy"
});

export default function DataAccessPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
        <Container className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
            <ShieldCheck size={14} /> Governance Policy
          </div>
          <h1 className="heading-hero text-4xl sm:text-5xl lg:text-6xl mb-6">Data Access & Governance Visibility Policy</h1>
          <p className="text-lg leading-8 text-white/50 max-w-3xl">
            Operational visibility systems and governance-oriented workflow structures designed to support continuity coordination and responsible information handling.
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:text-ink prose-p:text-graphite prose-li:text-graphite">
            <h2>Controlled Access Framework</h2>
            <p>The platform is designed with:</p>
            <ul>
              <li>Role-based operational visibility</li>
              <li>Structured workflow permissions</li>
              <li>Governance-oriented access systems</li>
              <li>Continuity-focused operational controls</li>
            </ul>

            <h2>Verification-Oriented Workflow Handling</h2>
            <p>
              Continuity-related workflows may involve structured review systems intended to support governance visibility and operational accountability.
            </p>

            <h2>Audit Visibility</h2>
            <p>The platform architecture may support:</p>
            <ul>
              <li>Operational tracking</li>
              <li>Workflow event visibility</li>
              <li>Governance-oriented audit logs</li>
              <li>Structured continuity monitoring</li>
            </ul>

            <h2>Third-Party Access Limitation</h2>
            <p>
              INHERIX does not sell operational continuity information or provide unrestricted third-party visibility access.
            </p>

            <h2>Official Communication</h2>
            <p>For data-access communication, users may contact <a href={`mailto:${contactChannels.email}`}>{contactChannels.email}</a>.</p>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
