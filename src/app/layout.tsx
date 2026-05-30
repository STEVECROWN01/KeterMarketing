import type { Metadata } from "next";
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
  title: "Keter Marketing — Sites Web Stratégiques qui Convertissent | Parakou",
  description:
    "Keter Marketing conçoit des sites web qui génèrent des clients. Copywriting, design et développement sur mesure pour PME, agences et infopreneurs. Appel gratuit →",
  keywords: [
    "agence création site web Bénin",
    "site web qui convertit",
    "agence web stratégique Afrique",
    "copywriting site web professionnel",
    "refonte site web agence",
    "agence web Parakou Bénin",
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
