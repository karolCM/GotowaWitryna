import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantage from "@/components/Advantage";
import Process from "@/components/Process";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import LeadFlow from "@/components/LeadFlow";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GotowaWitryna",
  url: "https://gotowawitryna.pl",
  description:
    "Przenosimy Twój biznes z Facebooka na profesjonalny poziom. Tworzymy kompletne strony www na podstawie Twoich materiałów z mediów społecznościowych.",
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  serviceType: "Tworzenie stron internetowych",
  knowsLanguage: "pl",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi tworzenia stron www",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Profesjonalna strona www z social media",
          description:
            "Kompletna strona internetowa stworzona na podstawie materiałów z profilu Facebook lub Instagram. W cenie: projekt, copywriting, hosting, domena, SSL.",
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
      name: "Ile czasu muszę poświęcić na stworzenie strony www?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prawie zero. Bazujemy na tym, co już opublikowałeś w sieci. Analizujemy Twoje posty, zdjęcia i opinie, a następnie tworzymy stronę na ich podstawie.",
      },
    },
    {
      "@type": "Question",
      name: "Czy strona będzie wyglądać jak inne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Każdy projekt jest indywidualnie dopasowany do charakteru Twojej branży i Twoich materiałów. Nie używamy gotowych szablonów.",
      },
    },
    {
      "@type": "Question",
      name: "Kiedy zobaczę efekt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Przygotowanie wstępnego projektu zajmuje zazwyczaj od 24 do 48 godzin od zgłoszenia.",
      },
    },
    {
      "@type": "Question",
      name: "Czy muszę znać się na technologii?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutnie nie. Zajmujemy się wszystkim — od projektu graficznego, przez domenę i hosting, po bezpieczeństwo.",
      },
    },
    {
      "@type": "Question",
      name: "Co jeśli projekt mi się nie spodoba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najpierw przygotowujemy demo — możesz je ocenić bez żadnych zobowiązań. Jeśli nie będzie odpowiadać Twoim oczekiwaniom, nic nie tracisz.",
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
        <Advantage />
        <Process />
        <Features />
        <FAQ />
        <LeadFlow />
      </main>
      <Footer />
    </>
  );
}
