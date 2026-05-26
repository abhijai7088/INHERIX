import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function TrustAndCta() {
  return (
    <>
      <section className="border-t border-line py-20 bg-mist">
        <Container className="max-w-4xl text-center">
          <h2 className="heading-section text-3xl text-ink sm:text-4xl">
            Built Around Operational Trust, Governance & Continuity Visibility
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite text-left">
            INHERIX is being developed with a long-term vision toward helping families and trusted professionals improve continuity organization through governance-oriented workflows, structured operational visibility, and continuity-focused coordination systems.
          </p>
          <p className="mt-4 text-lg leading-8 text-graphite text-left mb-8">
            The legal and governance framework is intended to support:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Transparency", "Operational maturity", "Responsible continuity handling", "Governance visibility", "Long-term institutional trust"].map((item) => (
              <span key={item} className="rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-panel">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />
        <Container className="relative text-center max-w-3xl">
          <h2 className="heading-section text-4xl sm:text-5xl mb-10">Explore A Structured Continuity Infrastructure.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/security-compliance" prefetch className="btn-primary px-6 py-3.5 text-sm bg-teal hover:bg-teal-light">
              Explore Security Framework
            </Link>
            <Link href="/dashboard-preview" prefetch className="btn-ghost-dark px-6 py-3.5 text-sm">
              View Dashboard Preview
            </Link>
            <Link href="/how-it-works" prefetch className="btn-ghost-dark px-6 py-3.5 text-sm">
              Understand Workflow
            </Link>
            <Link href="/contact" prefetch className="btn-ghost-dark px-6 py-3.5 text-sm">
              Schedule Consultation
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
