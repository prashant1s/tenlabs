import { projects } from "@/lib/data";
import WorkClient from "./WorkClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description: "Explore our portfolio of systems that create real impact across platforms and industries. One purpose - growth.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work & Case Studies | TenLabs",
    description: "Explore our portfolio of systems that create real impact across platforms and industries. One purpose - growth.",
    url: "https://tenlabs.online/work",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Case Studies | TenLabs",
    description: "Explore our portfolio of systems that create real impact across platforms and industries. One purpose - growth.",
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
