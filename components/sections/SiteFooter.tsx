import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, QrCode } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { contactChannels } from "@/content/contactChannels";
import { SocialLinks } from "@/components/sections/SocialLinks";

const productLinks = [
  { href: "/about", label: "About INHERIX" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/digital-vault", label: "Digital Vault" },
  { href: "/family-access-system", label: "Family Access System" },
  { href: "/emergency-trigger-system", label: "Emergency Trigger" },
  { href: "/security-compliance", label: "Security & Compliance" },
  { href: "/dashboard-preview", label: "Dashboard Preview" }
];

const legalLinks = [
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/consent-policy", label: "Consent Policy" },
  { href: "/data-access-policy", label: "Data Access Policy" },
  { href: "/legal-disclaimer", label: "Legal Disclaimer" },
  { href: "/grievance", label: "Grievance" },
  { href: "/contact", label: "Contact" },
  { href: "/operational-principles", label: "Operational Principles" }
];

const trustBadges = [
  "Encryption-Ready Architecture",
  "Role-Based Access Control",
  "Consent-Oriented Workflows",
  "Audit Log Visibility",
  "DPDP Act Aware"
];

const institutionalFooterNotes = [
  "Trademark Applied \u2122",
  "Structured Digital Continuity Platform",
  "Controlled Preview Environment"
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 premium-grid-dark opacity-32" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c99b]/45 to-transparent" />

      <Container className="relative py-10 sm:py-12">
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d8c99b]">
            Building India&apos;s Digital Continuity Infrastructure.
          </p>
          <p className="mt-2 text-xs font-semibold leading-5 text-white/[0.56]">
            {"Trademark Applied\u2122. Platform currently in controlled preview stage."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.72fr_0.78fr_1.05fr]">
          <div>
            <Link href="/" prefetch className="group inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-200/18 bg-white shadow-[0_12px_28px_rgba(14,165,233,0.12)] transition-all duration-300">
                <Image src="/images/inherix-symbol.png" alt="INHERIX logo" width={34} height={34} className="h-8 w-8 object-contain" />
              </div>
              <span>
                <span className="block text-[1.08rem] font-black leading-none text-white">INHERIX</span>
                <span className="mt-0.5 block text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-white/66">
                  Digital Continuity
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Helping modern Indian families organize critical digital information, define trusted continuity relationships, and manage controlled access through structured governance-oriented workflows.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-2.5">
              <Mail size={16} className="shrink-0 text-[#d8c99b]" />
              <a href={`mailto:${contactChannels.email}`} className="text-sm font-medium text-white/72 transition-colors hover:text-white">
                {contactChannels.email}
              </a>
            </div>
              <a
                href={contactChannels.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3.5 py-2.5 text-sm font-medium text-white/72 transition hover:border-[#14b8a6]/35 hover:text-white"
              >
                <MessageCircle size={16} className="text-[#d8c99b]" />
                WhatsApp
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/48">Follow INHERIX</p>
                <p className="mt-1 text-xs font-medium text-white/42">@inherixofficial</p>
              </div>
              <SocialLinks compact tone="dark" />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/62">Platform</h3>
            <ul className="mt-4 grid gap-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch className="group flex items-center gap-1.5 text-sm font-medium text-white/58 transition-colors hover:text-white">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/62">Legal</h3>
            <ul className="mt-4 grid gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch className="text-sm font-medium text-white/58 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/62">Trust Principles</h3>
            <ul className="mt-4 grid gap-2.5">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm text-white/58">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c99b]" />
                  {badge}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-[5.6rem_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
              <div className="grid aspect-square place-items-center overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                <Image
                  src="/images/google-business-qr-code.png"
                  alt="Google Business Profile QR code for INHERIX OFFICIAL"
                  width={420}
                  height={420}
                  sizes="90px"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#d8c99b]">
                  <QrCode size={13} />
                  Verify INHERIX Presence
                </p>
                <p className="mt-1 text-xs leading-5 text-white/48">
                  Scan-only business profile reference.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-5 flex flex-wrap gap-2">
          {institutionalFooterNotes.map((note) => (
            <span key={note} className="rounded-lg border border-white/[0.10] bg-white/[0.035] px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.06em] text-white/[0.46]">
              {note}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-white/44">
            {"\u00A9 INHERIX. Trademark Applied\u2122."}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {["DPDP Act Aware", "IT Act 2000", "Controlled Preview Stage"].map((badge) => (
              <span key={badge} className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/58">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 rounded-xl border border-white/8 bg-black/12 px-4 py-3 text-[0.7rem] leading-5 text-white/42">
          INHERIX is a digital continuity and controlled access platform currently in controlled preview stage. It does not provide legal, financial, tax, or inheritance advice.
        </p>
      </Container>
    </footer>
  );
}
