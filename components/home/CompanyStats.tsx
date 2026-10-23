"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    number: 150,
    suffix: "+",
    label: "Complete Projects",
    code: "CP",
  },
  {
    number: 12,
    suffix: "+",
    label: "Active Projects",
    code: "AP",
  },
  {
    number: 85,
    suffix: "+",
    label: "Clients & Partners",
    code: "CL",
  },
  {
    number: 10,
    suffix: "+",
    label: "Years Experience",
    code: "YR",
  },
  {
    number: 2016,
    suffix: "",
    label: "Established In",
    code: "EST",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setStarted(true);

        const duration = 1600;
        const start = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 4);

          setCount(Math.floor(value * eased));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CompanyStats() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-8 sm:py-10 lg:py-12">
      {/* Architectural guide lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-0 h-full w-px bg-black/[0.035]" />
        <div className="absolute right-[4%] top-0 h-full w-px bg-black/[0.035]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-black/[0.025]" />

        <div className="absolute left-[4%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-[#b08c54]/50 bg-[#faf9f6]" />
        <div className="absolute right-[4%] top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 border border-[#b08c54]/50 bg-[#faf9f6]" />
      </div>

      <Container>
        <Reveal>
          <div className="relative">
            {/* Top technical line */}

            {/* Stats */}
            <div className="relative border-y border-black/10">
              <div className="grid grid-cols-2 lg:grid-cols-5">
                {stats.map((stat, index) => (
                  <Reveal key={stat.label} delay={index * 0.08}>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      className={`
                        group relative
                        flex min-h-[180px]
                        flex-col
                        items-center
                        justify-center
                        px-5
                        py-10
                        text-center
                        transition-colors
                        duration-500
                        hover:bg-white
                        sm:min-h-[200px]
                        lg:min-h-[235px]
                        ${
                          index < stats.length - 1
                            ? "border-b border-black/10 lg:border-b-0 lg:border-r"
                            : ""
                        }
                        ${
                          index === 2
                            ? "border-l border-black/10 lg:border-l-0"
                            : ""
                        }
                      `}
                    >
                      {/* Number */}
                      <div className="relative">
                        {/* Small technical code */}
                        <span className="absolute -left-7 top-1/2 -translate-y-1/2 text-[7px] font-semibold tracking-[0.18em] text-black/20">
                          {stat.code}
                        </span>

                        <motion.div
                          variants={{
                            rest: {
                              y: 0,
                            },
                            hover: {
                              y: -6,
                            },
                          }}
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <span className="block text-[clamp(3rem,4.8vw,5rem)] font-medium leading-none tracking-[-0.08em] text-[#11110f]">
                            <CountUp value={stat.number} suffix={stat.suffix} />
                          </span>
                        </motion.div>
                      </div>

                      {/* Gold detail */}
                      <motion.div
                        variants={{
                          rest: {
                            width: 22,
                          },
                          hover: {
                            width: 42,
                          },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-6 h-px bg-[#b08c54]"
                      />

                      {/* Label */}
                      <span className="mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45 sm:text-[10px]">
                        {stat.label}
                      </span>

                      {/* Hover bottom marker */}
                      <motion.span
                        variants={{
                          rest: {
                            scaleX: 0,
                          },
                          hover: {
                            scaleX: 1,
                          },
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-0 left-1/4 h-[2px] w-1/2 origin-center bg-[#b08c54]"
                      />

                      {/* Corner marker */}
                      <span className="absolute right-4 top-4 h-2 w-2 border-r border-t border-black/10 transition-colors duration-500 group-hover:border-[#b08c54]" />
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Bottom technical line */}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
