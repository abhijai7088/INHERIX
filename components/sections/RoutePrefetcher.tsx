"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { legalLinks, navigation } from "@/content/navigation";

const priorityRoutes = [
  "/",
  ...navigation.map((item) => item.href),
  ...legalLinks.map((item) => item.href),
  "/digital-vault",
  "/family-access-system",
  "/emergency-trigger-system"
];

export function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const routes = Array.from(new Set(priorityRoutes));
    let cancelled = false;

    const prefetchRoutes = () => {
      if (cancelled) return;
      routes.forEach((route) => router.prefetch(route));
    };

    prefetchRoutes();
    const refreshTimer = window.setTimeout(prefetchRoutes, 1200);

    return () => {
      cancelled = true;
      window.clearTimeout(refreshTimer);
    };
  }, [router]);

  return null;
}
