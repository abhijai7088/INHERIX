import type { Metadata } from "next";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

const siteName = "INHERIX";
const baseUrl = "https://inherix.com";

export function createMetadata({ title, description, path = "/" }: SeoInput): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
