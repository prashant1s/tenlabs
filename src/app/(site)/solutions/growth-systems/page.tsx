import type { Metadata } from "next";
import GrowthSystemsClient from "./GrowthSystemsClient";

export const metadata: Metadata = {
  title: "Growth Systems",
  description: "We build data-driven growth systems that acquire the right customers, improve conversions, and generate predictable, compounding growth.",
  alternates: {
    canonical: "https://tenlabs.online/solutions/growth-systems",
  },
  openGraph: {
    title: "Growth Systems | TenLabs",
    description: "We build data-driven growth systems that acquire the right customers, improve conversions, and generate predictable, compounding growth.",
    url: "https://tenlabs.online/solutions/growth-systems",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Systems | TenLabs",
    description: "We build data-driven growth systems that acquire the right customers, improve conversions, and generate predictable, compounding growth.",
    images: ["/og-image.png"],
  },
};

export default function GrowthSystemsPage() {
  return <GrowthSystemsClient />;
}

