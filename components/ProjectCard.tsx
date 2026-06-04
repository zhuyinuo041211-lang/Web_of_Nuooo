import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/content";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article>
        <div className="relative aspect-[4/3] w-full overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a8a]">
              {project.category}
            </span>
            <span className="w-px h-3 bg-[#d4d4d4]" />
            <div className="flex gap-3">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.15em] text-[#b0b0b0]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-[#1a1a1a] transition-all duration-300 group-hover:opacity-60">
            {project.name}
          </h3>
          <div className="mt-3 w-6 h-px bg-[#d4d4d4] transition-all duration-300 group-hover:w-10 group-hover:bg-[#1a1a1a]" />
          <p className="mt-3 text-sm leading-relaxed text-[#8a8a8a]">
            {project.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
