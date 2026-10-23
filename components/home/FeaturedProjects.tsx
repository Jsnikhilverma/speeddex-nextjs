"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects.length) return null;

  const activeProject = projects[activeIndex];

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f2efe8] py-8 text-[#171714] sm:py-10 lg:py-12">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#171714 1px, transparent 1px), linear-gradient(90deg, #171714 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#b08c54]/10 blur-[100px]" />
      </div>

      <Container>
        {/* Header */}
        <div className="relative mb-7 flex flex-col justify-between gap-5 border-b border-black/10 pb-6 sm:mb-9 md:flex-row md:items-end">
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#b08c54]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#927343]">
                  Selected Work
                </span>
              </div>

              <h2 className="text-[clamp(3.2rem,7vw,6.5rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
                Made to
                <br />
                <span className="text-black/25">last.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="max-w-sm md:pb-1">
              <p className="text-sm leading-6 text-black/55">
                Spaces shaped by thoughtful planning, quality execution and an
                uncompromising focus on detail.
              </p>

              <Link
                href="/projects"
                className="group mt-4 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em]"
              >
                Explore All Projects
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Featured project layout */}
        <Reveal delay={0.1}>
          <div className="relative grid overflow-hidden border border-black/10 lg:grid-cols-[1.65fr_0.75fr]">
            {/* Main visual */}
            <div className="relative min-w-0">
              <div className="relative h-[340px] overflow-hidden bg-[#25241f] sm:h-[460px] lg:h-[570px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.slug}
                    initial={{ opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.015 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 68vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
                    <div className="absolute inset-0 bg-black/5" />
                  </motion.div>
                </AnimatePresence>

                {/* Architectural overlay */}
                <div className="pointer-events-none absolute inset-5 border border-white/20 sm:inset-7">
                  <span className="absolute -left-px -top-px h-12 w-12 border-l border-t border-[#d1b58b]" />
                  <span className="absolute -right-px -top-px h-12 w-12 border-r border-t border-[#d1b58b]" />
                  <span className="absolute -bottom-px -left-px h-12 w-12 border-b border-l border-[#d1b58b]" />
                  <span className="absolute -bottom-px -right-px h-12 w-12 border-b border-r border-[#d1b58b]" />
                </div>

                {/* Top labels */}
                <div className="absolute left-8 right-8 top-8 flex items-start justify-between sm:left-10 sm:right-10">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#d1b58b]">
                      Speeddex / Portfolio
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/70">
                      {activeProject.category}
                    </p>
                  </div>

                  <p className="font-mono text-sm text-white">
                    {String(activeIndex + 1).padStart(2, "0")}
                    <span className="text-white/50">
                      {" "}
                      / {String(projects.length).padStart(2, "0")}
                    </span>
                  </p>
                </div>

                {/* Image title */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.slug + "-title"}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10 sm:right-10"
                  >
                    <div className="mb-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80">
                      <MapPin size={12} className="text-[#d1b58b]" />
                      {activeProject.location}
                    </div>

                    <h3 className="max-w-3xl text-3xl font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                      {activeProject.title}
                    </h3>

                    <Link
                      href={`/projects/${activeProject.slug}`}
                      className="mt-5 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white"
                    >
                      Discover Project
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d1b58b] text-black transition-transform hover:rotate-45">
                        <ArrowUpRight size={15} />
                      </span>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Thumbnail gallery */}
              <div className="flex items-center gap-3 border-t border-black/10 bg-[#eae6dd] p-3 sm:p-4">
                <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
                  {projects.map((project, index) => (
                    <button
                      key={project.slug}
                      type="button"
                      aria-label={`View ${project.title}`}
                      aria-pressed={activeIndex === index}
                      onClick={() => setActiveIndex(index)}
                      className={`relative h-[54px] w-[76px] shrink-0 overflow-hidden border-2 transition-all sm:h-[66px] sm:w-[96px] ${
                        activeIndex === index
                          ? "border-[#a88b54] opacity-100"
                          : "border-transparent opacity-55 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-1 left-1 text-[8px] font-bold text-white drop-shadow">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={previousProject}
                    aria-label="Previous project"
                    className="flex h-9 w-9 items-center justify-center border border-black/15 transition-colors hover:bg-black hover:text-white sm:h-10 sm:w-10"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={nextProject}
                    aria-label="Next project"
                    className="flex h-9 w-9 items-center justify-center border border-black/15 transition-colors hover:bg-black hover:text-white sm:h-10 sm:w-10"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right information panel */}
            <div className="relative flex flex-col justify-between overflow-hidden bg-[#191916] p-6 text-white sm:p-8 lg:p-9">
              <div className="pointer-events-none absolute -right-12 top-16 h-44 w-44 rounded-full border border-white/[0.07]" />
              <div className="pointer-events-none absolute -right-2 top-28 h-24 w-24 rounded-full border border-[#b08c54]/20" />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#d1b58b]">
                    Project Overview
                  </span>
                  <MoveUpRight size={16} className="text-[#d1b58b]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.slug + "-details"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="pt-7"
                  >
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                      Featured / {String(activeIndex + 1).padStart(2, "0")}
                    </p>

                    <h4 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-3xl">
                      {activeProject.title}
                    </h4>

                    <div className="mt-6 flex items-start gap-3">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-[#d1b58b]"
                      />
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                          Project Location
                        </p>
                        <p className="mt-1 text-sm text-white/85">
                          {activeProject.location}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 bg-[#b08c54]" />
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                          Project Category
                        </p>
                        <p className="mt-1 text-sm text-white/85">
                          {activeProject.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative divider */}
                <div className="my-7 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#b08c54]" />
                  <span className="h-px flex-1 bg-white/15" />
                </div>

                <p className="text-sm leading-6 text-white/55">
                  Thoughtful planning. Careful execution. Built with a
                  commitment to lasting quality.
                </p>
              </div>

              <div className="relative mt-8 border-t border-white/15 pt-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                    Browse Portfolio
                  </span>
                  <span className="font-mono text-xs text-[#d1b58b]">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex gap-1.5">
                  {projects.map((project, index) => (
                    <button
                      key={project.slug + "-progress"}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Select project ${index + 1}`}
                      className={`h-1 flex-1 transition-colors ${
                        activeIndex === index
                          ? "bg-[#d1b58b]"
                          : "bg-white/15 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <Link
                  href="/projects"
                  className="mt-6 flex items-center justify-between border border-white/20 px-4 py-4 text-[9px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-[#d1b58b] hover:bg-[#d1b58b] hover:text-black"
                >
                  View All Projects
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom strip fills the section without a huge gap */}
        <div className="mt-5 grid grid-cols-2 border-y border-black/10 sm:grid-cols-4">
          {[
            "Thoughtful Planning",
            "Quality Execution",
            "Structural Precision",
            "Built for Longevity",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 py-4 pr-3 ${
                index % 2 ? "pl-3 sm:pl-5" : "pl-0"
              } ${index >= 2 ? "border-t border-black/10 sm:border-t-0" : ""} ${
                index % 2 === 1 ? "sm:border-l sm:border-black/10" : ""
              } ${index === 2 ? "sm:border-l sm:border-black/10" : ""}`}
            >
              <span className="font-mono text-[9px] text-[#a88c54]">
                0{index + 1}
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-black/60 sm:text-[9px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
