import { skills } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="py-[75px]">
      <div className="container-apple">
        <SectionTitle number="04" title="能力图谱" />
        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4 border-t border-l" style={{ borderColor: "var(--border)" }}>
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white p-6 md:p-8 border-r border-b transition-all duration-300 hover:bg-[#f5f5f5]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="w-8 h-px bg-[#1a1a1a] mb-5" />
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">
                {skill.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#8a8a8a]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
