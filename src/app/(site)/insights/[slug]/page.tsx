import { insightPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: { absolute: "Post Not Found | TenLabs" } };
  }

  const description = post.excerpt || "Read the latest insights and strategies from TenLabs.";

  return {
    title: { absolute: `${post.title} | TenLabs Insights` },
    description,
    alternates: {
      canonical: `https://tenlabs.online/insights/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url: `https://tenlabs.online/insights/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A1C13]">
        <h1 className="text-3xl font-bold text-[#E8DCC4]">Post not found.</h1>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#0A1C13] pt-32 pb-24">

        {/* Back Button */}
        <div className="mx-auto max-w-3xl px-6 mb-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-[#C9BDA6] hover:text-[#8B5CF6] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mx-auto max-w-3xl px-6 mb-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#8B5CF6] mb-6">
            <span>{post.categories?.[0] || "Insight"}</span>
            <span className="text-[#C9BDA6]">•</span>
            <span className="text-[#D8CDB8]">{post.readTime || "5 min read"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#E8DCC4] leading-[1.1] mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 border-t border-[#E8DCC4]/10 pt-6">
            <div>
              <p className="text-sm font-bold text-[#E8DCC4]">{post.author || "TenLabs Team"}</p>
              <p className="text-xs font-medium text-[#D8CDB8] mt-1">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <article className="mx-auto max-w-3xl px-6">
          <div className="prose prose-invert prose-lg prose-headings:font-serif prose-a:text-[#8B5CF6] hover:prose-a:text-[#7445DA] max-w-none">
            {post.body && post.body.length > 0 ? (
              post.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-[#D8CDB8] leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-[#D8CDB8] italic">No content available for this post.</p>
            )}
          </div>
        </article>

      </main>
    </>
  );
}
