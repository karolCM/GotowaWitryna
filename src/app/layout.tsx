import type { Metadata } from "next";
import "./globals.css";
import CookieNotice from "@/components/CookieNotice";

export const metadata: Metadata = {
  metadataBase: new URL("https://gotowawitryna.pl"),
  title: {
    default: "GotowaWitryna — Profesjonalna strona www dla Twojej firmy w 24h",
    template: "%s — GotowaWitryna",
  },
  description:
    "Podaj link do Facebooka, a my zbudujemy Ci profesjonalną stronę www w 24 godziny. Hosting, blog, lead magnety i obsługa techniczna w cenie. Od 149 zł/mc.",
  keywords: [
    "strona internetowa",
    "strona www",
    "strona dla firmy",
    "profesjonalna strona",
    "tworzenie stron",
    "gotowa witryna",
    "strona www dla małej firmy",
    "strona z facebooka",
    "strona internetowa z social media",
    "szybka strona www",
    "strona www 24h",
    "strona dla małych firm",
  ],
  authors: [{ name: "GotowaWitryna" }],
  creator: "GotowaWitryna",
  openGraph: {
    title: "GotowaWitryna — Profesjonalna strona www dla Twojej firmy w 24h",
    description:
      "Podaj link do Facebooka, a my zbudujemy Ci profesjonalną stronę www w 24 godziny. Hosting, blog, lead magnety i obsługa techniczna w cenie.",
    url: "https://gotowawitryna.pl",
    siteName: "GotowaWitryna",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GotowaWitryna - Profesjonalne strony www w 24h",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GotowaWitryna — Profesjonalna strona www dla Twojej firmy w 24h",
    description:
      "Podaj link do Facebooka, a my zbudujemy Ci profesjonalną stronę www w 24 godziny. Od 149 zł/mc.",
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WL1JTXW3D6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WL1JTXW3D6');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
