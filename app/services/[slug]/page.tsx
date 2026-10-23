import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;

  const serviceIndex = services.findIndex((item) => item.slug === slug);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = services[serviceIndex];

  const nextService = services[(serviceIndex + 1) % services.length];

  return (
    <main className="bg-[#11110f]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} by Speeddex Construction`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-black/20 to-black/30" />

        <Container className="relative flex min-h-[78vh] flex-col justify-end pb-14 pt-40 sm:pb-20 lg:pb-24">
          <Reveal>
            <Link
              href="/services"
              className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              All Services
            </Link>

            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              <span className="h-px w-10 bg-[#d1b58b]/60" />
              {service.number}
              <span className="text-white/40">Construction Services</span>
            </div>

            <h1 className="max-w-6xl text-[clamp(3.5rem,10vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white">
              {service.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              {service.shortDescription}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-[#f2efe8] py-20 text-[#171714] sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#90754f]">
                  What We Deliver
                </p>

                <div className="mt-5 h-px w-16 bg-[#90754f]/40" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-[clamp(1.8rem,4vw,4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section className="bg-[#11110f] py-20 sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                  Capabilities
                </p>

                <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-white">
                  BUILT
                  <br />
                  WITH
                  <br />
                  PURPOSE.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-white/10">
                {service.points.map((point, index) => (
                  <div
                    key={point}
                    className="group flex items-center justify-between gap-6 border-b border-white/10 py-7"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[10px] font-bold text-[#d1b58b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg text-white/75 transition group-hover:text-white sm:text-xl">
                        {point}
                      </span>
                    </div>

                    <Check
                      size={18}
                      className="shrink-0 text-white/20 transition group-hover:text-[#d1b58b]"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-[#181713] py-20 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                Our Approach
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-white">
                FROM PLAN
                <br />
                TO REALITY.
              </h2>
            </div>
          </Reveal>

          <div className="grid border-t border-white/10 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We begin by understanding the project requirements, priorities and intended outcome.",
              },
              {
                number: "02",
                title: "Plan",
                text: "The project is structured around clear scope, coordination and execution planning.",
              },
              {
                number: "03",
                title: "Build",
                text: "Execution stays focused on quality, coordination and disciplined site progress.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "The final stage focuses on finishing, review and a structured handover.",
              },
            ].map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="border-b border-white/10 p-7 md:min-h-[300px] md:border-b-0 md:border-r md:last:border-r-0 lg:p-9">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#d1b58b]">
                    {step.number}
                  </span>

                  <h3 className="mt-16 text-2xl font-bold uppercase tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section className="bg-[#d1b58b] py-24 text-[#11110f] sm:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/50">
                  Discuss Your Requirement
                </p>

                <h2 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                  LET&apos;S
                  <br />
                  BUILD IT.
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-7 text-black/60">
                  Tell us about your construction requirement and our team can
                  understand the scope and discuss the next steps with you.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/get-a-quote"
                  className="group inline-flex items-center justify-center gap-4 bg-[#11110f] px-7 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black"
                >
                  Get a Quote
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-3 border border-black/20 px-7 py-5 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-black/10"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* =====================================================
          NEXT SERVICE
      ====================================================== */}
      <section className="bg-[#11110f] py-20 sm:py-28">
        <Container>
          <Reveal>
            <Link
              href={`/services/${nextService.slug}`}
              className="group block"
            >
              <div className="flex flex-col gap-7 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                    Next Service
                  </p>

                  <h2 className="mt-4 text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.065em] text-white transition group-hover:text-[#d1b58b]">
                    {nextService.title}
                  </h2>
                </div>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition group-hover:border-[#d1b58b] group-hover:bg-[#d1b58b] group-hover:text-[#11110f]">
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
