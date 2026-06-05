import type { Metadata } from "next";
import { Geist_Mono, Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
  description: "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
  keywords: ["Pranathi Shree D A", "Product Manager", "Software defined vehicles", "QNX", "Embedded Systems", "Product Strategy", "Future Product Leader"],
  authors: [{ name: "Pranathi Shree D A" }],
  openGraph: {
    title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
    description: "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#0A0A0C] text-[#E0DDF0] selection:bg-[#C084FC]/30 selection:text-[#E9D5FF] flex flex-col font-sans">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
