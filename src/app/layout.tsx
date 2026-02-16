import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://elixolabs.com";
const siteName = "ElixoLabs";
const siteTitle = "ElixoLabs - AI-Native Product Engineering | AI Agent Development";
const siteDescription = "ElixoLabs is an AI-native product engineering firm specializing in AI agent systems, operational platforms, and intelligent automation. We build production-grade AI solutions for startups and businesses worldwide.";
const keywords = [
  "AI agency",
  "AI development agency",
  "AI agent development",
  "AI automation agency",
  "artificial intelligence agency",
  "AI consulting",
  "AI product engineering",
  "AI agent systems",
  "operational platforms",
  "intelligent automation",
  "AI-native development",
  "custom AI solutions",
  "AI system architecture",
  "production AI deployment",
  "AI integration services",
  "AI workflow automation",
  "ElixoLabs",
].join(", ");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords,
  authors: [{ name: "ElixoLabs", url: siteUrl }],
  creator: "ElixoLabs",
  publisher: "ElixoLabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ElixoLabs - AI-Native Product Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: "@elixolabs",
    site: "@elixolabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'msvalidate.01': '90FB6BD570FDA55663E6161592232EB6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    telephone: "",
    email: "hello@elixolabs.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Worldwide",
    },
    sameAs: ["https://x.com/elixolabs"],
    serviceType: [
      "AI Agent Development",
      "Operational Platform Engineering",
      "Intelligent Automation",
      "Product Engineering",
      "AI System Architecture",
    ],
    areaServed: "Worldwide",
    priceRange: "$$-$$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
