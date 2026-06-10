import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keter Marketing — Sites Web Stratégiques qui Convertissent | Cotonou",
  description:
    "Keter Marketing conçoit des sites web qui génèrent des clients. Copywriting, design et développement sur mesure pour PME, agences et infopreneurs. Appel gratuit →",
  keywords: [
    "agence création site web Bénin",
    "site web qui convertit",
    "agence web stratégique Afrique",
    "copywriting site web professionnel",
    "refonte site web agence",
    "agence web Cotonou Bénin",
    "Keter Marketing",
  ],
  authors: [{ name: "Keter Marketing" }],
  icons: {
    icon: "/keter-logo.png",
  },
  openGraph: {
    title: "Keter Marketing — Sites Web Stratégiques",
    description:
      "Des sites web qui génèrent de vrais clients. Copywriting intégré. Résultats mesurables.",
    url: "https://ketermarketing.com",
    siteName: "Keter Marketing",
    type: "website",
    locale: "fr_BJ",
  },
  alternates: {
    canonical: "https://ketermarketing.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keter Marketing — Sites Web Stratégiques",
    description:
      "Des sites web qui génèrent de vrais clients. Copywriting intégré. Résultats mesurables.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D4AF37] focus:text-[#0B0B0B] focus:rounded-md focus:font-semibold">
          Aller au contenu
        </a>
        <div id="main-content">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
