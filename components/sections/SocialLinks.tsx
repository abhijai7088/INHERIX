import { Facebook, Instagram, Linkedin, Share2, Twitter, Youtube } from "lucide-react";
import { contactChannels } from "@/content/contactChannels";

const socialIcons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  X: Twitter,
  YouTube: Youtube
};

type SocialLinksProps = {
  className?: string;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function SocialLinks({ className = "", compact = false, tone = "light" }: SocialLinksProps) {
  const itemClassName =
    tone === "dark"
      ? "border-white/10 bg-white/[0.055] text-white/72 hover:border-[#14b8a6]/35 hover:text-white"
      : "border-line bg-white text-ink shadow-panel hover:border-[#14b8a6]/35 hover:text-[#0d9488]";

  const iconClassName = tone === "dark" ? "text-[#d8c99b]" : "text-[#0d9488]";

  if (compact) {
    const compactClassName =
      tone === "dark"
        ? "border-white/10 bg-white/[0.055] text-white/64 hover:border-[#14b8a6]/45 hover:bg-[#14b8a6]/10 hover:text-white"
        : "border-line bg-white text-graphite shadow-panel hover:border-[#14b8a6]/35 hover:text-[#0d9488]";

    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {contactChannels.socials.map((social) => {
          const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Share2;

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={`${social.label} ${social.handle}`}
              aria-label={`Open INHERIX on ${social.label}: ${social.handle}`}
              className={`grid h-10 w-10 place-items-center rounded-full border transition hover:-translate-y-0.5 ${compactClassName}`}
            >
              <Icon size={17} className={iconClassName} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {contactChannels.socials.map((social) => {
        const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Share2;

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open INHERIX on ${social.label}`}
            className={`inline-flex min-h-11 max-w-full flex-wrap items-center gap-2 rounded-2xl border px-3.5 py-2.5 text-xs font-black transition hover:-translate-y-0.5 ${itemClassName}`}
          >
            <Icon size={16} className={iconClassName} />
            <span>{social.label}</span>
            <span className={tone === "dark" ? "break-all text-white/48" : "break-all text-graphite"}>{social.handle}</span>
          </a>
        );
      })}
    </div>
  );
}
