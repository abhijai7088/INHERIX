import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-ink text-white shadow-panel hover:-translate-y-0.5 hover:bg-navy",
  secondary: "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-navy/30",
  ghost: "text-ink hover:bg-white/70"
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href} prefetch>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
