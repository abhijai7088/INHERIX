import type { Metadata } from "next";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { marketingPages } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const page = marketingPages.find((item) => item.slug === "family-access-system")!;

export const metadata: Metadata = createMetadata({ ...page.seo, path: "/family-access-system" });

export default function FamilyAccessPage() {
  return <MarketingPage page={page} />;
}
