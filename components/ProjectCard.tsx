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
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-apple-border/30 bg-apple-light shadow-card transition-all duration-500 group-hover:shadow-card-hover">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="mt-5 px-1">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-accent">
              {project.category}
            </span>
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-[0.08em] text-apple-gray"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#1d1d1f] transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-apple-gray">
            {project.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
