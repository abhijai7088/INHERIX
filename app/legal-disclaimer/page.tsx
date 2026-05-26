import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, AlertCircle } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { TrustAndCta } from "@/components/sections/TrustAndCta";

export const metadata: Metadata = createMetadata({
  title: "Legal Disclaimer",
  description: "INHERIX is designed as a continuity-oriented operational infrastructure platform.",
  path: "/legal-disclaimer"
});

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
      <section className="py-20">
        <Container className="max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:text-ink prose-p:text-graphite prose-li:text-graphite">
            
            {/* Disclaimer Block */}
            <div className="rounded-2xl border border-rose/20 bg-rose/5 p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle size={24} className="text-rose" />
                <h2 className="!my-0 text-rose">Important Disclaimer</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-ink">INHERIX IS NOT:</h3>
                  <ul className="text-sm">
                    <li>A court of law</li>
                    <li>A legal authority</li>
                    <li>A banking institution</li>
                    <li>A government authority</li>
                    <li>A judicial body</li>
                    <li>A succession authority</li>
                    <li>A financial regulatory institution</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">INHERIX DOES NOT INDEPENDENTLY:</h3>
                  <ul className="text-sm">
                    <li>Determine legal ownership</li>
                    <li>Validate inheritance claims</li>
                    <li>Execute legal succession decisions</li>
                    <li>Provide judicial rulings</li>
                    <li>Guarantee entitlement outcomes</li>
                    <li>Replace legal, financial, or regulatory advice</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Platform Positioning</h2>
            <p>The platform is intended to support:</p>
            <ul>
              <li>Continuity organization</li>
              <li>Governance visibility</li>
              <li>Trusted coordination</li>
              <li>Structured operational workflows</li>
              <li>Continuity-oriented operational readiness</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Trust Positioning & CTA */}
      <TrustAndCta />
    </div>
  );
}
