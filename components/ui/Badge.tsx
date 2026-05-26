import type { ReactNode } from "react";

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "green" | "amber" | "violet" }) {
  const tones = {
    neutral: "border-line bg-white text-graphite",
    green: "border-teal/20 bg-teal/10 text-teal",
    amber: "border-amber/20 bg-amber/10 text-amber",
    violet: "border-violet/20 bg-violet/10 text-violet"
  };

  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
