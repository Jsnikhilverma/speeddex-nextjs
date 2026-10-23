import { siteConfig } from "@/lib/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",

    name: siteConfig.name,

    description: siteConfig.description,

    email: siteConfig.email,

    url: siteConfig.url,

    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Pithampur",
      },
      {
        "@type": "AdministrativeArea",
        name: "Dhar",
      },
      {
        "@type": "State",
        name: "Madhya Pradesh",
      },
    ],

    knowsAbout: [
      "Residential Construction",
      "Commercial Construction",
      "Industrial Construction",
      "Turnkey Construction",
      "Civil Construction",
      "Structural Work",
      "Renovation",
      "Construction Project Management",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
