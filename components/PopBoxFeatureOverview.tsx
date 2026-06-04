"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HighlightText from "./HighlightText";

const features = [
  {
    label: "角色赋生",
    desc: "根据人设，为每个潮玩生成专属人格、背景故事与性格特征。",
    angle: -90,
  },
  {
    label: "情绪陪伴",
    desc: "角色能够理解用户情绪，并主动表达关心与陪伴。",
    angle: -18,
  },
  {
    label: "长期记忆",
    desc: "记录与用户共同经历的故事，形成独特关系。",
    angle: 54,
  },
  {
    label: "角色共生",
    desc: "多个角色可自主交流、建立关系并产生互动剧情。",
    angle: 126,
  },
  {
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
    image: "/popbox_emotion.png",
    items: [
      "角色能{{理解你的情绪}}——开心时陪你欢呼，低落时默默倾听。每一次对话都会成为角色与你之间的{{共同记忆}}，下次再聊时，它会记得你提过的喜好、分享过的小事。按住说话就能和它自然交流，像朋友一样聊天。即使在待机时，角色也会通过屏幕表情和文字提示主动「刷存在感」——不是冷冰冰的工具，而是桌面上的一个小伙伴，陪伴感随时间越来越深。",
    ],
  },
  {
    label: "角色共生",
    image: "/popbox_symbiosis.png",
    items: [
      "PopBox 支持最多 {{3 个角色同时「入住」}}，每个角色都有{{独立的性格和记忆空间}}。角色选择页上，三个角色卡片排成一行，轻触即可切换当前对话的角色。未来角色之间还能互动聊天，形成属于它们自己的小生态；旅行日志会记录每个角色与你的独特经历，轻拍或摇一摇等体感互动也在规划中——让每个角色都像是{{住在同一个屋檐下的室友}}，各有个性，又彼此陪伴。",
    ],
  },
  {
    label: "生命舱展示",
    image: "/popbox_capsule.png",
    items: [
      "PopBox 既是 {{AI 交互终端}}，也是桌面上的精致展示柜。开机后全屏展示角色头像与名字，双击唤醒即可对话，待机时静置如优雅的桌面摆件，为你的桌面增添一份{{治愈氛围}}。点击「拍照识别」即可让新角色「入住」，无需任何配置——插电即用，让你的潮玩在桌面上拥有一个{{属于自己的小家园}}。",
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
      {/* 角色生命循环 标题 */}
      <div
        className="text-center mb-12 md:mb-16"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <p className="text-[10px] text-[#b0b0b0] font-medium uppercase tracking-[0.15em] mb-3">
          角色生命循环
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a]">
          五大核心能力
        </h3>
      </div>

      {/* Orbit container */}
      <div
        className="relative mx-auto"
        style={{ maxWidth: 480, aspectRatio: "1/1" }}
      >
        {/* Orbit rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ width: "88%", height: "88%", borderColor: "rgba(0,0,0,0.08)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ width: "70%", height: "70%", borderColor: "rgba(0,0,0,0.04)" }}
        />

        {/* Center product */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ width: "20%", aspectRatio: "1/1" }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            <Image
              src="/popbox_feature_center.png"
              alt="Pop Box"
              fill
              className="object-cover"
              sizes="120px"
            />
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
                width: "clamp(110px, 24vw, 170px)",
                transform: visible
                  ? "translate(-50%, -50%)"
                  : "translate(-50%, -50%) scale(0.5)",
                opacity: visible ? 1 : 0,
                transition: `all 0.5s ease ${0.1 + i * 0.08}s`,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className="p-3 md:p-4 text-center transition-all duration-300 border"
                style={{
                  background: hoveredIdx === i ? "#f5f5f5" : "#ffffff",
                  borderColor: "var(--border)",
                }}
              >
                <p className="text-xs md:text-sm font-semibold text-[#1a1a1a] mb-1">
                  {f.label}
                </p>
                <p className="text-[10px] md:text-xs leading-relaxed text-[#8a8a8a]">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded feature details */}
      <div className="mt-10 md:mt-14 space-y-6">
        {featureDetails.map((detail, idx) => (
          <div
            key={detail.label}
            className="border p-5 md:p-6 transition-all duration-300 hover:bg-[#f9f9f9]"
            style={{
              borderColor: "var(--border)",
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${0.2 + idx * 0.1}s, background 0.3s ease`,
            }}
          >
            <h4 className="text-sm md:text-base font-semibold text-[#1a1a1a] mb-4">
              {detail.label}
            </h4>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
              {detail.items.length === 1 ? (
                <div className="flex-1">
                  <HighlightText className="text-xs md:text-sm !leading-[2.1] text-[#8a8a8a]" text={detail.items[0]} />
                </div>
              ) : (
                <ul className="space-y-2 flex-1">
                  {detail.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs md:text-sm leading-relaxed text-[#8a8a8a]"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-[#d4d4d4]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {detail.image && (
                <div className="shrink-0 w-full md:w-64 relative">
                  <img
                    src={detail.image}
                    alt={detail.label}
                    className="w-full h-auto border"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div
        className="text-center mt-10 md:mt-14 mb-8 md:mb-16"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.4s",
        }}
      >
        <p className="text-sm md:text-base text-[#8a8a8a] leading-relaxed">
          &ldquo;让喜欢的角色，不再只是收藏品，而成为真正陪伴你的存在。&rdquo;
        </p>
      </div>
    </div>
  );
}
