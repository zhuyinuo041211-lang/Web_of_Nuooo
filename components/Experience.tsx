import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section className="container-apple py-16 md:py-24">
      <div className="mx-auto max-w-[640px]">
        <h2 className="text-section">经历</h2>
        <div className="mt-10 space-y-8">
          {experiences.map((item, index) => (
            <article
              key={item.year + item.title}
              className="group rounded-2xl glass px-6 py-6 shadow-card transition-all duration-300 hover:shadow-card-hover md:px-8 md:py-7"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-base font-semibold text-[#1d1d1f]">{item.title}</h3>
                <span className="inline-block rounded-full bg-apple-light px-3 py-0.5 text-[11px] font-medium text-apple-gray">
                  {item.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-apple-gray">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
