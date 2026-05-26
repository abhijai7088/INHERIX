import type { Metadata } from "next";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { marketingPages } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const page = marketingPages.find((item) => item.slug === "emergency-trigger-system")!;

export const metadata: Metadata = createMetadata({ ...page.seo, path: "/emergency-trigger-system" });

export default function EmergencyTriggerPage() {
  return <MarketingPage page={page} />;
}
