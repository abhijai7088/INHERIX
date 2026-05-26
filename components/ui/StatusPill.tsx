export function StatusPill({ status }: { status: string }) {
  const tone = status.includes("Approved")
    ? "bg-teal/10 text-teal"
    : status.includes("Review")
      ? "bg-amber/10 text-amber"
      : status.includes("More")
        ? "bg-violet/10 text-violet"
        : "bg-slate-100 text-slate-600";

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{status}</span>;
}
