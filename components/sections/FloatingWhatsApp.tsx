import { MessageCircle } from "lucide-react";
import { contactChannels } from "@/content/contactChannels";

export function FloatingWhatsApp() {
  return (
    <a
      href={contactChannels.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact INHERIX on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/18 bg-[#06111f] px-4 py-3 text-sm font-black text-white shadow-[0_18px_48px_rgba(3,7,18,0.42),0_0_0_1px_rgba(255,255,255,0.05)] ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:border-[#c8b88a]/45 hover:bg-[#0a1b35] sm:bottom-6 sm:right-6"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0f766e] text-white">
        <MessageCircle size={17} />
      </span>
      <span className="hidden text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:inline">WhatsApp</span>
    </a>
  );
}
