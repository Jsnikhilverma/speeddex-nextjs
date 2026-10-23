"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[#11110f] text-white">
      {/* Background Image with Simple Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=85&w=2200&auto=format&fit=crop"
          alt="Modern construction site"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#11110f]" />
      </div>

      {/* Main Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-full max-w-5xl px-6 pb-12 text-center sm:px-8 sm:pb-16 lg:pb-20">
        {" "}
        {/* Location Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#d1b58b] backdrop-blur-sm"
        >
          <span>Pithampur · Madhya Pradesh</span>
        </motion.div> */}
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Building <span className="text-[#d1b58b]">What's Next.</span>
        </motion.h1>
        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl leading-relaxed"
        >
          Civil, commercial, and turnkey construction solutions crafted with
          precision and uncompromised quality.
        </motion.p>
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center gap-2 rounded-full bg-[#d1b58b] px-7 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-white"
          >
            <span>Start Your Project</span>
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      {/* Bottom Minimal Navigation Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
