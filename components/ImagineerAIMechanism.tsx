"use client";

import { useEffect, useRef, useState } from "react";

const painPoints = [
  { title: "故事推进卡壳", desc: "不知道接下来该怎么编" },
  { title: "语言表达欠缺", desc: "想得到却说不出、写不出" },
  { title: "缺乏价值观引导", desc: "故事缺少正向主题与方向" },
  { title: "情节串联能力差", desc: "想法零散，难以形成完整叙事" },
];

const aiHelps = [
  { text: "AI 逻辑推进" },
  { text: "语言润色" },
  { text: "场景生成" },
  { text: "价值观引导" },
];

export default function ImagineerAIMechanism() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className={`space-y-8 transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* ===== Card 1: AI 辅助故事创作 ===== */}
        <div
          className="border p-6 transition-all duration-300 hover:bg-[#CDE3A1] md:p-7"
          style={{ borderColor: "#CDE3A1", transitionDelay: "100ms" }}
        >
          <h3 className="text-center text-base font-bold text-[#566B1F] md:text-lg">
            AI 辅助故事创作
          </h3>

          {/* 四列 */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {painPoints.map((p, i) => (
              <div key={p.title} className="flex flex-col items-center">
                {/* 痛点 */}
                <div className="flex w-full items-center justify-center border px-2 py-3 text-center min-h-[4.5rem] transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
                  <div>
                    <p className="text-[11px] font-semibold text-[#566B1F] leading-tight">{p.title}</p>
                    <p className="mt-0.5 text-[10px] text-[#8a8a8a] leading-tight">{p.desc}</p>
                  </div>
                </div>
                {/* 连接箭头 */}
                <div className="flex flex-col items-center py-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
                {/* AI 辅助 */}
                <div className="flex w-full items-center justify-center border px-2 py-3 text-center min-h-[3rem]" style={{ borderColor: "#CDE3A1", backgroundColor: "#CDE3A1" }}>
                  <p className="text-[11px] font-medium text-[#566B1F] leading-tight">{aiHelps[i].text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Card 2: 人物库引入 ===== */}
        <div
          className="border p-6 transition-all duration-300 hover:bg-[#CDE3A1] md:p-7"
          style={{ borderColor: "#CDE3A1", transitionDelay: "200ms" }}
        >
          <h3 className="text-center text-base font-bold text-[#566B1F] md:text-lg">
            人物库引入
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#b0b0b0]">
                Before — 传统流程
              </p>
              <div className="mt-3 flex flex-1 items-center justify-center gap-3 border px-4 py-4" style={{ borderColor: "#CDE3A1" }}>
                {["时间", "地点", "人物", "故事"].map((step, i) => (
                  <div key={step} className="flex items-center gap-1">
                    <span className="text-xs text-[#b0b0b0]">{step}</span>
                    {i < 3 && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#b0b0b0]">
                目前的讲故事逻辑大都是从 0 到 1，直接从零开始，确定时间、地点等，然后逐渐完善故事情节，并在故事情节的完善中生成一个个人物。
              </p>
            </div>

            {/* Now */}
            <div className="flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#566B1F]">
                Now — Imagineer 角色驱动
              </p>
              <div className="mt-3 flex flex-1 items-center justify-center gap-3 border px-4 py-4" style={{ borderColor: "#CDE3A1", backgroundColor: "#CDE3A1" }}>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl" >🧑</span>
                  <span className="text-[10px] font-medium text-[#566B1F]">角色1</span>
                </div>
                <span className="text-base text-[#b0b0b0]">+</span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl" >🧒</span>
                  <span className="text-[10px] font-medium text-[#566B1F]">角色2</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl" >📖</span>
                  <span className="text-[10px] font-medium text-[#566B1F]">共创故事</span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#8a8a8a]">
                在 Imagineer 的设计中，我们将人物创建放在第零步，通过让孩子创建不同的人物来激发创造力，并以角色扮演的形式进行故事推进。
              </p>
            </div>
          </div>
        </div>

        {/* ===== Card 3: 独一无二故事集 ===== */}
        <div
          className="border p-6 transition-all duration-300 hover:bg-[#CDE3A1] md:p-7"
          style={{ borderColor: "#CDE3A1", transitionDelay: "300ms" }}
        >
          <h3 className="text-center text-base font-bold text-[#566B1F] md:text-lg">
            独一无二故事集
          </h3>

          {/* 三步流程 */}
          <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:gap-3">
            {/* Step 1 */}
            <div className="flex w-full flex-col items-center md:flex-1">
              <div className="relative aspect-[16/9] w-full overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
                <img src="/imagineer_step1.jpg" alt="与好友 / AI 共同创作" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="mt-4 w-full border p-3 text-center" style={{ borderColor: "#CDE3A1" }}>
                <p className="text-sm font-semibold text-[#566B1F]">与好友 / AI 共同创作</p>
                <p className="mt-1 text-[11px] text-[#8a8a8a]">邀请伙伴或 AI 一起推进故事情节</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="shrink-0 md:self-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex w-full flex-col items-center md:flex-1">
              <div className="relative aspect-[16/9] w-full overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
                <img src="/imagineer_step2.png" alt="存入专属故事库" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="mt-4 w-full border p-3 text-center" style={{ borderColor: "#CDE3A1" }}>
                <p className="text-sm font-semibold text-[#566B1F]">存入专属故事库</p>
                <p className="mt-1 text-[11px] text-[#8a8a8a]">云端自动保存，随时翻阅回顾</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="shrink-0 md:self-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex w-full flex-col items-center md:flex-1">
              <div className="relative aspect-[16/9] w-full overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
                <img src="/imagineer_step3.jpg" alt="累计故事定制实体书" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="mt-4 w-full border p-3 text-center" style={{ borderColor: "#CDE3A1" }}>
                <p className="text-sm font-semibold text-[#566B1F]">累计故事定制实体书</p>
                <p className="mt-1 text-[11px] text-[#8a8a8a]">将创作的故事集结成独一无二的实体书</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
