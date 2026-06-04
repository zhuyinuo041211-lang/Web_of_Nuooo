"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const modules = [
  {
    title: "角色档案",
    subtitle: "CHARACTER PROFILE",
    badge: "人设档案",
    image: "/popbox_web_profile.png",
    items: [
      "宝丽来卡片展示角色头像、性格、世界观与背景故事",
      "「相处提示」板块呈现回复风格与口头禅",
      "支持多角色切换，快速了解每个角色的个性",
    ],
  },
  {
    title: "小纸条留言板",
    subtitle: "NOTE BOARD",
    badge: "便签互动",
    image: "/popbox_web_notes.png",
    items: [
      "软木板上以便签纸形式呈现角色留言往来",
      "支持拖拽、缩放画布，自由布局便签空间",
      "用户出门在外，留言后角色自动生成手写风格回复",
    ],
  },
  {
    title: "照片墙",
    subtitle: "TRAVEL PHOTO WALL",
    badge: "出行记录",
    image: "/popbox_web_travel.png",
    items: [
      "面向喜欢带盲盒出门拍照的用户，上传照片后盲盒角色会记下这次出行",
      "AI 自动为照片生成配文与心情标签，营造「一起出游」的陪伴感",
    ],
  },
  {
    title: "角色日常",
    subtitle: "CHARACTER & CHARACTER",
    badge: "跨 IP 联动",
    image: "/popbox_web_daily.png",
    items: [
      "「今日同游」以杂志叙事风格呈现跨 IP 多角色日常剧情",
      "用户不在时，角色之间自动产生对话与互动",
      "旅行日志记录角色之间的独特经历与友谊",
    ],
  },
];

export default function PopBoxWebUI() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full space-y-8">
      {/* Description */}
      <p
        className="text-xs md:text-sm text-apple-gray leading-relaxed"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        网页端为 PopBox 提供了沉浸式角色管理面板，包含四大核心模块：
      </p>

      {/* Modules */}
      {modules.map((mod, idx) => (
        <div
          key={mod.title}
          className="rounded-2xl border bg-white/70 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-md"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${0.1 + idx * 0.12}s`,
            borderColor: "rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-0">
            {/* Image area */}
            <div className="md:w-2/5 shrink-0 bg-white flex items-center justify-center min-h-[200px] relative">
              {mod.image ? (
                <Image
                  src={mod.image}
                  alt={mod.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              ) : (
                <span className="text-xs text-apple-gray/40">等待配图</span>
              )}
            </div>

            {/* Text content */}
            <div className="flex-1 p-5 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-base font-semibold text-[#1d1d1f]">{mod.title}</h4>
                  <p className="text-[10px] text-apple-gray/60 font-mono tracking-wider mt-0.5">{mod.subtitle}</p>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-apple-gray bg-white/70 rounded-full px-2.5 py-0.5 border border-apple-border/20">
                  {mod.badge}
                </span>
              </div>
              <div className="space-y-2.5 mt-4">
                {mod.items.map((item) => (
                  <p
                    key={item}
                    className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom note */}
      <p
        className="text-center text-[11px] text-apple-gray/40 tracking-wider"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}
      >
        网页端与硬件共享同一后端，保证双端体验一致
      </p>
    </div>
  );
}
