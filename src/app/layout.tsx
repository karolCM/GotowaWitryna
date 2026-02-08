import type { Metadata } from "next";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice";

export const metadata: Metadata = {
  metadataBase: new URL("https://gotowawitryna.pl"),
  title: {
    default: "GotowaWitryna — Profesjonalna strona www z Twojego Facebooka",
    template: "%s — GotowaWitryna",
  },
  description:
    "Przenosimy Twój biznes z Facebooka na profesjonalny poziom. Wykorzystujemy Twoje zdjęcia i sukcesy z mediów społecznościowych, aby stworzyć kompletną, gotową do sprzedaży stronę www.",
  keywords: [
    "strona internetowa",
    "strona www",
    "strona z facebooka",
    "profesjonalna strona",
    "tworzenie stron",
    "strona dla firmy",
    "gotowa witryna",
    "strona www dla małej firmy",
    "strona internetowa z social media",
  ],
  authors: [{ name: "GotowaWitryna" }],
  creator: "GotowaWitryna",
  openGraph: {
    title: "GotowaWitryna — Profesjonalna strona www z Twojego Facebooka",
    description:
      "Przenosimy Twój biznes z Facebooka na profesjonalny poziom. Gotowy projekt w 24-48h, bez angażowania Twojego czasu.",
    url: "https://gotowawitryna.pl",
    siteName: "GotowaWitryna",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GotowaWitryna — Profesjonalna strona www z Twojego Facebooka",
    description:
      "Przenosimy Twój biznes z Facebooka na profesjonalny poziom. Gotowy projekt w 24-48h.",
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
  alternates: {
    canonical: "https://gotowawitryna.pl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
