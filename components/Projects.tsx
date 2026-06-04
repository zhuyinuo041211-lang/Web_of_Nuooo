import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="container-apple py-[75px]">
      <SectionTitle number="01" title="精选项目" />

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}

        {/* More coming — editorial placeholder */}
        <div className="group block">
          <article>
            <div className="relative aspect-[4/3] w-full border-2 border-dashed flex items-center justify-center transition-all duration-500 group-hover:bg-[#f5f5f5]" style={{ borderColor: "var(--border)" }}>
              <div className="text-center px-8">
                <span className="text-4xl font-bold text-[#e5e5e5]">+</span>
                <p className="mt-2 text-sm text-[#b0b0b0]">
                  更多项目正在添加中
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
