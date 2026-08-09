// src/app/(site)/contact/
//   page.tsx           - route entry: sets metadata, renders ContactClient with the Spline hero slotted in
//   ContactClient.tsx  - client component: hero, contact form (posts to /api/contact)
//   SplineHero.tsx      - server component embedding the 3D hero visual
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SplineHero } from "./SplineHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to build your growth engine? Drop us a line or send us a message.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | TenLabs",
    description: "Ready to build your growth engine? Drop us a line or send us a message.",
    url: "https://tenlabs.online/contact",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TenLabs",
    description: "Ready to build your growth engine? Drop us a line or send us a message.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient splineSlot={<SplineHero />} />;
}
