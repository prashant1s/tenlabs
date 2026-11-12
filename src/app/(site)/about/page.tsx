import type { Metadata } from "next";
import AboutClient from "./AboutClient";

// 1. Export your unique SEO metadata (Server-side)
export const metadata: Metadata = {
  title: "About Our Web Design Agency",
  description: "Meet TenLabs, a web design and development agency combining strategy, UX, design, and technology to build websites that help ambitious brands grow.",
  alternates: {
    canonical: "https://tenlabs.online/about",
  },
  openGraph: {
    title: "About Our Web Design Agency | TenLabs",
    description: "Meet the strategy, design, and development team behind conversion-focused websites and digital experiences.",
    url: "https://tenlabs.online/about",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Web Design Agency | TenLabs",
    description: "Meet the strategy, design, and development team behind conversion-focused websites and digital experiences.",
    images: ["/og-image.png"],
  },
};

// 2. Render your animated client component
export default function AboutPage() {
  return <AboutClient />;
}

