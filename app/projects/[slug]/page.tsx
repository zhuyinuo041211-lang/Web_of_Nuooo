import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type ProjectSection } from "@/data/content";
import HighlightText from "@/components/HighlightText";
import ResearchSection from "@/components/ResearchSection";
import ConceptSection from "@/components/ConceptSection";
import BlueprintSection from "@/components/BlueprintSection";
import JourneySection from "@/components/JourneySection";
import TechRoadmap from "@/components/TechRoadmap";
import SideNav from "@/components/SideNav";
import ImagineerBackground from "@/components/ImagineerBackground";
import ImagineerPersonas from "@/components/ImagineerPersonas";
import ImagineerAIMechanism from "@/components/ImagineerAIMechanism";
import ImagineerArchitecture from "@/components/ImagineerArchitecture";
import ImagineerJourney from "@/components/ImagineerJourney";
import ImagineerDesignSpec from "@/components/ImagineerDesignSpec";
import ImagineerBrandExtension from "@/components/ImagineerBrandExtension";
import PopBoxFeatureOverview from "@/components/PopBoxFeatureOverview";

function sectionId(title: string) {
  return title.replace(/\s+/g, "-");
}

type NavItem = { id: string; label: string };

function buildNav(sections: ProjectSection[]): NavItem[] {
  const nav: NavItem[] = [
    { id: "project-overview", label: "项目概述" },
    { id: "design-background", label: "设计背景" },
  ];
  sections.forEach((s) => {
    nav.push({ id: sectionId(s.title), label: s.title });
  });
  return nav;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const navItems = buildNav(project.sections);

  const renderSection = (section: ProjectSection) => {
    if (section.personas) {
      return (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {section.personas.map((persona) => (
            <div
              key={persona.name}
              className="rounded-2xl border border-apple-border/20 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-2xl">
                  {persona.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">{persona.name}</h3>
                  <span className="text-sm text-apple-gray">{persona.age}</span>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {persona.traits.map((trait) => (
                  <div key={trait.label} className="flex items-baseline gap-2">
                    <span className="shrink-0 rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                      {trait.label}
                    </span>
                    <span className="text-sm leading-relaxed text-apple-gray">{trait.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (section.variant === "research") return <ResearchSection />;
    if (section.variant === "concept") return <ConceptSection />;
    if (section.variant === "blueprint") return <BlueprintSection />;
    if (section.variant === "journey") return <JourneySection />;
    if (section.variant === "tech") return <TechRoadmap />;
    if (section.variant === "personas") return <ImagineerPersonas />;
    if (section.variant === "ai-mechanism") return <ImagineerAIMechanism />;
    if (section.variant === "architecture") return <ImagineerArchitecture />;
    if (section.variant === "imagineer-journey") return <ImagineerJourney />;
    if (section.variant === "design-spec") return <ImagineerDesignSpec />;
    if (section.variant === "brand-extension") return <ImagineerBrandExtension />;
    if (section.variant === "popbox-feature-overview") return <PopBoxFeatureOverview />;
    return (
      <ul className="mt-5 space-y-4">
        {section.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-apple-gray md:text-base md:leading-7"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-apple-border/40 glass">
        <div className="container-apple flex h-12 items-center justify-between md:h-14">
          <Link href="/" className="text-sm font-semibold tracking-tight text-[#1d1d1f]">
            朱一诺
          </Link>
          <Link
            href="/#projects"
            className="text-xs text-apple-gray transition-colors hover:text-[#1d1d1f]"
          >
            ← 返回
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="container-apple pt-16 pb-8 md:pt-20 md:pb-12">
          <span className="inline-block rounded-full glass px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
            {project.category}
          </span>
          <h1 className="mt-6 text-hero md:text-hero-md max-w-3xl text-[#1d1d1f]">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-apple-gray md:text-lg">
            {project.description}
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-apple pb-12 md:pb-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-apple-border/20 shadow-card">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </section>

        {/* Content with side nav */}
        <div className="container-apple pb-16 md:pb-24">
          <div className="lg:flex lg:gap-10">
            <SideNav items={navItems} />

            <div className="min-w-0 flex-1 max-w-[720px]">
              {/* 项目概述 */}
              <section id="project-overview" className="pb-12 md:pb-16 scroll-mt-20">
                <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">项目概述</h2>
                <HighlightText className="mt-4 text-base leading-8 text-apple-gray" text={project.details} />
              </section>

              {/* 设计背景 */}
              <section id="design-background" className="pb-12 md:pb-16 scroll-mt-20">
                {slug === "imagineer" ? (
                  <>
                    <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">设计背景</h2>
                    <div className="mt-4">
                      <ImagineerBackground />
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">设计背景</h2>
                    <HighlightText className="mt-4 text-base leading-8 text-apple-gray" text={project.background} />
                  </>
                )}
              </section>

              {/* 设计细节 */}
              {project.sections.map((section) => {
                const isFeatOverview = section.variant === "popbox-feature-overview";
                return (
                  <div key={section.title}>
                    {isFeatOverview ? (
                      <section id={sectionId(section.title)} className="scroll-mt-20">
                        <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                          {section.title}
                        </h2>
                        <div className="mt-5">{renderSection(section)}</div>
                      </section>
                    ) : (
                      <section id={sectionId(section.title)} className="pb-12 md:pb-16 scroll-mt-20">
                        <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                          {section.title}
                        </h2>
                        <div className="mt-5">{renderSection(section)}</div>
                        {section.images && !section.personas
                          ? section.images.map((src, i) => (
                              <div key={i} className="relative mt-8 w-full max-w-2xl mx-auto">
                                <Image
                                  src={src}
                                  alt={`${section.title} ${i + 1}`}
                                  width={1600}
                                  height={1200}
                                  className="w-full h-auto rounded-2xl"
                                  sizes="100vw"
                                  unoptimized
                                />
                              </div>
                            ))
                          : section.image && !section.personas && (
                              <div className="relative mt-8 w-full max-w-2xl mx-auto">
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  width={1600}
                                  height={1200}
                                  className="w-full h-auto rounded-2xl"
                                  sizes="100vw"
                                  unoptimized
                                />
                              </div>
                            )}
                        {section.childImages && (
                          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {section.childImages.map((src, i) => (
                              <img
                                key={src}
                                src={src}
                                alt={`${section.title} 子页面 ${i + 1}`}
                                className="w-full rounded-2xl"
                              />
                            ))}
                          </div>
                        )}
                      </section>
                    )}
                  </div>
                );
              })}

              {/* 标签 */}
              <section className="pb-12 md:pb-16">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.08em] text-apple-gray shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>


      {slug === "caixiaomiao" && (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden -mt-8">
          <div className="absolute inset-0 bg-pink-100/60 z-10" />
          <img
            src="/caixiaomiao_Product_and_child.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {slug === "imagineer" && (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden -mt-8">
          <div className="absolute inset-0 bg-lime-100/60 z-10" />
          <img
            src="/merch_storybook.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <footer className="border-t border-apple-border/20 glass">
        <div className="container-apple py-10">
          <Link
            href="/#projects"
            className="text-sm font-medium text-accent transition-all hover:text-accent-hover"
          >
            ← 返回全部项目
          </Link>
        </div>
      </footer>
    </>
  );
}
