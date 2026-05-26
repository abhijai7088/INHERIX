import type { Metadata } from "next";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { marketingPages } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const page = marketingPages.find((item) => item.slug === "security-compliance")!;

export const metadata: Metadata = createMetadata({ ...page.seo, path: "/security-compliance" });

export default function SecurityCompliancePage() {
  return <MarketingPage page={page} />;
}
