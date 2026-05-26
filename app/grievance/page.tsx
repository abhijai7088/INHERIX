import type { Metadata } from "next";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { contactChannels } from "@/content/contactChannels";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Grievance",
  description: "Submit a frontend-only grievance preview request for INHERIX continuity platform support.",
  path: "/grievance"
});

export default function GrievancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance Support"
        title="Grievance"
        intro="Use this preview form to share a grievance or governance-related support concern. Current operational communication is handled through official support channels during the controlled preview stage."
        primary="Submit Grievance"
        secondary="Contact INHERIX"
        visual="legal"
      />

      <section className="bg-[#eef2f5] py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[2rem] border border-line bg-white p-7 shadow-panel">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06111f] text-[#c8b88a]">
                <ShieldCheck size={22} />
              </div>
              <h2 className="mt-6 text-3xl font-black leading-tight text-ink">Structured grievance intake.</h2>
              <p className="mt-4 text-sm leading-7 text-graphite">
                Grievance details are intended to be reviewed through a calm operational process. No legal, financial, tax, or inheritance advice is provided through this website preview.
              </p>
              <p className="mt-4 rounded-2xl border border-[#0f766e]/18 bg-[#ecfeff] p-4 text-sm font-semibold leading-7 text-[#12383a]">
                For current operational communication, users may contact: <a href={`mailto:${contactChannels.email}`} className="underline decoration-[#0f766e]/30 underline-offset-4">{contactChannels.email}</a>. Official support channels may respond subject to operational stage and availability.
              </p>
              <a
                href={`mailto:${contactChannels.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#07101e]/10 bg-white px-5 py-3 text-sm font-black text-[#07101e] shadow-panel transition hover:-translate-y-0.5 hover:border-[#0f766e]/25"
              >
                <Mail size={16} />
                Email Grievance Desk
              </a>
              <a
                href={contactChannels.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#0f766e]/20 bg-[#0f766e]/8 px-5 py-3 text-sm font-black text-[#0f766e] transition hover:-translate-y-0.5 hover:bg-[#0f766e]/12"
              >
                <MessageCircle size={16} />
                Continue on WhatsApp
              </a>
              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-graphite">Official social channels</p>
                <SocialLinks className="mt-3" />
              </div>
            </div>

            <form className="grid gap-4 rounded-[2rem] border border-line bg-white p-6 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Full Name
                  <Input placeholder="Enter your full name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Phone Number
                  <Input placeholder="Enter your mobile number" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Email Address
                <Input placeholder="Enter your email address" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Grievance
                <textarea
                  rows={7}
                  placeholder="Share your grievance or support concern"
                  className="rounded-2xl border border-line bg-white px-4 py-3 text-sm leading-7 text-ink outline-none transition placeholder:text-slate-400 focus:border-[#0f766e]/60 focus:ring-4 focus:ring-[#0f766e]/10"
                />
              </label>
              <div className="pt-2">
                <Button>Submit Grievance Preview</Button>
                <p className="mt-3 text-xs leading-6 text-graphite">
                  Frontend-only grievance UI for website preview. Secure submission handling can be connected in a later release phase.
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need structured continuity support?"
        text="INHERIX is being developed around governance visibility, responsible support, and controlled access workflows."
        primary="Schedule Consultation"
        secondary="View Dashboard Preview"
      />
    </>
  );
}
