import type { Metadata } from "next";
import BrandSystemsClient from "./BrandSystemsClient";

export const metadata: Metadata = {
  title: "Brand Identity & Website Design",
  description: "Build a distinctive brand and digital presence with strategy, visual identity, UI design, creative systems, and websites that people remember.",
  alternates: {
    canonical: "https://tenlabs.online/solutions/brand-systems",
  },
  openGraph: {
    title: "Brand Identity & Website Design | TenLabs",
    description: "Brand strategy, visual identity, UI design, and websites created as one memorable digital system.",
    url: "https://tenlabs.online/solutions/brand-systems",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity & Website Design | TenLabs",
    description: "Brand strategy, visual identity, UI design, and websites created as one memorable digital system.",
    images: ["/og-image.png"],
  },
};

export default function BrandSystemsPage() {
  return <BrandSystemsClient />;
}
