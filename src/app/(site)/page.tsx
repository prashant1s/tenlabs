// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Industries } from "@/components/sections/Industries";
import { Insights } from "@/components/sections/Insights";
import { WhyUs } from "@/components/sections/WhyUs";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { projects, insightPosts } from "@/lib/data";

const featuredProjects = [...projects]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((p) => ({
    id: p.id,
    brand: p.brand,
    industry: p.category,
    result: p.desc,
    image: p.bannerImage || p.coverImage,
  }));

const recentPosts = [...insightPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function HomePage() {
  return (
    <>
      <div className="relative z-10 bg-[#0A1C13]">
        {/* <Header /> */}
        <main>
          <Hero />
          <FeaturedWork projects={featuredProjects} />
          <GlobalPresence />
          <LogoWall />
          <Industries />
          <Insights posts={recentPosts} />
          <WhyUs />
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
