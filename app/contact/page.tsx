import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { MotionReveal } from "@/components/sections/MotionReveal";
import { PageHero } from "@/components/sections/PageHero";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Input, Select } from "@/components/ui/Input";
import { contactChannels } from "@/content/contactChannels";
import { contactContent } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ ...contactContent.seo, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust-Oriented Consultation"
        title="Start Your Digital Continuity Consultation"
        intro="Connect with INHERIX to understand how structured continuity systems, governance-oriented workflows, and trusted coordination frameworks can help support long-term digital continuity readiness for families and professionals."
        primary="Schedule Consultation"
        secondary="Explore Dashboard Preview"
        visual="contact"
      />

      <section id="consultation-form" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <MotionReveal>
              <Badge tone="violet">Request A Consultation</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">A structured consultation for modern continuity planning.</h2>
              <p className="mt-5 text-base leading-8 text-graphite">
                Please share your details below to schedule a structured consultation regarding digital continuity organization and governance-oriented continuity planning workflows.
              </p>
              <MotionReveal delay={0.08}>
                <Card className="panel-sheen mt-6">
                  <h3 className="font-semibold text-ink">Privacy-Oriented Consultation Process</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">
                    Consultation-related information is intended to be handled through structured operational workflows designed around privacy-oriented coordination and governance-focused practices.
                  </p>
                </Card>
              </MotionReveal>
              <a
                href={contactChannels.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0f766e]/20 bg-[#0f766e]/8 px-5 py-3 text-sm font-black text-[#0f766e] transition hover:-translate-y-0.5 hover:bg-[#0f766e]/12"
              >
                <MessageCircle size={16} />
                Discuss on WhatsApp
              </a>
              <a
                href={`mailto:${contactChannels.email}`}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#07101e]/10 bg-white px-5 py-3 text-sm font-black text-[#07101e] shadow-panel transition hover:-translate-y-0.5 hover:border-[#0f766e]/25"
              >
                <Mail size={16} />
                {contactChannels.email}
              </a>
              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-graphite">Official social channels</p>
                <SocialLinks className="mt-3" />
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <form className="premium-glint grid gap-4 rounded-[1.8rem] border border-line bg-white p-6 shadow-soft">
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
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Email Address
                  <Input placeholder="Enter your email address" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  City
                  <Input placeholder="Enter your city" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Purpose of Consultation
                <Select defaultValue="">
                  <option value="" disabled>Select purpose</option>
                  {contactContent.purposes.map((purpose) => <option key={purpose}>{purpose}</option>)}
                </Select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Preferred Consultation Time
                <Select defaultValue="">
                  <option value="" disabled>Select preferred time</option>
                  {contactContent.times.map((time) => <option key={time}>{time}</option>)}
                </Select>
              </label>
              <div className="pt-2">
                <Button>Submit Preview Request</Button>
                <p className="mt-3 text-xs leading-6 text-graphite">Frontend-only form UI for website preview. Submission integration can be added in a later phase.</p>
              </div>
              </form>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionReveal>
              <Badge tone="violet">After Submit</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">What happens after you submit your request.</h2>
            </MotionReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactContent.flow.map((item, index) => (
                <MotionReveal key={item} delay={index * 0.06}>
                  <div className="consult-step-card rounded-[1.2rem] border border-line bg-white p-5 shadow-panel">
                    <span className="text-sm font-semibold text-[#0b78b6]">Step {index + 1}</span>
                    <p className="mt-3 text-sm leading-7 text-graphite">{item}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <MotionReveal>
            <Badge tone="amber">Designed For</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Families, professionals, and trusted continuity coordination.</h2>
          </MotionReveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactContent.audiences.map((audience, index) => (
              <MotionReveal key={audience} delay={index * 0.04}>
                <Badge>{audience}</Badge>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <MotionReveal>
        <CtaBand title="Start Building Your Digital Continuity Structure." text="Modern continuity systems require operational clarity, governance-oriented workflows, trusted coordination, and structured continuity visibility." primary="Schedule Consultation" secondary="Understand Workflow" />
      </MotionReveal>
    </>
  );
}
