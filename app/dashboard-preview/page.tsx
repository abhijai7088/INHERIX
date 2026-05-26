import type { Metadata } from "next";
import { LazyDashboardPreview } from "@/components/dashboard-preview/LazyDashboardPreview";
import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "INHERIX Continuity Management Dashboard",
  description: "A premium static dashboard preview for Admin, Client, and Nominee continuity workflows.",
  path: "/dashboard-preview"
});

export default function DashboardPreviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Dashboard Preview"
        title="INHERIX Continuity Management Dashboard"
        intro="A structured operational dashboard designed to help families organize continuity-related information, manage trusted coordination workflows, and maintain governance-oriented continuity visibility through a calm institutional user experience."
        primary="Schedule Consultation"
        secondary="Understand Workflow"
        visual="dashboard"
      />
      <LazyDashboardPreview />
    </>
  );
}
