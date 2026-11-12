import { insightPosts } from "@/lib/data";
import InsightsClient from "./InsightsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Web Design Insights & Strategy | TenLabs" },
  description: "Practical insights on web design, UX, development, ecommerce, conversion optimization, and building websites that grow ambitious brands.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Web Design Insights & Strategy | TenLabs",
    description: "Practical ideas on web design, UX, development, ecommerce, and conversion optimization.",
    url: "https://tenlabs.online/insights",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Insights & Strategy | TenLabs",
    description: "Practical ideas on web design, UX, development, ecommerce, and conversion optimization.",
    images: ["/og-image.png"],
  },
};

function getPosts() {
  return [...insightPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export default function InsightsPage() {
  const posts = getPosts();
  return <InsightsClient initialPosts={posts} />;
}
