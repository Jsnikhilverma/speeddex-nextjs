import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <main className="bg-[#11110f]">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} construction`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-black/20 to-black/30" />

        <Container className="relative flex min-h-[85vh] flex-col justify-end pb-14 pt-40 sm:pb-20 lg:pb-24">
          <Reveal>
            <Link
              href="/projects"
              className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d1b58b]">
              <span>{project.category}</span>

              <span className="h-px w-8 bg-[#d1b58b]/50" />

              <span className="flex items-center gap-1.5 text-white/60">
                <MapPin size={12} />
                {project.location}
              </span>
            </div>

            <h1 className="max-w-6xl text-[clamp(3.5rem,10vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white">
              {project.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-[#f2efe8] py-20 text-[#171714] sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#90754f]">
                Project Overview
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="max-w-4xl text-[clamp(1.8rem,4vw,4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                  {project.overview}
                </p>

                <div className="mt-14 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
                      Category
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {project.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
                      Location
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Scope */}
      <section className="bg-[#11110f] py-20 sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                  Scope of Work
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl">
                  BUILT
                  <br />
                  AROUND
                  <br />
                  DETAIL.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-white/10">
                {project.scope.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 py-6"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[10px] font-bold text-[#d1b58b]">
                        0{index + 1}
                      </span>

                      <span className="text-lg text-white/75 sm:text-xl">
                        {item}
                      </span>
                    </div>

                    <ArrowUpRight size={18} className="text-white/20" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-[#181713] py-20 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                  Visual Story
                </p>

                <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.065em] text-white">
                  THE
                  <br />
                  DETAILS.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 0.08}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    sizes={
                      index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#d1b58b] py-24 text-[#11110f] sm:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/50">
                  Start Something New
                </p>

                <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                  HAVE A
                  <br />
                  PROJECT?
                </h2>
              </div>

              <Link
                href="/get-a-quote"
                className="group inline-flex w-fit items-center gap-4 border border-black/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-[#11110f] hover:text-white"
              >
                Discuss Your Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Related */}
      {relatedProjects.length > 0 && (
        <section className="bg-[#11110f] py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                  Continue Exploring
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.055em] text-white sm:text-6xl">
                  MORE PROJECTS.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {relatedProjects.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.1}>
                  <Link href={`/projects/${item.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 py-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1b58b]">
                          {item.category}
                        </p>

                        <h3 className="mt-2 text-xl font-bold uppercase tracking-[-0.03em] text-white">
                          {item.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-white/40 transition group-hover:text-[#d1b58b]"
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
