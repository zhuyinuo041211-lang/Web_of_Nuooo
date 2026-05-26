import Image from "next/image";
import { aboutParagraphs } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="container-apple py-16 md:py-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.9fr] md:gap-16">
        <div className="space-y-6">
          <h2 className="text-section">个人简介</h2>
          <div className="space-y-5 rounded-2xl glass p-7 text-sm leading-7 text-apple-gray shadow-card md:p-8 md:text-base md:leading-8">
            {aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-apple-border/30 shadow-card">
            <Image
              src="/my_photo.png"
              alt="个人照片"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
          <div className="absolute -bottom-3 -left-3 right-3 rounded-xl glass px-5 py-4 shadow-card backdrop-blur-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
              目前研究方向
            </p>
            <p className="mt-1 text-sm font-medium text-[#1d1d1f]">
              产品服务体系设计 / 体验设计 / 用户研究
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
