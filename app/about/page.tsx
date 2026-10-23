import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Target,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const values = [
  {
    icon: Compass,
    title: "Purposeful Planning",
    description:
      "Understanding the project properly before execution helps create a clearer path from concept to completion.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Mindset",
    description:
      "We approach construction with attention to workmanship, materials, coordination and finishing.",
  },
  {
    icon: Target,
    title: "Focused Execution",
    description:
      "Every site has its own challenges. Our approach stays focused on practical execution and project requirements.",
  },
];

const capabilities = [
  "Residential construction",
  "Commercial construction",
  "Industrial construction",
  "Civil and structural work",
  "Turnkey project execution",
  "Renovation and finishing",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f2efe8] text-[#171714]">
      {/* Hero */}
      <section className="bg-[#11110f] pt-40 text-white sm:pt-48">
        <Container className="pb-24 sm:pb-32 lg:pb-40">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              <span className="h-px w-10 bg-[#d1b58b]/60" />
              About Speeddex
            </div>

            <h1 className="mt-7 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              Building
              <br />
              with
              <br />
              <span className="text-white/25">purpose.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#90754f]">
                Who We Are
              </p>
            </Reveal>

            <Reveal delay={0.1} direction="right">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  A construction company focused on thoughtful planning,
                  disciplined execution and dependable project delivery.
                </h2>

                <div className="mt-8 space-y-6 text-base leading-8 text-black/55">
                  <p>
                    Speeddex Construction Pvt. Ltd. is based in Pithampur, Dhar,
                    Madhya Pradesh. The company is positioned to support
                    construction requirements across residential, commercial,
                    industrial, civil and turnkey projects.
                  </p>

                  <p>
                    We believe every project starts with understanding. The
                    requirements, site conditions, scope, timeline and desired
                    outcome all influence how a project should be approached.
                  </p>

                  <p>
                    Our goal is to build a process around those requirements and
                    execute with clarity from the initial conversation through
                    project completion.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-[#d8d1c4] py-24 sm:py-32 lg:py-40">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                What Guides Us
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]">
                Principles
                <br />
                <span className="text-black/25">that matter.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px border border-black/10 bg-black/10 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.08}>
                  <article className="h-full bg-[#d8d1c4] p-8 lg:p-10">
                    <Icon size={27} strokeWidth={1.4} />

                    <h3 className="mt-16 text-2xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-black/55">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-[#f2efe8] py-24 sm:py-32 lg:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#90754f]">
                Capabilities
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]">
                One
                <br />
                focused
                <br />
                <span className="text-black/25">partner.</span>
              </h2>
            </Reveal>

            <Reveal direction="right">
              <div className="border-t border-black/10">
                {capabilities.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-black/10 py-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-black/30">
                        0{index + 1}
                      </span>

                      <span className="text-lg font-medium">{item}</span>
                    </div>

                    <CheckCircle2 size={17} className="text-black/25" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#11110f] py-24 text-white sm:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d1b58b]">
                  Start Something
                </p>

                <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.07em]">
                  Have a project
                  <br />
                  <span className="text-white/25">in mind?</span>
                </h2>
              </div>

              <Link
                href="/get-a-quote"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black"
              >
                Start a Conversation
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
