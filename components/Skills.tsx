import { skills } from "@/data/content";

function SkillIcon({ type }: { type: string }) {
  const common = "h-5 w-5 text-[#1d1d1f]";

  if (type === "PM") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.6">
        <path d="M12 4v16" />
        <path d="M7 9l5-5 5 5" />
        <path d="M8.5 20h7" />
      </svg>
    );
  }

  if (type === "UX") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="6" width="16" height="12" rx="1.5" />
        <path d="M10 6v12" />
        <path d="M13 10h4" />
        <path d="M13 14h3" />
      </svg>
    );
  }

  if (type === "DA") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19h16" />
        <path d="M7 15l3-3 3 2 4-5" />
        <path d="M7 19v-4" />
        <path d="M12 19v-7" />
        <path d="M17 19v-10" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="7" width="12" height="10" rx="2" />
      <path d="M9 7V5h6v2" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-apple">
        <h2 className="text-section">能力图谱</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl glass px-6 py-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 shadow-sm">
                <SkillIcon type={skill.icon} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-[#1d1d1f]">
                {skill.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-apple-gray">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
