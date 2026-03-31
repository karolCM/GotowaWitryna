import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GotowaWitryna",
  url: "https://gotowawitryna.pl",
  description:
    "Profesjonalne strony internetowe dla małych firm w 24 godziny. Podaj link do Facebooka, my zbudujemy Ci stronę www z hostingiem, domeną i obsługą techniczną.",
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  serviceType: "Tworzenie stron internetowych",
  knowsLanguage: "pl",
  priceRange: "149-549 PLN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi tworzenia stron www",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pakiet Start - strona one-page",
          description:
            "Profesjonalna strona www z copywritingiem, domeną, hostingiem i SSL. Od 149 zł/msc",
          price: "149",
          priceCurrency: "PLN",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pakiet Biznes - strona multi-page",
          description:
            "Rozbudowana strona www z blogiem, lead magnetami i marketingiem. Od 249 zł/msc",
          price: "249",
          priceCurrency: "PLN",
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile muszę na to poświęcić czasu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dosłownie 2-5 minut. Podajesz nam link do swojego profilu na Facebooku lub Instagramie — i to wszystko. My robimy całą resztę.",
      },
    },
    {
      "@type": "Question",
      name: "Czy muszę znać się na technologii?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutnie nie. Nie musisz wiedzieć co to hosting, domena czy WordPress. My zajmujemy się całą technologią.",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje strona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pakiet Start to 149 zł netto miesięcznie lub 199 zł z umową na 12 miesięcy bez opłaty startowej. W cenie masz wszystko — stronę, hosting, domenę, blog, lead magnet i obsługę techniczną.",
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

export default function Home() {
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
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Problem />
        <Solution />
        <Process />
        <Features />
        <Industries />
        <Pricing />
        <Comparison />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
