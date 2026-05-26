"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

const STICKY_TOP = 112;
const DESKTOP_WIDTH = 1024;

type PinMode = "normal" | "fixed" | "end";

type PinState = {
  left: number;
  mode: PinMode;
  width: number;
};

export function FamilyAccessStickyPanel({ children, className }: { children: ReactNode; className: string }) {
  const slotRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pinRef = useRef<PinState>({ left: 0, mode: "normal", width: 0 });
  const [pin, setPin] = useState<PinState>({ left: 0, mode: "normal", width: 0 });

  useEffect(() => {
    const commitPin = (nextPin: PinState) => {
      const current = pinRef.current;
      if (current.mode === nextPin.mode && current.left === nextPin.left && current.width === nextPin.width) return;
      pinRef.current = nextPin;
      setPin(nextPin);
    };

    const update = () => {
      const slot = slotRef.current;
      const panel = panelRef.current;
      const scene = slot?.parentElement;

      if (!slot || !panel || !scene || window.innerWidth < DESKTOP_WIDTH) {
        commitPin({ left: 0, mode: "normal", width: 0 });
        return;
      }

      const sceneRect = scene.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      const panelHeight = panel.offsetHeight;
      const shouldPin = sceneRect.top <= STICKY_TOP;
      const shouldRelease = sceneRect.bottom <= STICKY_TOP + panelHeight;

      commitPin({
        left: slotRect.left,
        mode: shouldRelease ? "end" : shouldPin ? "fixed" : "normal",
        width: slotRect.width
      });
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const panelStyle: CSSProperties =
    pin.mode === "fixed"
      ? { left: pin.left, position: "fixed", top: STICKY_TOP, width: pin.width }
      : pin.mode === "end"
        ? { bottom: 0, left: 0, position: "absolute", width: "100%" }
        : {};

  return (
    <div ref={slotRef} className="family-access-pin-slot">
      <div ref={panelRef} className={className} style={panelStyle}>
        {children}
      </div>
    </div>
  );
}
