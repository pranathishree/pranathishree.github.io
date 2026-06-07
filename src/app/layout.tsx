import { Metadata, Viewport } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  themeColor: "#fdfbf9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pranathishree.github.io"),
  title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
  description: "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
  keywords: ["Pranathi Shree D A", "Product Manager", "Software defined vehicles", "QNX", "Embedded Systems", "Product Strategy", "Future Product Leader"],
  authors: [{ name: "Pranathi Shree D A", url: "https://pranathishree.github.io" }],
  creator: "Pranathi Shree D A",
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
    title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
    description: "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
    url: "https://pranathishree.github.io",
    siteName: "Pranathi Shree D A Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Portrait.jpeg", // Using the portrait as the default OG image
        width: 1200,
        height: 630,
        alt: "Pranathi Shree D A",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranathi Shree D A | Technology, Product Strategy & Leadership",
    description: "Computer Science & Business Systems Student & Software Intern combining technical problem-solving, product strategy, and leadership.",
    images: ["/Portrait.jpeg"],
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
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Instrument+Serif:ital@0;1&amp;family=DM+Serif+Display:ital@0;1&amp;family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&amp;family=Dancing+Script:wght@700&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
