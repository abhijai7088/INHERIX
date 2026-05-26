"use client";

import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

type Step = {
  title: string;
  text: string;
};

type ProcessFlowProps = {
  title: string;
  text: string;
  steps: Step[];
};

const stepIcons = [
  // Profile setup
  <svg key="profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  // Organize
  <svg key="organize" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  // Nominees
  <svg key="nominees" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Verification
  <svg key="verify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
];

export function ProcessFlow({ title, text, steps }: ProcessFlowProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="absolute inset-0 premium-grid-dark opacity-30 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-violet/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-teal/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal mb-5 backdrop-blur-sm">
            <ShieldCheck size={14} />
            Governance Workflow
          </div>
          <h2 className="heading-section text-4xl text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-white/55 max-w-2xl mx-auto leading-8">{text}</p>
        </motion.div>

        {/* Steps — horizontal with connector line on lg, stacked on mobile */}
        <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-5">
          {/* Connecting gradient line — desktop only */}
          <div className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet via-teal to-violet hidden lg:block opacity-60" />

          {steps.slice(0, 4).map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col lg:items-center lg:text-center group"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border-2 border-violet/40 bg-ink shadow-glow-sm mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:border-violet">
                <span className="text-sm font-bold text-white">{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-teal lg:mx-auto transition-colors duration-300 group-hover:bg-teal/20">
                {stepIcons[i] ?? <CheckCircle2 size={20} />}
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex-1 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 shadow-panel">
                <h3 className="font-semibold text-white leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/how-it-works"
            className="btn-primary text-sm px-6 py-3"
          >
            Explore Full Workflow
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/dashboard-preview"
            className="btn-ghost-dark text-sm px-6 py-3"
          >
            View Dashboard Preview
          </Link>
        </div>
      </Container>
    </section>
  );
}
