import { projects } from "@/lib/data";
import WorkClient from "./WorkClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Portfolio & Case Studies",
  description: "Explore TenLabs web design and development projects, including high-converting websites, ecommerce experiences, and digital products built for growth.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Web Design Portfolio & Case Studies | TenLabs",
    description: "Explore websites, ecommerce experiences, and digital products designed and developed by TenLabs.",
    url: "https://tenlabs.online/work",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Portfolio & Case Studies | TenLabs",
    description: "Explore websites, ecommerce experiences, and digital products designed and developed by TenLabs.",
    images: ["/og-image.png"],
  },
};

function getCaseStudies() {
  return [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p) => ({
      id: p.id,
      title: p.brand,
      desc: p.desc,
      category: p.category,
      date: p.date,
      metrics: p.cardMetrics,
      image: p.coverImage,
    }));
}

export default function WorkPage() {
  const caseStudies = getCaseStudies();
  return <WorkClient initialCaseStudies={caseStudies} />;
}
