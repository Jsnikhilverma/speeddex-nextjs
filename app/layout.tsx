import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Speeddex Construction Pvt. Ltd. | Construction Company in Pithampur",
    template: "%s | Speeddex Construction",
  },

  description: siteConfig.description,

  keywords: [
    "Speeddex Construction Pvt Ltd",
    "Speeddex Construction",
    "construction company Pithampur",
    "construction company Dhar",
    "construction company Madhya Pradesh",
    "civil construction Pithampur",
    "industrial construction Pithampur",
    "commercial construction Pithampur",
    "residential construction Pithampur",
    "turnkey construction Madhya Pradesh",
    "civil contractor Pithampur",
    "industrial contractor Madhya Pradesh",
    "commercial contractor Pithampur",
  ],

  authors: [
    {
      name: "Speeddex Construction Pvt. Ltd.",
    },
  ],

  creator: "Speeddex Construction Pvt. Ltd.",

  publisher: "Speeddex Construction Pvt. Ltd.",

  applicationName: "Speeddex Construction",

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,

    title: "Speeddex Construction Pvt. Ltd. | Building What's Next",

    description: siteConfig.description,

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Speeddex Construction Pvt. Ltd.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Speeddex Construction Pvt. Ltd. | Building What's Next",

    description: siteConfig.description,

    images: ["/images/og-image.jpg"],
  },

  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
