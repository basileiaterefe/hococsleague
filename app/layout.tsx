import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/content/site";
import { assertContent, isTodo } from "@/lib/people";
import { rootMetadata } from "@/lib/seo";
import { Footer } from "@/components/Footer";
import { HashScroll } from "@/components/HashScroll";
import { Header } from "@/components/Header";
import { SilkBackdrop } from "@/components/SilkBackdrop";
import "./globals.css";

assertContent();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = rootMetadata();

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.seo.home.description,
    url: isTodo(site.url) ? undefined : site.url,
    areaServed: "Howard County, Maryland",
    logo: isTodo(site.url) ? undefined : `${site.url.replace(/\/$/, "")}/logo.png`,
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="relative flex min-h-full flex-col antialiased">
        <SilkBackdrop />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <HashScroll />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
