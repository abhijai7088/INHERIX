import type { Metadata } from "next";
import "./globals.css";
import { AmbientAudioToggle } from "@/components/sections/AmbientAudioToggle";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";
import { InstantRouteWarmup } from "@/components/sections/InstantRouteWarmup";
import { RoutePrefetcher } from "@/components/sections/RoutePrefetcher";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { legalLinks, navigation } from "@/content/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://inherix.com"),
  title: {
    default: "INHERIX | Digital Continuity Platform",
    template: "%s | INHERIX"
  },
  description:
    "INHERIX helps families securely organize critical digital information, define trusted continuity relationships, and manage controlled access workflows through governance-oriented systems.",
  keywords: ["digital continuity", "estate planning", "nominee management", "digital vault", "family legacy"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://inherix.com",
    siteName: "INHERIX",
    title: "INHERIX | Digital Continuity Platform",
    description: "Institutional digital continuity for modern Indian families."
  },
  robots: {
    index: true,
    follow: true
  }
};

const prefetchedRoutes = Array.from(new Set([
  ...navigation.map((item) => item.href),
  ...legalLinks.map((item) => item.href)
]));

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {prefetchedRoutes.map((href) => (
          <link key={href} rel="prefetch" href={href} as="document" />
        ))}
      </head>
      <body className="page-bg antialiased">
        <InstantRouteWarmup />
        <RoutePrefetcher />
        <SiteHeader />
        <main>{children}</main>
        <AmbientAudioToggle />
        <FloatingWhatsApp />
        <SiteFooter />
      </body>
    </html>
  );
}
