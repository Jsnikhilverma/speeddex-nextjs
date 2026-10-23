import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";
import CompanyState from "@/components/home/CompanyStats";

export const metadata: Metadata = {
  title: "Construction Company in Pithampur, Madhya Pradesh",

  description:
    "Speeddex Construction Pvt. Ltd. provides residential, commercial, industrial, civil and turnkey construction solutions from Pithampur, Dhar, Madhya Pradesh.",

  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <CompanyState />

      <Intro />

      <Services />

      <FeaturedProjects />

      <Process />

      <WhyUs />

      <Testimonials />

      <FinalCTA />
    </main>
  );
}
