import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/contact/QuoteForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Discuss your construction, civil, industrial, commercial or turnkey project with Speeddex Construction Pvt. Ltd.",
};

export default function GetAQuotePage() {
  return (
    <main className="bg-[#f2efe8] text-[#171714]">
      {/* Hero */}
      <section className="bg-[#11110f] pt-36 pb-20 text-white sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-36">
        <Container>
          <Reveal>
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              Back Home
            </Link>

            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              <span className="h-px w-10 bg-[#d1b58b]/60" />
              Start a Conversation
            </div>

            <h1 className="max-w-6xl text-[clamp(4rem,11vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
              LET&apos;S
              <br />
              BUILD
              <br />
              <span className="text-white/30">TOGETHER.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Share your project requirements with us. The more context you
              provide, the better we can understand what you are looking to
              build.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <Reveal>
              <QuoteForm />
            </Reveal>

            <div className="lg:pt-8">
              <Reveal delay={0.1}>
                <div className="border-t border-black/10 pt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#90754f]">
                    What Happens Next
                  </p>

                  <div className="mt-8 space-y-7">
                    {[
                      "We review your project requirement.",
                      "We understand the scope and key priorities.",
                      "We connect with you to discuss the requirement.",
                    ].map((item, index) => (
                      <div key={item} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[10px] font-bold text-[#90754f]">
                          0{index + 1}
                        </span>

                        <p className="pt-1 text-sm leading-6 text-black/55">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 border-t border-black/10 pt-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#90754f]">
                    Direct Contact
                  </p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-6 flex items-start gap-4 text-sm text-black/60 transition hover:text-black"
                  >
                    <Mail
                      size={18}
                      className="mt-0.5 shrink-0 text-[#90754f]"
                    />

                    <span className="break-all">{siteConfig.email}</span>
                  </a>

                  <div className="mt-6 flex items-start gap-4 text-sm leading-6 text-black/60">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-[#90754f]"
                    />

                    <span>
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                      <br />
                      {siteConfig.address.city}
                      <br />
                      {siteConfig.address.pincode}, {siteConfig.address.country}
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-12 bg-[#11110f] p-7 text-white sm:p-8">
                  <CheckCircle2 size={24} className="text-[#d1b58b]" />

                  <h3 className="mt-6 text-xl font-bold uppercase tracking-[-0.03em]">
                    Construction.
                    <br />
                    Civil.
                    <br />
                    Turnkey.
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/40">
                    Share the requirement. We&apos;ll start from there.
                  </p>

                  <Link
                    href="/services"
                    className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d1b58b]"
                  >
                    Explore Services
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
