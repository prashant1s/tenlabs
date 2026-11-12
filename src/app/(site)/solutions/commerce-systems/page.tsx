import type { Metadata } from "next";
import CommerceSystemsClient from "./CommerceSystemsClient";

export const metadata: Metadata = {
  title: "Ecommerce Web Design & Shopify Development",
  description: "TenLabs designs and develops fast, conversion-focused ecommerce websites and Shopify stores built to improve customer experience and scale revenue.",
  alternates: {
    canonical: "https://tenlabs.online/solutions/commerce-systems",
  },
  openGraph: {
    title: "Ecommerce Web Design & Shopify Development | TenLabs",
    description: "Fast, conversion-focused ecommerce websites and Shopify stores designed and developed for growth.",
    url: "https://tenlabs.online/solutions/commerce-systems",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Web Design & Shopify Development | TenLabs",
    description: "Fast, conversion-focused ecommerce websites and Shopify stores designed and developed for growth.",
    images: ["/og-image.png"],
  },
};

export default function CommerceSystemsPage() {
  return <CommerceSystemsClient />;
}
