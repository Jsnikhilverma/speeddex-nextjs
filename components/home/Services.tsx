"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    number: "01",
    title: "Residential",
    short: "Homes",
    description:
      "Thoughtful construction for homes designed around everyday life, durability and detail.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400&auto=format&fit=crop",
    meta: "Private Residences",
  },
  {
    number: "02",
    title: "Commercial",
    short: "Spaces",
    description:
      "Functional commercial spaces engineered around performance, usability and brand experience.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1400&auto=format&fit=crop",
    meta: "Commercial Spaces",
  },
  {
    number: "03",
    title: "Industrial",
    short: "Facilities",
    description:
      "Site-focused construction solutions for industrial environments and operational requirements.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=85&w=1400&auto=format&fit=crop",
    meta: "Industrial Projects",
  },
  {
    number: "04",
    title: "Turnkey",
    short: "Execution",
    description:
      "A coordinated end-to-end approach covering planning, execution, finishing and handover.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=85&w=1400&auto=format&fit=crop",
    meta: "End-to-End Delivery",
  },
  {
    number: "05",
    title: "Civil & Structural",
    short: "Engineering",
    description:
      "Core civil and structural execution with attention to quality, coordination and site discipline.",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=85&w=1400&auto=format&fit=crop",
    meta: "Civil & Structural",
  },
  {
    number: "06",
    title: "Renovation",
    short: "Transformation",
    description:
      "Transforming existing spaces through considered renovation, upgrades and finishing work.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1400&auto=format&fit=crop",
    meta: "Renovation & Finishing",
  },
];

// Type-safe 3D card animation variants
const cardVariants: Variants = {
  initial: {
    opacity: 0,
    rotateY: -25,
    rotateX: 10,
    scale: 0.9,
    z: -100,
  },

  animate: {
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    scale: 1,
    z: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },

  exit: {
    opacity: 0,
    rotateY: 25,
    rotateX: -10,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
    },
  },
};

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];

  const getServiceUrl = (title: string) =>
    `/services/${title
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("&", "and")}`;

  return (
    <section className="relative overflow-hidden bg-[#11110f] py-24 text-white sm:py-32 lg:py-20">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <Container>
        {/* Header */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d1b58b]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d1b58b]">
                What We Do
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <p className="max-w-xl text-sm leading-7 text-white/40 lg:ml-auto">
              From foundations to final finishes, our capabilities are built
              around one goal — delivering spaces that work beautifully and
              stand the test of time.
            </p>
          </Reveal>
        </div>

        {/* Main Heading */}
        <Reveal delay={0.1}>
          <h2 className="relative z-10 mt-8 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
            Built around
            <br />
            <span className="text-white/20">your vision.</span>
          </h2>
        </Reveal>

        {/* Main Service Area */}
        <div className="relative z-10 mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left: Service List */}
          <div className="border-t border-white/10">
            {services.map((service, index) => {
              const isActive = index === activeService;

              return (
                <Reveal key={service.number} delay={index * 0.04}>
                  <Link
                    href={getServiceUrl(service.title)}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    className="group relative block overflow-hidden border-b border-white/10"
                  >
                    {/* Active Gold Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-r from-[#d1b58b]/15 via-transparent to-transparent"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <div className="relative flex items-center gap-5 px-2 py-6">
                      {/* Active Indicator */}
                      <motion.span
                        animate={{
                          scaleY: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-0 top-0 h-full w-1 origin-center bg-[#d1b58b]"
                      />

                      {/* Number */}
                      <span
                        className={`w-7 shrink-0 text-[10px] font-bold tracking-[0.2em] transition-colors ${
                          isActive ? "text-[#d1b58b]" : "text-white/25"
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Title and Mobile Description */}
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`text-2xl font-semibold tracking-[-0.04em] transition-colors sm:text-3xl lg:text-4xl ${
                            isActive
                              ? "text-white"
                              : "text-white/35 group-hover:text-white/70"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden lg:hidden"
                        >
                          <p className="mt-3 max-w-md text-xs leading-6 text-white/45">
                            {service.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Arrow */}
                      <motion.span
                        animate={{
                          scale: isActive ? 1.15 : 1,
                          backgroundColor: isActive
                            ? "#d1b58b"
                            : "rgba(255,255,255,0)",
                          borderColor: isActive
                            ? "#d1b58b"
                            : "rgba(255,255,255,0.1)",
                          color: isActive ? "#000000" : "rgba(255,255,255,0.3)",
                        }}
                        transition={{ duration: 0.25 }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                      >
                        <motion.div
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ArrowUpRight size={16} />
                        </motion.div>
                      </motion.span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Right: 3D Perspective Card */}
          <Reveal delay={0.2} direction="right">
            <div className="relative hidden [perspective:1200px] lg:block">
              <div className="relative aspect-[1.08] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161614] p-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative h-full w-full overflow-hidden rounded-xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                    {/* Animated Light Scan */}
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: "200%" }}
                      transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#d1b58b]/15 to-transparent"
                    />

                    {/* Card Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full border border-[#d1b58b]/40 bg-black/60 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d1b58b] backdrop-blur-md">
                            <Sparkles size={11} />
                            {active.number} / Capability
                          </span>

                          <span className="text-right text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                            {active.meta}
                          </span>
                        </div>

                        <div className="flex items-end justify-between gap-6">
                          <div>
                            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                              {active.title}
                            </h3>

                            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70">
                              {active.description}
                            </p>
                          </div>

                          <Link
                            href={getServiceUrl(active.title)}
                            aria-label={`Explore ${active.title} services`}
                            className="group/btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d1b58b] text-black transition-all hover:scale-110 hover:bg-white"
                          >
                            <ArrowUpRight
                              size={18}
                              className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
