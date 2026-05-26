import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import type { LegalPage as LegalPageType } from "@/content/legal";

export function LegalPage({ page }: { page: LegalPageType }) {
  return (
    <>
      <PageHero eyebrow="Legal & Governance" title={page.title} intro={page.intro} primary="Explore Security Framework" secondary="Schedule Consultation" visual="legal" />
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-5">
          {page.sections.map((section) => (
            <Card key={section.title}>
              <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-graphite">{section.body}</p>
              {section.bullets ? (
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <span key={bullet} className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-graphite">
                      {bullet}
                    </span>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </Container>
      </section>
      <CtaBand title="Explore A Structured Continuity Infrastructure." text="The legal and governance framework is intended to support transparency, operational maturity, responsible continuity handling, and long-term institutional trust." primary="View Dashboard Preview" secondary="Understand Workflow" />
    </>
  );
}
