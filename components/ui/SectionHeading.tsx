import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <div
        className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] ${
          light ? "text-[#d1b58b]" : "text-[#90754f]"
        }`}
      >
        <span
          className={`h-px w-10 ${
            light ? "bg-[#d1b58b]/60" : "bg-[#90754f]/50"
          }`}
        />

        {eyebrow}
      </div>

      <h2
        className={`text-[clamp(2.8rem,6vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] ${
          light ? "text-white" : "text-[#171714]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-2xl text-base leading-7 ${
            light ? "text-white/55" : "text-black/55"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
