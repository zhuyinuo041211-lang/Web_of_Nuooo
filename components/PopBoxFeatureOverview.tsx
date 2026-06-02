"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HighlightText from "./HighlightText";

const features = [
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
        <path d="M20 4v8M14 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 28v8M14 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    label: "角色赋生",
    desc: "根据人设，为每个潮玩生成专属人格、背景故事与性格特征。",
    angle: -90,
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
        <path d="M12 28c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 30h8l4-8 4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    ),
    label: "情绪陪伴",
    desc: "角色能够理解用户情绪，并主动表达关心与陪伴。",
    angle: -18,
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
        <rect x="6" y="4" width="28" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14l5 5 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M14 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      </svg>
    ),
    label: "长期记忆",
    desc: "记录与用户共同经历的故事，形成独特关系。",
    angle: 54,
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
        <circle cx="14" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="26" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M10 30c2-4 6-6 10-6s8 2 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M18 16l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
    label: "角色共生",
    desc: "多个角色可自主交流、建立关系并产生互动剧情。",
    angle: 126,
  },
  {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 18h28" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <circle cx="14" cy="13" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="26" cy="13" r="1.5" fill="currentColor" opacity="0.5" />
        <path d="M12 28a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="22" r="2" fill="currentColor" opacity="0.2" />
      </svg>
    ),
    label: "生命舱展示",
    desc: "兼具收藏展示、灯光氛围与潮玩收纳功能。",
    angle: 198,
  },
];

const featureDetails: { label: string; items: string[]; image?: string }[] = [
  {
    label: "角色赋生",
    image: "/popbox_detail_character.png",
    items: [
      "通过{{拍照识别}}，Qwen VL 视觉模型自动扫描盲盒角色，生成完整人设 JSON；随后{{联网搜索}}补全角色背景资料与粉丝共识，建立从角色名、性格、世界观到背景故事、口头禅和回复风格等维度的完整{{「角色人设模板」}}。整个过程无需手动编写，插电即用。",
    ],
  },
  {
    label: "情绪陪伴",
    items: [
      "基于 Qwen 语言模型，角色能理解用户情感与意图，依据人设做出符合性格的回应",
      "语音对话全流程：按住录音 → PCM 音频 → Google STT 转文字 → Qwen 生成回复",
      "多轮上下文管理：后端实时拼接对话历史，让角色「记得」之前聊了什么",
      "待机时主动「刷存在感」——屏幕表情变化和文字提示，传达陪伴感",
    ],
  },
  {
    label: "长期记忆",
    items: [
      "对话历史 JSON 持久化存储，按角色归档，重启后自动恢复上下文",
      "每日归档独立文件（history_<charId>_<YYYY-MM-DD>.json），支持按时间回溯",
      "上下文构建策略：当天完整对话 + 历史 Top-K 相关片段（TF-IDF 粗筛 + BM25 精排）",
      "角色在对话中引用过去细节，让用户感受到「被记住」的真实陪伴感",
    ],
  },
  {
    label: "角色共生",
    items: [
      "支持最多 3 个角色同时「入住」，每个角色独立人设与记忆空间",
      "角色选择页：3 个角色卡片排成一行，轻触切换当前活跃角色",
      "多角色关系网络（规划中）：角色之间可互动剧情，形成独特角色生态",
      "旅行日志（规划中）+ IMU 体感互动（摇一摇换角色、轻拍触发摸头反应）",
    ],
  },
  {
    label: "生命舱展示",
    items: [
      "PopBox 硬件基于 M5Stack CoreS3，320×240 触摸屏 + 麦克风 + 前置相机",
      "欢迎页全屏展示角色头像与名字，双击唤醒对话，待机时如精致桌面摆件",
      "拍照识别流程：点击「识别角色」→ 拍照 → Qwen VL 识别 → 角色「入住」",
      "兼具潮玩收纳与智能展示——既是 AI 交互终端，也是桌面上的角色展示柜",
    ],
  },
];

export default function PopBoxFeatureOverview() {
  const [visible, setVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <style>{`
        @keyframes popCenterFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes popRipple {
          0% { transform: scale(0.7); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>

      {/* 角色生命循环 标题 */}
      <div
        className="text-center mb-8 md:mb-10"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease",
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <p className="text-xs text-accent/60 font-medium uppercase tracking-[0.15em] mb-2">
          角色生命循环
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">
          五大核心能力
        </h3>
      </div>

      {/* Orbit container */}
      <div
        className="relative mx-auto"
        style={{ maxWidth: 520, aspectRatio: "1/1" }}
      >
        {/* Center glow bg */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle, rgba(255,59,48,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Orbit ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
          style={{ width: "88%", height: "88%" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/5"
          style={{ width: "70%", height: "70%" }}
        />

        {/* Center product */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ width: "22%", aspectRatio: "1/1" }}
        >
          <div
            className="relative w-full h-full"
            style={{
              animation: visible ? "popCenterFloat 4s ease-in-out infinite" : "none",
            }}
          >
          <div
            className="absolute inset-0 rounded-full border border-accent/15"
            style={{ animation: visible ? "popRipple 3s ease-out infinite" : "none" }}
          />
          <div
            className="absolute inset-0 rounded-full border border-accent/10"
            style={{ animation: visible ? "popRipple 3s ease-out 1s infinite" : "none" }}
          />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
            <Image
              src="/popbox_feature_center.png"
              alt="Pop Box"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        </div>
      </div>

        {/* Feature modules on orbit */}
        {features.map((f, i) => {
          const radius = 42;
          const rad = (f.angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);

          return (
            <div
              key={f.label}
              className="absolute z-20"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: "clamp(100px, 22vw, 160px)",
                transform: visible
                  ? "translate(-50%, -50%) scale(1)"
                  : "translate(-50%, -50%) scale(0.5)",
                opacity: visible ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + i * 0.08}s`,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className="rounded-xl p-3 md:p-4 text-center transition-all duration-300"
                style={{
                  background: hoveredIdx === i ? "white" : "rgba(255,255,255,0.7)",
                  border: `1px solid ${
                    hoveredIdx === i ? "rgba(255,59,48,0.2)" : "rgba(0,0,0,0.06)"
                  }`,
                  boxShadow:
                    hoveredIdx === i
                      ? "0 8px 24px rgba(255,59,48,0.1)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: hoveredIdx === i ? "translateY(-2px)" : "none",
                }}
              >
                <div
                  className="w-6 h-6 md:w-7 md:h-7 mx-auto mb-1.5 transition-colors duration-300"
                  style={{ color: hoveredIdx === i ? "#FF3B30" : "rgba(0,0,0,0.35)" }}
                >
                  {f.svg}
                </div>
                <h4 className="text-[11px] md:text-xs font-semibold text-[#1d1d1f] mb-0.5">
                  {f.label}
                </h4>
                <p className="text-[9px] md:text-[10px] leading-relaxed text-apple-gray">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded feature details */}
      <div className="mt-10 md:mt-12 space-y-6">
        {featureDetails.map((detail, idx) => (
          <div
            key={detail.label}
            className="rounded-xl border border-accent/10 bg-white/60 p-5 md:p-6 transition-all duration-300 hover:shadow-sm"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.5s ease ${0.2 + idx * 0.1}s, transform 0.5s ease ${0.2 + idx * 0.1}s`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-6 h-6 md:w-7 md:h-7"
                style={{ color: "rgba(255,59,48,0.7)" }}
              >
                {features[idx].svg}
              </div>
              <h4 className="text-sm md:text-base font-semibold text-[#1d1d1f]">
                {detail.label}
              </h4>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
              {detail.items.length === 1 ? (
                <div className="flex-1" style={{ lineHeight: 2 }}>
                  <HighlightText className="text-xs md:text-sm text-apple-gray" text={detail.items[0]} />
                </div>
              ) : (
                <ul className="space-y-2 flex-1">
                  {detail.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs md:text-sm leading-relaxed text-apple-gray"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {detail.image && (
                <div className="shrink-0 w-full md:w-72 relative rounded-lg overflow-hidden border border-accent/10">
                  <img
                    src={detail.image}
                    alt={detail.label}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div
        className="text-center mt-10 md:mt-12"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.4s",
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <p className="text-sm md:text-base text-apple-gray font-light leading-relaxed italic">
          &ldquo;让喜欢的角色，不再只是收藏品，而成为真正陪伴你的存在。&rdquo;
        </p>
      </div>
    </div>
  );
}
