import Image from "next/image";
import { aboutParagraphs } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="container-apple py-[75px]">
      <SectionTitle number="02" title="个人简介" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_0.7fr] md:gap-20">
        <div>
          <div className="space-y-6">
            {aboutParagraphs.map((text) => {
              const parts = text.split(/(浙江大学|同济大学)/);
              return (
                <p key={text} className="text-sm leading-7 text-[#8a8a8a] md:text-base md:leading-8">
                  {parts.map((part, i) =>
                    part === "浙江大学" || part === "同济大学" ? (
                      <strong key={i} className="font-semibold text-[#1a1a1a]">{part}</strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            <Image
              src="/my_photo.png"
              alt="个人照片"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
          <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b0b0b0]">
              <span className="text-[#1a1a1a]">//</span> 目前研究方向
            </p>
            <p className="mt-2 text-sm text-[#1a1a1a]">
              产品服务体系设计 / 体验设计 / 用户研究
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
