import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllSlugs } from "@/lib/industries-data";
import IndustryLanding from "@/components/industry/IndustryLanding";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Nie znaleziono strony" };
  }

  const canonicalUrl = `https://gotowawitryna.pl/branza/${slug}`;

  return {
    title: industry.seo.title,
    description: industry.seo.description,
    keywords: industry.seo.keywords,
    authors: [{ name: "GotowaWitryna" }],
    creator: "GotowaWitryna",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: industry.seo.title,
      description: industry.seo.description,
      url: canonicalUrl,
      siteName: "GotowaWitryna",
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: industry.seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seo.title,
      description: industry.seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Strona internetowa ${industry.nameDative}`,
    description: industry.seo.description,
    provider: {
      "@type": "Organization",
      name: "GotowaWitryna",
      url: "https://gotowawitryna.pl",
      logo: "https://gotowawitryna.pl/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "kontakt@gotowawitryna.pl",
        contactType: "customer service",
        availableLanguage: "Polish",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Polska",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Pakiet Start",
        price: "149",
        priceCurrency: "PLN",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "149",
          priceCurrency: "PLN",
          unitText: "miesięcznie",
        },
      },
      {
        "@type": "Offer",
        name: "Pakiet Biznes",
        price: "249",
        priceCurrency: "PLN",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "249",
          priceCurrency: "PLN",
          unitText: "miesięcznie",
        },
      },
    ],
    url: `https://gotowawitryna.pl/branza/${slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...industry.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
      {
        "@type": "Question",
        name: "Ile muszę poświęcić czasu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dosłownie 2–5 minut. Podajesz nam link do swojego profilu na Facebooku lub Instagramie — i to wszystko.",
        },
      },
      {
        "@type": "Question",
        name: "Czy mogę zobaczyć stronę przed zapłatą?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak! Projekt demo przygotowujemy za darmo i bez zobowiązań. Dopiero gdy go zaakceptujesz, uruchamiamy stronę i zaczyna się abonament.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://gotowawitryna.pl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Strona www ${industry.nameDative}`,
        item: `https://gotowawitryna.pl/branza/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <IndustryLanding industry={industry} />
    </>
  );
}
