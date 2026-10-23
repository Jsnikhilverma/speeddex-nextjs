"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const capabilities = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Construction",
  "Civil & Structural Work",
  "Turnkey Execution",
  "Renovation & Finishing",
];

export default function Intro() {
  return (
    <section className="overflow-hidden bg-[#f2efe8] py-8 text-[#171714] sm:py-10 lg:py-12">
      <Container>
        {/* Compact Header */}

        {/* Main Grid */}
        <div className="grid items-start gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 xl:gap-14">
          {/* Image */}
          <Reveal>
            <div className="relative h-[300px] sm:h-[360px] lg:h-[410px]">
              <div className="absolute inset-y-0 left-0 w-[82%] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=85&w=1200&auto=format&fit=crop"
                  alt="Construction project"
                  fill
                  sizes="(max-width: 1024px) 82vw, 440px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10" />

                <span className="absolute bottom-3 left-3 bg-[#f2efe8] px-3 py-2 text-[8px] font-bold uppercase tracking-widest">
                  Built with intention
                </span>
              </div>

              <div className="absolute bottom-0 right-0 h-[44%] w-[46%] overflow-hidden border-[5px] border-[#f2efe8]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=85&w=800&auto=format&fit=crop"
                  alt="Construction team at work"
                  fill
                  sizes="(max-width: 1024px) 46vw, 250px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute right-[13%] top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#171714] text-xs font-bold text-white">
                01
              </div>

              <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-[#a88b5c]/60" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.1} direction="right">
            <div>
              <h2 className="mt-3 text-[clamp(2.8rem,5vw,4.8rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]">
                Building
                <br />
                <span className="text-black/25">with purpose.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-black/60 sm:text-[15px]">
                Speeddex Construction Pvt. Ltd. delivers thoughtfully planned
                residential, commercial and industrial construction with a focus
                on quality, precision and long-term value.
              </p>

              {/* Compact Stats */}
              <div className="mt-6 grid grid-cols-3 border-y border-black/10 py-4">
                {[
                  { number: "10+", label: "Years" },
                  { number: "50+", label: "Projects" },
                  { number: "100%", label: "Commitment" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={
                      index ? "border-l border-black/10 pl-4 sm:pl-6" : ""
                    }
                  >
                    <div className="text-2xl font-black tracking-tight sm:text-3xl">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-black/45 sm:text-[9px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compact Capabilities */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/45">
                    Our Capabilities
                  </span>
                  <Plus size={13} className="text-[#a88b5c]" />
                </div>

                <div className="grid grid-cols-1 border-t border-black/10 sm:grid-cols-2 sm:gap-x-5">
                  {capabilities.map((item, index) => (
                    <div
                      key={item}
                      className="group flex items-center justify-between gap-2 border-b border-black/10 py-2.5 transition-colors hover:text-[#a88b5c]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="font-mono text-[9px] text-[#a88b5c]">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-semibold sm:text-[13px]">
                          {item}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={13}
                        className="shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="group mt-5 inline-flex items-center gap-5 bg-[#171714] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#a88b5c]"
              >
                Discover Speeddex
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
