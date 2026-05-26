"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function getInternalHref(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;

  const anchor = target.closest("a[href]");
  if (!(anchor instanceof HTMLAnchorElement)) return null;
  if (anchor.target || anchor.hasAttribute("download")) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;

  return `${url.pathname}${url.search}`;
}

export function InstantRouteWarmup() {
  const router = useRouter();
  const warmedRoutes = useRef(new Set<string>());

  useEffect(() => {
    const warmRoute = (event: Event) => {
      const href = getInternalHref(event.target);
      if (!href || href === window.location.pathname || warmedRoutes.current.has(href)) return;
      warmedRoutes.current.add(href);
      router.prefetch(href);
    };

    document.addEventListener("pointerover", warmRoute, { passive: true, capture: true });
    document.addEventListener("pointerdown", warmRoute, { passive: true, capture: true });
    document.addEventListener("focusin", warmRoute, { passive: true, capture: true });

    return () => {
      document.removeEventListener("pointerover", warmRoute, { capture: true });
      document.removeEventListener("pointerdown", warmRoute, { capture: true });
      document.removeEventListener("focusin", warmRoute, { capture: true });
    };
  }, [router]);

  return null;
}
