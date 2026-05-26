import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type CtaBandProps = {
  title: string;
  text: string;
  primary: string;
  secondary: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function CtaBand({
  title,
  text,
  primary,
  secondary,
  primaryHref = "/contact",
  secondaryHref = "/dashboard-preview"
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <Container>
        <div className="animate-fade-up relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink px-7 py-11 shadow-soft [animation-fill-mode:both] sm:px-12 sm:py-14">
          <div className="absolute inset-0 premium-grid-dark opacity-40" />
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-violet/12 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/100 to-transparent" />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-black text-[#5bd7ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5bd7ff]" />
                Continuity consultation
              </div>
              <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/50">{text}</p>
              <p className="mt-5 flex items-center gap-2 text-xs font-bold text-white/40">
                <span className="h-px w-8 bg-white/20" />
                No commitment required - continuity consultation only
              </p>
            </div>

            <div className="flex min-w-fit flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={primaryHref} prefetch className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#5bd7ff]">
                {primary}
                <ArrowRight size={16} />
              </Link>
              <Link href={secondaryHref} prefetch className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                {secondary}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
