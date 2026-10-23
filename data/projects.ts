export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  featured: boolean;
  status: "preview";
  overview: string;
  scope: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "project-showcase-one",
    title: "Project Showcase One",
    category: "Commercial",
    location: "Pithampur, Madhya Pradesh",
    description:
      "A premium commercial project showcase prepared as a portfolio placeholder for future Speeddex project documentation.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1800&auto=format&fit=crop",
    featured: true,
    status: "preview",
    overview:
      "This portfolio entry demonstrates how completed commercial work can be presented through project photography, scope information and a clear execution story.",
    scope: [
      "Commercial Construction",
      "Civil & Structural Work",
      "Project Coordination",
      "Finishing & Handover",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1800&auto=format&fit=crop",
    ],
  },

  {
    slug: "project-showcase-two",
    title: "Project Showcase Two",
    category: "Industrial",
    location: "Madhya Pradesh",
    description:
      "An industrial project presentation layout designed for detailed construction case studies.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1800&auto=format&fit=crop",
    featured: true,
    status: "preview",
    overview:
      "A flexible industrial case-study layout for presenting construction scope, site photography and project-specific information once verified details are available.",
    scope: [
      "Industrial Construction",
      "Civil Works",
      "Structural Execution",
      "Site Coordination",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=85&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=85&w=1800&auto=format&fit=crop",
    ],
  },

  {
    slug: "project-showcase-three",
    title: "Project Showcase Three",
    category: "Residential",
    location: "Madhya Pradesh",
    description:
      "A refined residential project layout ready for genuine project photography and verified project information.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1800&auto=format&fit=crop",
    featured: true,
    status: "preview",
    overview:
      "This residential showcase provides a premium presentation structure for documenting design intent, construction scope and final project photography.",
    scope: [
      "Residential Construction",
      "Civil & Structural Work",
      "Interior Finishing",
      "Project Handover",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1800&auto=format&fit=crop",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
