import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Électricien Bruxelles Pro | Installation, Rénovation & Dépannage 24/7",
  description: "Électricien professionnel à Bruxelles. Installation électrique, rénovation, mise aux normes RGIE, dépannage urgent 24/7. Devis gratuit. Intervention rapide dans tout Bruxelles.",
  keywords: [
    "électricien Bruxelles",
    "électricien Ixelles",
    "électricien Uccle",
    "électricien Schaerbeek",
    "installation électrique Bruxelles",
    "rénovation électrique",
    "dépannage électricien",
    "mise aux normes RGIE",
    "électricien urgence 24/7",
    "devis électricien gratuit",
  ].join(", "),
  authors: [{ name: "Électricien Bruxelles Pro" }],
  creator: "Électricien Bruxelles Pro",
  publisher: "Électricien Bruxelles Pro",
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
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://electricien-bruxelles.be",
    title: "Électricien Bruxelles Pro | Installation & Dépannage 24/7",
    description: "Électricien professionnel à Bruxelles. Installation, rénovation, mise aux normes RGIE, dépannage 24/7. Devis gratuit.",
    siteName: "Électricien Bruxelles Pro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Électricien professionnel à Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien Bruxelles Pro | Installation & Dépannage 24/7",
    description: "Électricien professionnel à Bruxelles. Installation, rénovation, dépannage 24/7. Devis gratuit.",
    images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://electricien-bruxelles.be",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7C3AED" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://electricien-bruxelles.be",
              name: "Électricien Bruxelles Pro",
              image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
              telephone: "+32470123456",
              email: "contact@electricien-bruxelles.be",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bruxelles",
                addressCountry: "BE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "50.8503",
                longitude: "4.3517",
              },
              url: "https://electricien-bruxelles.be",
              priceRange: "€€",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Bruxelles",
                },
                {
                  "@type": "City",
                  name: "Ixelles",
                },
                {
                  "@type": "City",
                  name: "Uccle",
                },
                {
                  "@type": "City",
                  name: "Schaerbeek",
                },
              ],
              description:
                "Électricien professionnel à Bruxelles. Installation électrique, rénovation, mise aux normes RGIE, dépannage urgent 24/7.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
