import type { Metadata } from "next";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { marketingPages } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const page = marketingPages.find((item) => item.slug === "how-it-works")!;

export const metadata: Metadata = createMetadata({ ...page.seo, path: "/how-it-works" });

export default function HowItWorksPage() {
  return <MarketingPage page={page} />;
}
