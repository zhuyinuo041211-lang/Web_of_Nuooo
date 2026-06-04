import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="container-apple py-16 md:py-24">
      <div className="mb-12 md:mb-16">
        <h2 className="text-section">精选项目</h2>
        <p className="mt-2 text-sm text-apple-gray">点击卡片查看完整项目详情</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}

        {/* More coming */}
        <div className="group block">
          <article>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-dashed border-apple-border/30 bg-white/30 flex items-center justify-center transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/[0.02]">
              <div className="text-center">
                <span className="text-3xl md:text-4xl block mb-3 opacity-30 group-hover:opacity-40 transition-opacity">+</span>
                <p className="text-sm text-apple-gray/50 group-hover:text-apple-gray/70 transition-colors">
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
