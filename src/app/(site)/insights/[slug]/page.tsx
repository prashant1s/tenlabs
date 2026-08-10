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
      <div className="min-h-screen flex items-center justify-center bg-[#07070a]">
        <h1 className="text-3xl font-bold text-[#f3f4f6]">Post not found.</h1>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#07070a] pt-32 pb-24">

        {/* Back Button */}
        <div className="mx-auto max-w-3xl px-6 mb-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-[#6e7480] hover:text-[#6D7CF7] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mx-auto max-w-3xl px-6 mb-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#6D7CF7] mb-6">
            <span>{post.categories?.[0] || "Insight"}</span>
            <span className="text-[#6e7480]">•</span>
            <span className="text-[#9aa0ac]">{post.readTime || "5 min read"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f3f4f6] leading-[1.1] mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-sm font-bold text-[#f3f4f6]">{post.author || "TenLabs Team"}</p>
              <p className="text-xs font-medium text-[#9aa0ac] mt-1">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <article className="mx-auto max-w-3xl px-6">
          <div className="prose prose-invert prose-lg prose-headings:font-serif prose-a:text-[#6D7CF7] hover:prose-a:text-[#5566E0] max-w-none">
            {post.body && post.body.length > 0 ? (
              post.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-[#9aa0ac] leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-[#9aa0ac] italic">No content available for this post.</p>
            )}
          </div>
        </article>

      </main>
    </>
  );
}
