import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tenlabs.online";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteUrl}/#organization`,
        name: "TenLabs",
        alternateName: "TenLabs Web Design Agency",
        description:
          "Web design and development agency creating conversion-focused websites, ecommerce stores, and digital experiences.",
        image: `${siteUrl}/og-image.png`,
        logo: `${siteUrl}/icon.png`,
        url: siteUrl,
        email: "sales@tenlabs.online",
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "New Delhi",
          addressRegion: "New Delhi",
          addressCountry: "IN",
        },
        priceRange: "$$",
        knowsAbout: [
          "Web Design",
          "Web Development",
          "UI/UX Design",
          "Ecommerce Web Design",
          "Shopify Development",
          "Landing Page Design",
          "Website Optimization",
        ],
        makesOffer: [
          "Custom Web Design",
          "Web Development",
          "UI/UX Design",
          "Ecommerce and Shopify Development",
          "Landing Page Design",
          "Website Redesign",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "TenLabs",
        description: "Web design and development agency for ambitious brands.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
