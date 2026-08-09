import { insightPosts } from "@/lib/data";
import InsightsClient from "./InsightsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Insights & Strategies | The TenLabs Journal" },
  description: "Ideas, strategies, and lessons that drive growth. Real insights from the trenches of performance, branding, and commerce.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights & Strategies | The TenLabs Journal",
    description: "Ideas, strategies, and lessons that drive growth. Real insights from the trenches of performance, branding, and commerce.",
    url: "https://tenlabs.online/insights",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Strategies | The TenLabs Journal",
    description: "Ideas, strategies, and lessons that drive growth. Real insights from the trenches of performance, branding, and commerce.",
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
