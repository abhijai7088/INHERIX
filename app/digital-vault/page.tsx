import type { Metadata } from "next";
import { MarketingPage } from "@/components/sections/MarketingPage";
import { marketingPages } from "@/content/site";
import { createMetadata } from "@/lib/seo";

const page = marketingPages.find((item) => item.slug === "digital-vault")!;

export const metadata: Metadata = createMetadata({ ...page.seo, path: "/digital-vault" });

export default function DigitalVaultPage() {
  return <MarketingPage page={page} />;
}
