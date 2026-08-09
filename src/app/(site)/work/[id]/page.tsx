import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectTemplate from "./ProjectTemplate";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: { absolute: "Case Study Not Found | TenLabs" } };
  }

  const title = `${project.brand} | TenLabs Case Study`;
  const description =
    project.desc || "Explore this TenLabs case study and the growth systems behind it.";
  const url = `https://tenlabs.online/work/${id}`;
  const images = project.coverImage ? [project.coverImage] : ["/og-image.png"];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectTemplate project={project} />;
}
