import { experiences } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section className="py-[75px]">
      <div className="container-apple">
        <SectionTitle number="04" title="经历" />
        <div className="mx-auto max-w-[640px]">
          {experiences.map((item) => (
            <div
              key={item.year + item.title}
              className="py-6 md:py-7 border-t last:border-b px-0 transition-all duration-300 hover:bg-white -mx-6 md:-mx-10 px-6 md:px-10"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-sm font-semibold text-[#1a1a1a]">{item.title}</h3>
                <span className="text-[11px] font-mono tracking-wider text-[#b0b0b0]">
                  {item.year}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
