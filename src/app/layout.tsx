import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
  description:
    "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
  keywords: [
    "Pranathi Shree D A",
    "Product Manager",
    "Software Defined Vehicles",
    "QNX",
    "Embedded Systems",
    "Product Strategy",
    "Future Product Leader",
  ],
  authors: [{ name: "Pranathi Shree D A" }],
  openGraph: {
    title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
    description:
      "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#e8e0d0] text-[#1a1610] flex flex-col font-sans antialiased selection:bg-[#2d5a8e]/20 selection:text-[#2d5a8e]">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
