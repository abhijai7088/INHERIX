import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ShieldCheck } from "lucide-react";
import { contactChannels } from "@/content/contactChannels";
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
            <h2>Information Collected</h2>
            <p>INHERIX may collect and organize information categories that support continuity workflows and operational coordination.</p>
            <ul>
              <li>Identity information</li>
              <li>Nominee information</li>
              <li>Uploaded records/documents</li>
              <li>Continuity instructions</li>
              <li>Communication records</li>
            </ul>

            <h2>Purpose of Collection</h2>
            <p>Information is intended to support:</p>
            <ul>
              <li>Continuity planning</li>
              <li>Access coordination</li>
              <li>Verification workflows</li>
              <li>Emergency communication</li>
              <li>Platform operations</li>
            </ul>

            <h2>Storage & Security</h2>
            <p>The platform is being designed with:</p>
            <ul>
              <li>Encrypted systems</li>
              <li>Restricted role-based access</li>
              <li>Audit logging</li>
              <li>Operational safeguards</li>
              <li>Controlled infrastructure access</li>
            </ul>

            <h2>User Rights</h2>
            <p>Users may request correction, deletion, consent withdrawal, or information export through official communication channels.</p>

            <h2>Incident Response</h2>
            <p>In case of suspected unauthorized access or data incidents, users may be notified through official communication channels.</p>

            <h2>Official Communication</h2>
            <p>For privacy-related communication, users may contact <a href={`mailto:${contactChannels.email}`}>{contactChannels.email}</a>.</p>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
