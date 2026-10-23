"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="flex h-[74px] items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-7">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-sm font-black text-black transition-transform duration-300 group-hover:rotate-45">
                S
              </span>

              <div className="hidden leading-none sm:block">
                <p className="text-[13px] font-bold tracking-[0.18em] text-white">
                  SPEEDDEX
                </p>
                <p className="mt-1 text-[8px] tracking-[0.24em] text-white/45">
                  CONSTRUCTION PVT. LTD.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/get-a-quote"
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-[#c6a477] md:flex"
            >
              Start a Project
              <ArrowUpRight size={15} />
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-4 top-[102px] z-40 overflow-hidden rounded-3xl border border-white/10 bg-[#11110f]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col">
              {siteConfig.navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 px-3 py-5 text-lg font-medium text-white"
                >
                  <span>{item.label}</span>

                  <span className="text-white/30">0{index + 1}</span>
                </Link>
              ))}

              <Link
                href="/get-a-quote"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-bold uppercase tracking-wider text-black"
              >
                Start a Project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
