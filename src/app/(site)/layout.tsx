import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TenLabs",
    description: "Digital Marketing, Strategy, and Growth Agency.",
    image: "https://tenlabs.online/og-image.png",
    url: "https://tenlabs.online",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "New Delhi",
      addressCountry: "IN",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SmoothScroll>
        {children}
        <Footer />
      </SmoothScroll>
    </>
  );
}
