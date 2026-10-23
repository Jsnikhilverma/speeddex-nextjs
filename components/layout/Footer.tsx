import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#11110f] text-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-black uppercase tracking-[-0.05em]"
            >
              Speeddex<span className="text-[#d1b58b]">.</span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Construction, civil and turnkey project solutions built around
              thoughtful planning, disciplined execution and long-term value.
            </p>

            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition hover:border-[#d1b58b] hover:bg-[#d1b58b] hover:text-[#11110f]"
            >
              Start a Project
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              Explore
            </p>

            <div className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/get-a-quote"
                className="w-fit text-sm text-white/55 transition hover:text-white"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d1b58b]">
              Contact
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-[#d1b58b]" />

                <span className="break-all">{siteConfig.email}</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/55">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#d1b58b]" />

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
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Speeddex Construction Pvt. Ltd.</p>
            <p>Pithampur · Madhya Pradesh · India</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
