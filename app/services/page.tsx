import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="bg-[#f2efe8] text-[#171714]">
      {/* Hero */}
      <section className="bg-[#11110f] pt-40 text-white sm:pt-48">
        <Container className="pb-24 sm:pb-32 lg:pb-40">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              <span className="h-px w-10 bg-[#d1b58b]/60" />
              Our Services
            </div>

            <h1 className="mt-7 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              What
              <br />
              we
              <br />
              <span className="text-white/25">build.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-7 text-white/50">
              Construction capabilities structured around different project
              types, from residential and commercial spaces to industrial and
              turnkey execution.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 lg:py-36">
        <Container>
          <div className="border-t border-black/10">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block border-b border-black/10 py-10 lg:py-14"
                >
                  <div className="grid gap-8 lg:grid-cols-[80px_0.9fr_1fr_220px_50px] lg:items-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-black/30">
                      {service.number}
                    </span>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      {service.title}
                    </h2>

                    <p className="max-w-lg text-sm leading-7 text-black/50">
                      {service.shortDescription}
                    </p>

                    <div className="relative aspect-[16/9] overflow-hidden bg-black">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="220px"
                      />
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
