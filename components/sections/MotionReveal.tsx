"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function MotionReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out will-change-transform ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} ${className ?? ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
}
