import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore construction project showcases from Speeddex Construction Pvt. Ltd. across commercial, industrial and residential construction.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#11110f]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40">
        <div className="absolute right-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-[#d1b58b]/8 blur-[120px]" />

        <Container>
          <Reveal>
            <div className="max-w-6xl">
              <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d1b58b]">
                <span className="h-px w-10 bg-[#d1b58b]/60" />
                Selected Work
              </div>

              <h1 className="text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white">
                PROJECT
                <br />
                <span className="text-white/30">PORTFOLIO.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                A curated space for presenting Speeddex projects, construction
                scope, site photography and execution stories.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            {projects[0] && (
              <Reveal>
                <ProjectCard project={projects[0]} large />
              </Reveal>
            )}

            <div className="grid gap-5">
              {projects.slice(1).map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio note */}
      <section className="border-t border-white/10 bg-[#181713] py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                  Portfolio Development
                </p>
              </div>

              <div>
                <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
                  REAL PROJECTS.
                  <br />
                  REAL STORIES.
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45">
                  Project information on this website is structured to be
                  replaced with verified Speeddex project details, photography,
                  locations, scope and completion information.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
