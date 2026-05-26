import type { ComponentProps } from "react";

export function Input(props: ComponentProps<"input">) {
  return <input {...props} className="min-h-12 rounded-2xl border border-line bg-white px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-violet/60 focus:ring-4 focus:ring-violet/10" />;
}

export function Select(props: ComponentProps<"select">) {
  return <select {...props} className="min-h-12 rounded-2xl border border-line bg-white px-4 text-sm text-ink outline-none transition focus:border-violet/60 focus:ring-4 focus:ring-violet/10" />;
}
