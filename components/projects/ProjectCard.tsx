import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

export default function ProjectCard({
  project,
  large = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden bg-[#1a1916] ${
        large ? "min-h-[620px] md:min-h-[760px]" : "min-h-[460px]"
      }`}
    >
      <Image
        src={project.image}
        alt={`${project.title} - ${project.category} construction project`}
        fill
        sizes={
          large
            ? "(max-width: 768px) 100vw, 65vw"
            : "(max-width: 768px) 100vw, 35vw"
        }
        className="object-cover transition duration-1000 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
        <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d1b58b]">
          <span>{project.category}</span>

          <span className="h-px w-8 bg-[#d1b58b]/50" />

          <span className="flex items-center gap-1.5 text-white/60">
            <MapPin size={12} />
            {project.location}
          </span>
        </div>

        <div className="flex items-end justify-between gap-5">
          <div>
            <h3
              className={`font-black uppercase leading-[0.9] tracking-[-0.055em] text-white ${
                large
                  ? "text-[clamp(2.5rem,5vw,5rem)]"
                  : "text-[clamp(2rem,3vw,3.2rem)]"
              }`}
            >
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
              {project.description}
            </p>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition duration-500 group-hover:border-[#d1b58b] group-hover:bg-[#d1b58b] group-hover:text-[#11110f]">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </Link>
  );
}
