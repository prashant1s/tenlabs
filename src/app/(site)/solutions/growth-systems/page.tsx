import type { Metadata } from "next";
import GrowthSystemsClient from "./GrowthSystemsClient";

export const metadata: Metadata = {
  title: "Website Growth & Conversion Systems",
  description: "Improve website performance with conversion-focused landing pages, analytics, SEO, experimentation, and growth systems that turn traffic into customers.",
  alternates: {
    canonical: "https://tenlabs.online/solutions/growth-systems",
  },
  openGraph: {
    title: "Website Growth & Conversion Systems | TenLabs",
    description: "Conversion-focused websites, landing pages, analytics, and optimization systems built to turn traffic into customers.",
    url: "https://tenlabs.online/solutions/growth-systems",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Growth & Conversion Systems | TenLabs",
    description: "Conversion-focused websites, landing pages, analytics, and optimization systems built to turn traffic into customers.",
    images: ["/og-image.png"],
  },
};

export default function GrowthSystemsPage() {
  return <GrowthSystemsClient />;
}

