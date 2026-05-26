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
      </div>
    </section>
  );
}
