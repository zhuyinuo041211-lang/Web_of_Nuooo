"use client";

import { useEffect, useRef, useState } from "react";

// ── Data ──

const colors = [
  { name: "主色 · 浅", hex: "#C6E3A1", usage: "品牌主色调，大面积底色、背景" },
  { name: "主色 · 深", hex: "#566B1F", usage: "品牌主色调，重要文字、标题" },
  { name: "辅助色 · 蓝", hex: "#9FCCEF", usage: "信息提示、链接、图标点缀" },
  { name: "辅助色 · 绿", hex: "#91C88F", usage: "成功状态、正向反馈" },
  { name: "辅助色 · 橙", hex: "#FDC76A", usage: "高亮强调、儿童友好提示" },
];

const fontLevels = [
  { size: "32px", weight: "Bold", usage: "大标题", preview: "梦想故事书" },
  { size: "24px", weight: "Bold", usage: "模块标题", preview: "我的创作世界" },
  { size: "18px", weight: "Medium", usage: "按钮文字", preview: "开始创作" },
  { size: "16px", weight: "Regular", usage: "正文", preview: "和你的小伙伴一起创造属于你们的故事" },
  { size: "12px", weight: "Regular", usage: "提示文字", preview: "点击这里开始你的冒险" },
];

const logoVariants = [
  { label: "标准版", desc: "绿底黄字，书本+眼睛", img: "/logo_basic.png" },
  { label: "颜色变化", desc: "", img: "/logo_color.png" },
  { label: "表情变化", desc: "", img: "/logo_expression.png" },
];

// ── Component ──

export default function ImagineerDesignSpec() {
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
    <div ref={ref} className="space-y-6 md:space-y-8">
      {/* ── Row 1: 色彩系统 (全宽) ── */}
      <div
        className="rounded-2xl border border-amber-200/50 bg-white/40 p-6 md:p-7 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "100ms",
        }}
      >
        <h3 className="text-base font-bold text-amber-800 md:text-lg">色彩系统</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {colors.map((c) => (
            <div key={c.hex} className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div
                className="h-20 w-full transition-all duration-200 group-hover:h-24"
                style={{ backgroundColor: c.hex }}
              />
              <div className="px-3 py-2.5">
                <p className="text-xs font-semibold text-[#1d1d1f]">{c.name}</p>
                <p className="text-[10px] text-apple-gray font-mono">{c.hex}</p>
                <p className="mt-1 text-[9px] leading-tight text-apple-gray">{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: 字体层级 + Logo 并排 ── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {/* 字体层级 — 占 3 列 */}
        <div
          className="md:col-span-3 rounded-2xl border border-amber-200/50 bg-white/40 p-6 md:p-7 transition-all duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "200ms",
          }}
        >
          <h3 className="text-base font-bold text-amber-800 md:text-lg">字体层级</h3>
          <p className="mt-1 text-xs text-apple-gray">阿里巴巴普惠体（Alibaba PuHuiTi）</p>
          <div className="mt-5 space-y-3">
            {fontLevels.map((f) => (
              <div
                key={f.size}
                className="flex items-center justify-between rounded-xl border border-amber-100/60 bg-white/60 px-4 py-3 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                <span
                  className="text-[#1d1d1f] leading-tight"
                  style={{
                    fontFamily: "'Alibaba PuHuiTi', 'PingFang SC', 'Noto Sans SC', sans-serif",
                    fontSize: f.size,
                    fontWeight: f.weight === "Bold" ? 700 : f.weight === "Medium" ? 500 : 400,
                  }}
                >
                  {f.preview}
                </span>
                <div className="flex shrink-0 items-center gap-2 text-xs text-apple-gray">
                  <span className="font-mono">{f.size}</span>
                  <span className="rounded bg-amber-100/60 px-2 py-0.5 text-[10px] font-medium text-amber-800">
                    {f.weight}
                  </span>
                  <span className="text-[10px] hidden sm:inline">{f.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo 展示 — 占 2 列 */}
        <div
          className="md:col-span-2 rounded-2xl border border-amber-200/50 bg-white/40 p-6 md:p-7 transition-all duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "300ms",
          }}
        >
          <h3 className="text-base font-bold text-amber-800 md:text-lg">Logo 展示</h3>
          <p className="mt-1 text-xs text-apple-gray">书本与猫头鹰融合图形，象征孩子、知识、好奇心与创造力</p>
          <div className="mt-5 space-y-4">
            {/* 标准版 — 大 */}
            <div className="flex flex-col items-center rounded-xl border border-amber-100/60 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" style={{ backgroundColor: logoVariants[0].img ? undefined : "rgba(255,255,255,0.6)" }}>
              <div className="flex h-36 w-full items-center justify-center overflow-hidden">
                {logoVariants[0].img ? (
                  <img src={logoVariants[0].img} alt={logoVariants[0].label} className="h-full w-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center">
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                      <rect x="4" y="8" width="20" height="20" rx="2" fill="#C6E3A1" />
                      <circle cx="14" cy="18" r="3" fill="#566B1F" />
                      <path d="M22 4L28 10L26 12L20 6L22 4Z" fill="#566B1F" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm font-semibold text-[#1d1d1f]">{logoVariants[0].label}</p>
              <p className="mt-0.5 text-[10px] text-center text-apple-gray">{logoVariants[0].desc}</p>
            </div>

            {/* 其他变体 — 小 */}
            <div className="grid grid-cols-2 gap-3">
              {logoVariants.slice(1).map((v) => (
                <div
                  key={v.label}
                  className="flex flex-col items-center rounded-xl border border-amber-100/60 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: v.img ? undefined : "rgba(255,255,255,0.6)" }}
                >
                  <div className="flex h-20 w-full items-center justify-center overflow-hidden">
                    {v.img ? (
                      <img src={v.img} alt={v.label} className="h-full w-full object-contain" />
                    ) : (
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <rect x="4" y="8" width="20" height="20" rx="2" fill="#C6E3A1" />
                        <circle cx="14" cy="18" r="3" fill="#566B1F" />
                        <path d="M22 4L28 10L26 12L20 6L22 4Z" fill="#566B1F" />
                      </svg>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-[#1d1d1f]">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Row 3: 组件示例 (全宽) ── */}
      <div
        className="rounded-2xl border border-amber-200/50 bg-white/40 p-6 md:p-7 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "400ms",
        }}
      >
        <h3 className="text-base font-bold text-amber-800 md:text-lg">组件示例</h3>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Buttons */}
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">按钮</p>
            <div className="mt-3 flex flex-col gap-2.5">
              <button className="rounded-full bg-[#566B1F] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                开始创作
              </button>
              <button className="rounded-full border border-[#566B1F]/30 bg-white/80 px-6 py-2.5 text-sm font-medium text-[#566B1F] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                取消
              </button>
              <button className="rounded-full border border-dashed border-amber-300/60 bg-transparent px-6 py-2.5 text-sm font-medium text-amber-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50/60">
                + 添加角色
              </button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">卡片</p>
            <div className="mt-3 space-y-3">
              {["我的故事", "角色库", "故事书"].map((title) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-amber-100/60 bg-white/70 p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#C6E3A1] to-[#566B1F]/40">
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#1d1d1f]">{title}</p>
                    <p className="text-[10px] text-apple-gray">
                      {title === "我的故事" ? "查看已创作的全部故事" : title === "角色库" ? "管理你的角色人物" : "定制专属故事书"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f]">输入框</p>
            <div className="mt-3 flex flex-col gap-3">
              <div className="rounded-xl border border-amber-200/50 bg-white/70 px-4 py-3 text-sm text-[#1d1d1f] shadow-sm transition-all duration-200 focus-within:border-[#566B1F]/40 focus-within:shadow-md">
                说出你的故事想法...
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-amber-200/50 bg-white/70 px-4 py-3 shadow-sm">
                <span className="text-xs">🎤</span>
                <span className="text-xs text-apple-gray">点击开始录音</span>
                <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-[11px] text-center text-apple-gray italic">
          更多组件和交互态待补充 →
        </p>
      </div>
    </div>
  );
}
