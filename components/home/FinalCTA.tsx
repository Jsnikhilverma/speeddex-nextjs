import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#d1b58b] text-[#171714]">
      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.25) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Large Decorative Circle */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-black/10" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full border border-black/10" />

      <Container className="relative z-10 py-10 sm:py-12 lg:py-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_350px] lg:items-end">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-black/50">
              <span className="h-px w-10 bg-black/40" />
              Start a Conversation
            </div>

            <h2 className="mt-6 max-w-5xl text-[clamp(3.8rem,9vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-black/25">meaningful.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} direction="right">
            <div>
              <p className="max-w-sm text-base leading-7 text-black/60">
                Have a construction project in mind? Tell us what you&apos;re
                planning and let&apos;s explore how Speeddex can help bring it
                to life.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/get-a-quote"
                  className="group inline-flex items-center justify-between rounded-full bg-[#171714] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Request a Consultation
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>

                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center justify-between rounded-full border border-black/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-all hover:bg-black/5"
                >
                  Email Us
                  <Mail
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-8 border-t border-black/15 pt-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Direct Email
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block break-all text-sm font-medium underline decoration-black/20 underline-offset-4 transition-colors hover:text-black/60"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-black/15 pt-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
            Speeddex Construction Pvt. Ltd.
          </span>

          <ArrowDownRight size={20} className="text-black/40" />
        </div>
      </Container>
    </section>
  );
}
