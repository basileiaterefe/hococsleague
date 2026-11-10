import type { Metadata } from "next";
import { site, type PageKey } from "@/content/site";
import { siteOrigin } from "@/lib/people";

export function pageMetadata(key: PageKey): Metadata {
  const page = site.seo[key];
  const title = key === "home" ? { absolute: page.title } : page.title;

  return {
    title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteOrigin()),
    title: {
      default: site.seo.home.title,
      template: `%s | ${site.name}`,
    },
    description: site.seo.home.description,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
    },
    robots: { index: true, follow: true },
  };
}
