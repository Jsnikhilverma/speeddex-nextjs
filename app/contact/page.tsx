import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/contact/QuoteForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Speeddex Construction Pvt. Ltd. in Pithampur, Madhya Pradesh for construction, civil, industrial, commercial and turnkey project requirements.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f2efe8] text-[#171714]">
      {/* Hero */}
      <section className="bg-[#11110f] pt-36 pb-20 text-white sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-36">
        <Container>
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              <span className="h-px w-10 bg-[#d1b58b]/60" />
              Contact Speeddex
            </div>

            <h1 className="max-w-6xl text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              LET&apos;S
              <br />
              TALK
              <br />
              <span className="text-white/30">BUILDING.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Have a construction requirement, development opportunity or
              project idea? Get in touch with Speeddex Construction.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="border-b border-black/10 bg-[#d1b58b] py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-black/15 transition group-hover:bg-black group-hover:text-white">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
                    Email
                  </p>

                  <p className="mt-2 break-all text-base font-semibold sm:text-lg">
                    {siteConfig.email}
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-black/15">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
                    Office
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 sm:text-base">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.city}
                    <br />
                    {siteConfig.address.pincode}, {siteConfig.address.country}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Main */}
      <section className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#90754f]">
                  Start Here
                </p>

                <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
                  HAVE A
                  <br />
                  PROJECT
                  <br />
                  IN MIND?
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-black/50">
                  Use the enquiry form to share your requirement. You can
                  include your project type, location, budget and any initial
                  information you already have.
                </p>

                <Link
                  href="/get-a-quote"
                  className="group mt-8 inline-flex items-center gap-3 bg-[#11110f] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#90754f]"
                >
                  Get a Quote
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#11110f] py-20 text-white sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
                  Speeddex Construction
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-6xl">
                  BUILDING
                  <br />
                  WHAT&apos;S NEXT.
                </h2>
              </div>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
              >
                Explore Projects
                <ArrowUpRight
                  size={17}
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
