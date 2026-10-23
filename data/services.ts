export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  points: string[];
}

export const services: Service[] = [
  {
    slug: "residential-construction",
    number: "01",
    title: "Residential Construction",
    shortDescription:
      "Homes built around functionality, durability and thoughtful design.",
    description:
      "Residential construction requires careful coordination between structure, services, finishes and the everyday needs of the people who will use the space.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1600&auto=format&fit=crop",
    points: [
      "New residential construction",
      "Structural and civil work",
      "Finishing coordination",
      "Site execution",
    ],
  },
  {
    slug: "commercial-construction",
    number: "02",
    title: "Commercial Construction",
    shortDescription:
      "Practical spaces designed around business requirements and performance.",
    description:
      "Commercial projects demand careful planning around functionality, circulation, timelines, finishes and operational requirements.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1600&auto=format&fit=crop",
    points: [
      "Commercial buildings",
      "Office spaces",
      "Retail environments",
      "Civil and finishing work",
    ],
  },
  {
    slug: "industrial-construction",
    number: "03",
    title: "Industrial Construction",
    shortDescription:
      "Site-focused construction for industrial environments and operational needs.",
    description:
      "Industrial construction requires a practical understanding of site conditions, structural requirements, movement, services and operational priorities.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=1600&auto=format&fit=crop",
    points: [
      "Industrial structures",
      "Civil works",
      "Site development",
      "Structural execution",
    ],
  },
  {
    slug: "turnkey-construction",
    number: "04",
    title: "Turnkey Construction",
    shortDescription:
      "An end-to-end approach from planning and execution to final delivery.",
    description:
      "Turnkey execution brings multiple construction requirements into a coordinated process, helping clients work with one focused execution partner.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1600&auto=format&fit=crop",
    points: [
      "Project coordination",
      "Civil and structural work",
      "Finishing execution",
      "Project handover",
    ],
  },
  {
    slug: "civil-and-structural-work",
    number: "05",
    title: "Civil & Structural Work",
    shortDescription:
      "Core construction execution focused on structure, strength and site requirements.",
    description:
      "Civil and structural work forms the foundation of a successful project. Our service structure is designed around disciplined site execution and coordination.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=85&w=1600&auto=format&fit=crop",
    points: [
      "Civil construction",
      "Structural work",
      "Concrete work",
      "Site coordination",
    ],
  },
  {
    slug: "renovation-and-finishing",
    number: "06",
    title: "Renovation & Finishing",
    shortDescription:
      "Transforming existing spaces through upgrades, renovation and finishing.",
    description:
      "Renovation projects require sensitivity to the existing structure while introducing improvements that make the space more functional and refined.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1600&auto=format&fit=crop",
    points: [
      "Renovation work",
      "Interior finishing",
      "Space upgrades",
      "Repair and improvement",
    ],
  },
];
