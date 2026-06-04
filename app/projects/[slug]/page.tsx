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
import PopBoxArchitecture from "@/components/PopBoxArchitecture";
import PopBoxWebUI from "@/components/PopBoxWebUI";
import PopBoxBusiness from "@/components/PopBoxBusiness";

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
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {section.personas.map((persona) => (
            <div
              key={persona.name}
              className="border p-6 transition-all duration-300 hover:bg-[#f9f9f9]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center text-lg">
                  {persona.emoji}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#1a1a1a]">{persona.name}</h3>
                  <span className="text-sm text-[#8a8a8a]">{persona.age}</span>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {persona.traits.map((trait) => (
                  <div key={trait.label} className="flex items-baseline gap-2">
                    <span className="shrink-0 px-2 py-0.5 text-[11px] font-medium text-[#8a8a8a] border" style={{ borderColor: "var(--border)" }}>
                      {trait.label}
                    </span>
                    <span className="text-sm leading-relaxed text-[#8a8a8a]">{trait.value}</span>
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
    if (section.variant === "popbox-architecture") return <PopBoxArchitecture />;
      if (section.variant === "popbox-web-ui") return <PopBoxWebUI />;
      if (section.variant === "popbox-business") return <PopBoxBusiness />;
      if (section.items.length === 0) return null;
      if (section.items.length === 1) {
        return (
          <div className="mt-5 max-w-lg mx-auto text-center">
            <p className="text-sm leading-7 text-[#8a8a8a] md:text-base md:leading-8">
              {section.items[0]}
            </p>
          </div>
        );
      }
    return (
      <ul className="mt-5 space-y-4">
        {section.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-[#8a8a8a] md:text-base md:leading-7"
          >
            <span className="mt-2 h-px w-3 shrink-0 bg-[#d4d4d4]" />
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white" style={{ borderColor: "var(--border)" }}>
        <div className="container-apple flex h-14 items-center justify-between md:h-16">
          <Link href="/" className="text-sm font-semibold tracking-tight text-[#1a1a1a] transition-colors hover:text-[#8a8a8a]">
            返回
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="container-apple pt-20 pb-10 md:pt-28 md:pb-14">
          <div className="thick-rule mb-10" />
          <p className="text-xs tracking-[0.25em] uppercase text-[#8a8a8a] mb-6">
            <span className="text-[#1a1a1a] font-semibold">//</span> {project.category}
          </p>
          <h1 className="text-hero md:text-hero-md max-w-3xl text-[#1a1a1a]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#8a8a8a] md:text-lg">
            {project.description}
          </p>
        </section>

        {/* Cover Image */}
        <section className="container-apple pb-14 md:pb-20">
          <div className="relative aspect-[16/10] w-full overflow-hidden border" style={{ borderColor: "var(--border)" }}>
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
        <div className="container-apple pb-20 md:pb-28">
          <div className="lg:flex lg:gap-14">
            <SideNav items={navItems} />

            <div className="min-w-0 flex-1 max-w-[720px]">
              {/* 项目概述 */}
              <section id="project-overview" className="pb-14 md:pb-20 scroll-mt-20">
                <h2 className="text-sm font-semibold tracking-tight text-[#1a1a1a]">项目概述</h2>
                <div className="thick-rule mt-4" />
                <HighlightText className="mt-5 text-base leading-8 text-[#8a8a8a]" text={project.details} />
              </section>

              {/* 设计背景 */}
              <section id="design-background" className="pb-14 md:pb-20 scroll-mt-20">
                {slug === "imagineer" ? (
                  <>
                    <h2 className="text-sm font-semibold tracking-tight text-[#1a1a1a]">设计背景</h2>
                    <div className="thick-rule mt-4" />
                    <div className="mt-5">
                      <ImagineerBackground />
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-sm font-semibold tracking-tight text-[#1a1a1a]">设计背景</h2>
                    <div className="thick-rule mt-4" />
                    <HighlightText className="mt-5 text-base leading-8 text-[#8a8a8a]" text={project.background} />
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
                        <h2 className="text-sm font-semibold tracking-tight text-[#1a1a1a]">
                          {section.title}
                        </h2>
                        <div className="thick-rule mt-4" />
                        <div className="mt-6">{renderSection(section)}</div>
                      </section>
                    ) : (
                      <section id={sectionId(section.title)} className="pb-14 md:pb-20 scroll-mt-20">
                        <h2 className="text-sm font-semibold tracking-tight text-[#1a1a1a]">
                          {section.title}
                        </h2>
                        <div className="thick-rule mt-4" />
                        <div className="mt-6">{renderSection(section)}</div>
                        {section.images && !section.personas
                          ? section.images.map((src, i) => (
                              <div key={i} className="relative mt-10 w-full max-w-2xl mx-auto">
                                <Image
                                  src={src}
                                  alt={`${section.title} ${i + 1}`}
                                  width={1600}
                                  height={1200}
                                  className="w-full h-auto"
                                  sizes="100vw"
                                  unoptimized
                                />
                              </div>
                            ))
                          : section.image && !section.personas && (
                              <div className="relative mt-10 w-full max-w-2xl mx-auto">
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  width={1600}
                                  height={1200}
                                  className="w-full h-auto"
                                  sizes="100vw"
                                  unoptimized
                                />
                              </div>
                            )}
                        {section.childImages && (
                          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 bg-white">
                            {section.childImages.map((src, i) => (
                              <img
                                key={src}
                                src={src}
                                alt={`${section.title} 子页面 ${i + 1}`}
                                className="w-full"
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
              <section className="pb-14 md:pb-20">
                <div className="thick-rule mb-6" />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] border text-[#8a8a8a] hover:bg-[#f5f5f5] transition-colors"
                      style={{ borderColor: "var(--border)" }}
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
          <img
            src="/caixiaomiao_Product_and_child.png"
            alt=""
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      {slug === "imagineer" && (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden -mt-8">
          <img
            src="/merch_storybook.jpg"
            alt=""
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <footer className="border-t-2" style={{ borderColor: "var(--border)" }}>
        <div className="container-apple py-10">
          <Link
            href="/#projects"
            className="group text-sm font-medium text-[#8a8a8a] transition-all hover:text-[#1a1a1a] inline-flex items-center gap-2"
          >
            <span className="w-6 h-px bg-[#8a8a8a] transition-all duration-300 group-hover:w-8 group-hover:bg-[#1a1a1a]" />
            返回全部项目
          </Link>
        </div>
      </footer>
    </>
  );
}
