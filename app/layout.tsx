import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafiq.biz.id"),
  title: {
    default: "Rafiq — Web Developer & SEO Specialist",
    template: "%s | Rafiq",
  },
  description:
    "Hi, I'm Rafiq. A Web Developer and SEO Specialist based in Indonesia. I craft performant, accessible, and visually polished web experiences.",
  keywords: ["Rafiq", "Web Developer", "SEO Specialist", "Indonesia", "Frontend Developer", "Next.js", "React"],
  openGraph: {
    title: "Rafiq — Web Developer & SEO Specialist",
    description: "Hi, I'm Rafiq. A Web Developer and SEO Specialist based in Indonesia.",
    url: "https://rafiq.biz.id",
    siteName: "Rafiq's Portfolio",
    locale: "id_ID",
    alternateLocale: ["en_US", "en_SG"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafiq — Web Developer & SEO Specialist",
    description: "Hi, I'm Rafiq. A Web Developer and SEO Specialist based in Indonesia.",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://rafiq.biz.id/feed.xml",
    },
  },
  verification: {
    google: "5miu4ARJmpD9kvO9MCJEXx68h31JTqARMZbMlb8Kem4",
  },
  other: {
    "llms.txt": "https://rafiq.biz.id/llms.txt",
    "llms-full.txt": "https://rafiq.biz.id/llms-full.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
