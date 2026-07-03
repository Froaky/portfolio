import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "FROAKY | Systems Analyst & Developer",
    template: "%s | FROAKY",
  },
  description:
    "Mateo Coca (Froaky) — Systems Analyst & Developer from Salta, Argentina. High-performance APIs, internal operations tools and SQL-backed systems in production.",
  keywords: [
    "Systems Analyst",
    "Backend Developer",
    "APIs",
    "Django",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "Salta",
    "Argentina",
  ],
  authors: [{ name: "Mateo Coca" }],
  openGraph: {
    title: "FROAKY | Systems Analyst & Developer",
    description:
      "High-performance APIs, internal operations tools and SQL-backed systems in production.",
    siteName: "FROAKY",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_AR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FROAKY | Systems Analyst & Developer",
    description:
      "High-performance APIs, internal operations tools and SQL-backed systems in production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
