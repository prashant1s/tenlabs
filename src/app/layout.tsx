import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Sora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tenlabs.online",
  ),
  applicationName: "TenLabs",
  title: {
    default: "TenLabs | Web Design & Development Agency",
    template: "%s | TenLabs",
  },
  description:
    "TenLabs is a web design and development agency creating fast, conversion-focused websites, ecommerce stores, and digital experiences for ambitious brands.",
  keywords: [
    "web design agency",
    "web development agency",
    "website design company",
    "custom website development",
    "UI UX design agency",
    "ecommerce web design",
    "Shopify development agency",
    "landing page design",
    "conversion focused web design",
    "responsive website design",
    "website redesign",
    "web design agency India",
    "TenLabs",
  ],

  authors: [{ name: "TenLabs" }],
  creator: "TenLabs",
  publisher: "TenLabs",
  category: "Web Design and Development",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "TenLabs | Web Design & Development Agency",
    description:
      "Fast, conversion-focused websites, ecommerce stores, and digital experiences designed and developed for ambitious brands.",
    siteName: "TenLabs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TenLabs web design and development agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TenLabs | Web Design & Development Agency",
    description:
      "Fast, conversion-focused websites, ecommerce stores, and digital experiences for ambitious brands.",
    images: ["/og-image.png"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: "/manifest.json",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground overflow-x-hidden selection:bg-[#8B5CF6] selection:text-[#E8DCC4]">
        {children}
        <Analytics />
        <SpeedInsights />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
