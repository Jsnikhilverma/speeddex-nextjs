"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Ruler, ShieldCheck, Layers3 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We start by understanding the project, site conditions, requirements and the vision behind the space.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1600&auto=format&fit=crop",
    tag: "THE BEGINNING",
    detail: "Requirements & site review",
  },
  {
    number: "02",
    title: "Plan",
    text: "Every requirement is translated into a clear execution direction, keeping the project organised from the start.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=85&w=1600&auto=format&fit=crop",
    tag: "THE DIRECTION",
    detail: "Planning & coordination",
  },
  {
    number: "03",
    title: "Build",
    text: "Our team moves from planning to disciplined site execution with coordination, supervision and quality at every stage.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=85&w=1600&auto=format&fit=crop",
    tag: "THE EXECUTION",
    detail: "On-site execution & checks",
  },
  {
    number: "04",
    title: "Deliver",
    text: "The final stage brings together finishing, inspection and handover so the completed space is ready for its next chapter.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1600&auto=format&fit=crop",
    tag: "THE FINISH",
    detail: "Final inspection & handover",
  },
];

const principles = [
  {
    icon: Ruler,
    number: "01",
    title: "Thoughtful Planning",
    text: "A clear direction before work begins.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Coordinated Execution",
    text: "Every stage moves with purpose.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality Focus",
    text: "Attention to detail throughout.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const current = process[active];

  return (
    <section className="relative overflow-hidden bg-[#11110f] py-10 text-[#f3f0e9] sm:py-12 lg:py-14">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
        <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#c5a875]/[0.05] blur-[110px]" />
        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#c5a875]/[0.04] blur-[100px]" />
      </div>

      <Container>
        {/* Header */}
        <div className="relative z-10 grid gap-5 border-b border-white/10 pb-7 lg:grid-cols-[1fr_300px] lg:items-end lg:pb-8">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9aa72]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c9aa72]">
                Our Process
              </span>
            </div>

            <h2 className="text-[clamp(3.5rem,7.5vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.09em]">
              The way
              <br />
              <span className="text-white/20">we build.</span>
            </h2>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="lg:pb-1">
              <p className="max-w-sm text-sm leading-6 text-white/45">
                From the first conversation to the final handover, every stage
                has a clear purpose.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9aa72]" />
                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Plan carefully. Build purposefully.
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Main process layout */}
        <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          {/* Left: stages */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Project Journey
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-[#c9aa72]">
                4 Key Stages
              </span>
            </div>

            <div className="relative flex-1">
              <div className="absolute bottom-5 left-[19px] top-5 w-px bg-white/10" />

              {process.map((item, index) => {
                const isActive = index === active;

                return (
                  <Reveal
                    key={item.number}
                    delay={index * 0.05}
                    direction="left"
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className={`group relative block w-full border-b border-white/[0.08] text-left transition-colors duration-300 ${
                        isActive ? "bg-white/[0.035]" : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex gap-4 py-4 sm:py-5">
                        {/* Number marker */}
                        <div className="relative z-10 shrink-0 pt-0.5">
                          <motion.div
                            animate={{
                              borderColor: isActive
                                ? "rgba(201,170,114,1)"
                                : "rgba(255,255,255,.15)",
                              backgroundColor: isActive
                                ? "rgba(201,170,114,.12)"
                                : "#11110f",
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full border"
                          >
                            <span
                              className={`text-[9px] font-bold tracking-wider ${
                                isActive ? "text-[#c9aa72]" : "text-white/35"
                              }`}
                            >
                              {item.number}
                            </span>
                          </motion.div>
                        </div>

                        {/* Stage content */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <span
                                className={`text-[7px] font-bold uppercase tracking-[0.25em] ${
                                  isActive ? "text-[#c9aa72]" : "text-white/30"
                                }`}
                              >
                                {item.tag}
                              </span>

                              <h3
                                className={`mt-1 text-xl font-bold tracking-[-0.045em] transition-colors sm:text-2xl ${
                                  isActive
                                    ? "text-white"
                                    : "text-white/40 group-hover:text-white/75"
                                }`}
                              >
                                {item.title}
                              </h3>
                            </div>

                            <motion.div
                              animate={{
                                opacity: isActive ? 1 : 0.35,
                                rotate: isActive ? 45 : 0,
                              }}
                              className={
                                isActive ? "text-[#c9aa72]" : "text-white/30"
                              }
                            >
                              <ArrowUpRight size={17} />
                            </motion.div>
                          </div>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key={item.number}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeOut",
                                }}
                                className="overflow-hidden"
                              >
                                <p className="max-w-md pt-2 text-xs leading-6 text-white/50 sm:text-sm">
                                  {item.text}
                                </p>

                                <div className="mt-3 flex items-center gap-2">
                                  <Check size={12} className="text-[#c9aa72]" />
                                  <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/55">
                                    {item.detail}
                                  </span>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="process-active-line"
                          className="absolute bottom-0 left-[55px] right-0 h-px bg-[#c9aa72]/70"
                        />
                      )}
                    </button>
                  </Reveal>
                );
              })}
            </div>

            {/* Compact information block */}
            <div className="mt-4 flex items-center justify-between gap-3 border border-white/10 bg-white/[0.025] px-4 py-3">
              <div>
                <span className="block text-[7px] uppercase tracking-[0.22em] text-white/35">
                  Our approach
                </span>
                <span className="mt-1 block text-xs font-medium text-white/80">
                  One stage at a time.
                </span>
              </div>
              <div className="flex gap-1">
                {process.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Select ${item.title} stage`}
                    className={`h-7 w-7 border text-[8px] transition-colors ${
                      active === index
                        ? "border-[#c9aa72] bg-[#c9aa72] text-black"
                        : "border-white/10 text-white/40 hover:border-white/40"
                    }`}
                  >
                    {item.number}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: active image */}
          <Reveal direction="right" delay={0.1}>
            <div className="flex h-full flex-col">
              <div className="relative aspect-[1.15/1] min-h-[280px] flex-1 overflow-hidden bg-[#1b1b18] sm:aspect-[1.35/1] lg:aspect-auto lg:min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.number}
                    initial={{ opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.015 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={`${current.title} construction stage`}
                      fill
                      priority={active === 0}
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/25" />
                  </motion.div>
                </AnimatePresence>

                {/* Image frame */}
                <div className="pointer-events-none absolute inset-4 border border-white/20 sm:inset-6" />
                <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-[#c9aa72] sm:left-6 sm:top-6" />
                <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-[#c9aa72] sm:right-6 sm:top-6" />
                <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#c9aa72] sm:bottom-6 sm:left-6" />
                <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#c9aa72] sm:bottom-6 sm:right-6" />

                {/* Top image label */}
                <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-9 sm:right-9 sm:top-9">
                  <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#c9aa72]">
                    Speeddex / Construction
                  </span>
                  <span className="border border-white/20 bg-black/20 px-3 py-2 text-[8px] tracking-[0.2em] text-white/75 backdrop-blur-sm">
                    {current.number} — 04
                  </span>
                </div>

                {/* Image title */}
                <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.number}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#c9aa72]">
                        {current.tag}
                      </span>
                      <h3 className="mt-2 text-4xl font-bold tracking-[-0.07em] text-white sm:text-5xl lg:text-6xl">
                        {current.title}
                        <span className="text-[#c9aa72]">.</span>
                      </h3>
                      <p className="mt-2 text-xs text-white/60">
                        {current.detail}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Image navigation */}
                <div className="absolute bottom-7 right-7 flex gap-1 sm:bottom-9 sm:right-9">
                  {process.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`View ${item.title}`}
                      className={`h-1 transition-all duration-300 ${
                        active === index
                          ? "w-8 bg-[#c9aa72]"
                          : "w-3 bg-white/40 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image caption bar */}
              <div className="grid grid-cols-2 border-x border-b border-white/10 sm:grid-cols-3">
                <div className="border-r border-white/10 px-4 py-3 sm:px-5">
                  <span className="block text-[7px] uppercase tracking-[0.2em] text-white/30">
                    Current stage
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-white/80">
                    {current.title}
                  </span>
                </div>

                <div className="px-4 py-3 sm:px-5">
                  <span className="block text-[7px] uppercase tracking-[0.2em] text-white/30">
                    Our focus
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-white/80">
                    {active === 0
                      ? "Understanding"
                      : active === 1
                        ? "Preparation"
                        : active === 2
                          ? "Execution"
                          : "Finishing"}
                  </span>
                </div>

                <div className="col-span-2 hidden border-l border-white/10 px-5 py-3 sm:block">
                  <span className="block text-[7px] uppercase tracking-[0.2em] text-white/30">
                    The objective
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-white/80">
                    A clear, coordinated construction journey
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Principles strip */}
        <div className="relative z-10 mt-6 grid border border-white/10 sm:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`flex items-center gap-4 bg-white/[0.02] px-4 py-4 transition-colors hover:bg-white/[0.045] sm:px-5 ${
                  index !== 2
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c9aa72]/30 text-[#c9aa72]">
                  <Icon size={17} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <span className="block text-[7px] uppercase tracking-[0.2em] text-[#c9aa72]">
                    Principle {item.number}
                  </span>
                  <h4 className="mt-1 text-sm font-semibold text-white/90">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] leading-5 text-white/40">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
      </Container>
    </section>
  );
}
