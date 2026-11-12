// src/app/(site)/contact/
//   page.tsx           - route entry: sets metadata, renders ContactClient with the Spline hero slotted in
//   ContactClient.tsx  - client component: hero, contact form (posts to /api/contact)
//   SplineHero.tsx      - server component embedding the 3D hero visual
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SplineHero } from "./SplineHero";

export const metadata: Metadata = {
  title: "Contact Our Web Design Agency",
  description: "Start a web design or development project with TenLabs. Tell us about your website, ecommerce store, or digital product and we will plan the next step.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our Web Design Agency | TenLabs",
    description: "Start a website, ecommerce, or digital product project with the TenLabs design and development team.",
    url: "https://tenlabs.online/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Web Design Agency | TenLabs",
    description: "Start a website, ecommerce, or digital product project with the TenLabs design and development team.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient splineSlot={<SplineHero />} />;
}
