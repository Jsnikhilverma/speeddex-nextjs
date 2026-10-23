"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    id: "01",
    eyebrow: "CLARITY",
    title: "We listen before we build.",
    description:
      "Every project begins with understanding the people, purpose and expectations behind the space.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1800&auto=format&fit=crop",
  },
  {
    id: "02",
    eyebrow: "PLANNING",
    title: "We think before we execute.",
    description:
      "Good construction starts long before the first brick. Clear planning gives every decision its place.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1800&auto=format&fit=crop",
  },
  {
    id: "03",
    eyebrow: "CRAFT",
    title: "We stay close to the work.",
    description:
      "The quality of a finished space comes from the details. We remain connected to the work on site.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=85&w=1800&auto=format&fit=crop",
  },
  {
    id: "04",
    eyebrow: "LONGEVITY",
    title: "We build beyond handover.",
    description:
      "Our goal is not simply to finish a project, but to create something that continues to feel right years later.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1800&auto=format&fit=crop",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white text-[#151513]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute left-[6%] top-0 h-full w-px bg-[#e7e4dd]" />
        <div className="absolute right-[6%] top-0 h-full w-px bg-[#e7e4dd]" />
        <div className="absolute left-0 top-[30%] h-px w-full bg-[#ebe8e2]" />
        <div className="absolute left-0 top-[72%] h-px w-full bg-[#ebe8e2]" />
      </div>

      <Container className="relative z-10 py-10 sm:py-14 lg:py-16">
        {/* Header */}
        <div className="grid w-full grid-cols-1 gap-6 text-left lg:grid-cols-[0.8fr_2fr] lg:gap-8">
          <Reveal>
            <div className="flex items-center justify-start gap-3 text-left">
              <span className="h-px w-8 shrink-0 bg-[#151513]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8a867d]">
                Why Speeddex
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex w-full flex-col items-start text-left">
              <h2 className="m-0 w-full max-w-5xl text-left text-[clamp(3rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.065em] sm:leading-[0.88]">
                Different <span className="text-[#aaa59c]">by design.</span>
              </h2>

              <p className="mt-5 w-full max-w-xl text-left text-sm leading-6 text-[#68645d] sm:text-[15px] sm:leading-7">
                We believe better construction comes from better thinking. Every
                project gets the attention, coordination and discipline it
                deserves.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Section metadata */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center justify-between gap-3 border-y border-[#dedbd4] py-3 sm:mt-10">
            <span className="font-mono text-[9px] tracking-[0.15em] text-[#969189] sm:tracking-[0.2em]">
              04 / DIFFERENCES
            </span>

            <span className="hidden text-[9px] uppercase tracking-[0.22em] text-[#aaa59f] sm:block">
              Process / People / Precision
            </span>

            <span className="font-mono text-[9px] tracking-[0.15em] text-[#969189] sm:tracking-[0.2em]">
              SPEEDDEX
            </span>
          </div>
        </Reveal>

        {/* Reasons */}
        <div className="mt-9 space-y-12 sm:mt-12 sm:space-y-14 lg:mt-14 lg:space-y-16">
          {reasons.map((reason, index) => {
            const reverse = index % 2 !== 0;

            return (
              <Reveal key={reason.id} delay={0.04}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  className={`relative flex flex-col ${
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative z-10 w-full lg:w-[57%] ${
                      reverse ? "lg:translate-x-[4%]" : "lg:-translate-x-[4%]"
                    }`}
                  >
                    <motion.div
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.015 },
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative aspect-[1.4] overflow-hidden bg-[#e7e4dc] sm:aspect-[1.65] lg:aspect-[1.4]"
                    >
                      <Image
                        src={reason.image}
                        alt={reason.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
                      />

                      {/* Image number */}
                      <div className="absolute left-4 top-4 flex items-center gap-3 sm:left-6 sm:top-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />

                        <span className="font-mono text-[9px] tracking-[0.18em] text-white/85">
                          {reason.id}
                        </span>
                      </div>

                      {/* Image label */}
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                        <span className="text-[8px] uppercase tracking-[0.25em] text-white/80">
                          Construction / {reason.eyebrow}
                        </span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        variants={{
                          rest: { x: 0, y: 0, opacity: 0.75 },
                          hover: { x: 3, y: -3, opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 sm:bottom-6 sm:right-6"
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.3}
                          className="text-white"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`relative z-20 -mt-5 w-[94%] self-end bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:-mt-7 sm:w-[82%] sm:p-7 lg:mt-0 lg:w-[49%] lg:self-center lg:p-8 ${
                      reverse ? "lg:-translate-x-[4%]" : "lg:translate-x-[4%]"
                    }`}
                  >
                    <div className="mb-5 flex items-center justify-between border-b border-[#e4e1da] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-[#151513]" />

                        <span className="text-[8px] uppercase tracking-[0.25em] text-[#858078]">
                          {reason.eyebrow}
                        </span>
                      </div>

                      <span className="font-mono text-[9px] tracking-[0.15em] text-[#aaa59d]">
                        {reason.id}
                      </span>
                    </div>

                    <h3 className="max-w-lg text-[clamp(1.8rem,3vw,3.1rem)] font-light leading-[0.98] tracking-[-0.05em]">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-md text-[13px] leading-6 text-[#69655e] sm:text-sm sm:leading-7">
                      {reason.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#e4e1da] pt-4">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-[#99948b]">
                        Speeddex approach
                      </span>

                      <span className="h-px w-9 bg-[#cfcac1]" />
                    </div>
                  </div>

                  {/* Connector line */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute top-1/2 hidden h-px w-[12%] bg-[#d4d0c7] lg:block ${
                      reverse ? "right-[48%]" : "left-[48%]"
                    }`}
                  >
                    <span
                      className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-[#aaa49a] bg-white ${
                        reverse ? "left-0" : "right-0"
                      }`}
                    />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom statement */}
        <Reveal>
          <div className="mt-12 flex flex-col gap-4 border-t border-[#dedbd4] pt-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-2xl font-light leading-tight tracking-[-0.04em] sm:text-3xl">
              Thoughtful decisions.
              <span className="text-[#aaa59c]"> Lasting spaces.</span>
            </p>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#969189]">
              The Speeddex standard
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
