import { MessageCircle } from "lucide-react";
import { contactChannels } from "@/content/contactChannels";

export function FloatingWhatsApp() {
  return (
    <a
      href={contactChannels.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact INHERIX on WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid h-10 w-10 place-items-center rounded-full border text-white transition hover:-translate-y-0.5 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
      style={{
        backgroundColor: "rgba(6, 17, 31, 0.94)",
        borderColor: "rgba(15, 23, 42, 0.22)",
        boxShadow: "0 8px 22px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
      }}
    >
      <span
        className="grid h-7 w-7 place-items-center rounded-full text-white"
        style={{ backgroundColor: "rgba(15, 118, 110, 0.95)" }}
      >
        <MessageCircle size={15} />
      </span>
    </a>
  );
}
