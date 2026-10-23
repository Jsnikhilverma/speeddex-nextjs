"use client";

import { Quote, Star, ArrowUpRight, MessageSquareQuote } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: "01",
    quote:
      "Client testimonial will be added here once an approved customer review is available.",
    name: "Client Name",
    role: "Project Client",
    location: "Project Location",
  },
  {
    id: "02",
    quote:
      "This section is designed for genuine project feedback and can be updated directly with verified testimonials.",
    name: "Client Name",
    role: "Project Client",
    location: "Project Location",
  },
  {
    id: "03",
    quote:
      "Real client experiences will be featured here to give future customers a transparent view of working with Speeddex.",
    name: "Client Name",
    role: "Project Client",
    location: "Project Location",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#11110f] py-10 text-white sm:py-14 lg:py-16">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#c9aa72]/[0.05] blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#c9aa72]/[0.04] blur-[100px]" />
      </div>

      <Container>
        {/* Header */}
        <div className="relative z-10 grid gap-5 border-b border-white/10 pb-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9aa72]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c9aa72]">
                Client Perspective
              </span>
            </div>

            <SectionHeading
              eyebrow=""
              title={
                <>
                  Built on
                  <br />
                  <span className="text-white/25">trust.</span>
                </>
              }
              light
            />
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <div className="lg:pb-2">
              <p className="max-w-md text-sm leading-6 text-white/45">
                Every project is a collaboration. We value clear communication,
                thoughtful planning and relationships built on trust.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <MessageSquareQuote
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#c9aa72]"
                />
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                  Genuine feedback matters
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section label strip */}
        <Reveal delay={0.1}>
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 py-3">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/35">
              01 — 03 / TESTIMONIALS
            </span>

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              The Speeddex Experience
            </span>
          </div>
        </Reveal>

        {/* Testimonial cards */}
        <div className="relative z-10 mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.07}>
              <article className="group relative flex h-full min-h-[300px] flex-col overflow-hidden border border-white/10 bg-[#171714] p-5 transition-colors duration-300 hover:border-[#c9aa72]/40 sm:p-6 lg:min-h-[320px]">
                {/* Decorative quote */}
                <div className="pointer-events-none absolute -right-2 -top-5 select-none text-[130px] font-serif leading-none text-white/[0.025]">
                  ”
                </div>

                {/* Card header */}
                <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-[#c9aa72]/25 bg-[#c9aa72]/[0.06]">
                      <Quote
                        size={16}
                        strokeWidth={1.3}
                        className="text-[#c9aa72]"
                      />
                    </div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/45">
                      Client Feedback
                    </span>
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.15em] text-white/25">
                    {testimonial.id}
                  </span>
                </div>

                {/* Stars: decorative until a verified rating is supplied */}
                <div
                  className="mt-5 flex gap-1 text-[#c9aa72]/70"
                  aria-label="Rating not yet provided"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={12} strokeWidth={1.2} />
                  ))}
                  <span className="ml-2 text-[8px] uppercase tracking-[0.15em] text-white/30">
                    Awaiting review
                  </span>
                </div>

                {/* Quote */}
                <p className="relative mt-4 flex-1 text-[14px] leading-7 text-white/65 sm:text-[15px]">
                  “{testimonial.quote}”
                </p>

                {/* Author details */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white/80">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                        {testimonial.role}
                      </p>

                      <p className="mt-1 text-[10px] text-white/30">
                        {testimonial.location}
                      </p>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#c9aa72]/50 group-hover:text-[#c9aa72]">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c9aa72] transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom statement */}
        <Reveal delay={0.1}>
          <div className="relative z-10 mt-5 grid gap-4 border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
            <div>
              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#c9aa72]">
                Built on relationships
              </span>

              <h3 className="mt-2 text-xl font-light tracking-[-0.04em] text-white sm:text-2xl">
                Every successful project starts with trust.
              </h3>
            </div>

            <div className="flex items-center gap-3 text-white/40">
              <span className="text-[8px] uppercase tracking-[0.18em]">
                Your project could be next
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#c9aa72]">
                <ArrowUpRight size={15} />
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
