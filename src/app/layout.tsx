import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanzonyvoz.com.br"),
  title: {
    default: "Sanzony Voz | Locução Profissional e Branding Vocal Premium",
    template: "%s | Sanzony Voz - Locução Elite"
  },
  description: "Locução profissional de alto impacto para marcas globais. Especialista em branding vocal, locução comercial e institucional com qualidade broadcast.",
  keywords: [
    "locução profissional",
    "locução premium",
    "voice over brazil",
    "branding vocal",
    "locução comercial",
    "locução institucional",
    "brazilian portuguese voice over",
    "contratar locutor",
    "voz para marcas",
    "locutor publicitário"
  ],
  alternates: {
    canonical: "/",
    languages: {
      'pt-BR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Sanzony Voz | Locução Profissional e Branding Vocal Premium",
    description: "Eleve a autoridade da sua marca com uma voz que conecta e converte. Especialista em locução de alto padrão.",
    url: "https://www.sanzonyvoz.com.br",
    siteName: "Sanzony Voz",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanzony Voz | Locução Profissional e Branding Vocal Premium",
    description: "Locução de alto nível para marcas que buscam exclusividade e presença vocal.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') || '';

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.sanzonyvoz.com.br/#website",
        "url": "https://www.sanzonyvoz.com.br",
        "name": "Sanzony Voz",
        "publisher": { "@id": "https://www.sanzonyvoz.com.br/#person" }
      },
      {
        "@type": "Person",
        "@id": "https://www.sanzonyvoz.com.br/#person",
        "name": "Sanzony",
        "jobTitle": "Voice Over Artist & Vocal Branding Specialist",
        "url": "https://www.sanzonyvoz.com.br",
        "image": "https://www.sanzonyvoz.com.br/sanzony-profile.jpg"
      },
      {
        "@type": "ProfessionalService",
        "name": "Sanzony Voz",
        "image": "https://www.sanzonyvoz.com.br/og-image.jpg",
        "url": "https://www.sanzonyvoz.com.br",
        "tel": "+5511999999999",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressCountry": "BR"
        },
        "priceRange": "$$$",
        "knowsAbout": ["Locução Comercial", "Branding Vocal", "Institucional", "Conteúdo Digital", "Voice Over"],
        "areaServed": ["BR", "US", "GB", "PT", "EU"],
      }
    ]
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-black text-foreground`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
