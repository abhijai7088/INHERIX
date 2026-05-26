import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card-base rounded-[1.35rem] p-6 backdrop-blur ${className}`}>{children}</div>;
}
