"use client";

import { useEffect, useRef, useState } from "react";

const colors = [
  { name: "浅嫩绿", hex: "#CDE3A1", usage: "页面底色、卡片浅背景" },
  { name: "深橄榄绿", hex: "#566B1F", usage: "标题文字、深色按钮" },
  { name: "浅天蓝", hex: "#9FCCEF", usage: "次要按钮、选项栏底色" },
  { name: "暖橘黄", hex: "#FDC76A", usage: "警示 / 辅助提示栏、强调色块" },
  { name: "中绿色", hex: "#91C88F", usage: "核心主色，大面积卡片、主按钮底色" },
];

const fontLevels = [
  { size: "32px", weight: "Bold", usage: "大标题", preview: "梦想故事书" },
  { size: "24px", weight: "Bold", usage: "模块标题", preview: "我的创作世界" },
  { size: "18px", weight: "Medium", usage: "按钮文字", preview: "开始创作" },
  { size: "16px", weight: "Regular", usage: "正文", preview: "和你的小伙伴一起创造属于你们的故事" },
  { size: "12px", weight: "Regular", usage: "提示文字", preview: "点击这里开始你的冒险" },
];

const logoVariants = [
  { label: "标准版", desc: "灰底黑字，书本+眼睛", img: "/logo_basic.png" },
  { label: "颜色变化", desc: "", img: "/logo_color.png" },
  { label: "表情变化", desc: "", img: "/logo_expression.png" },
];

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
      {/* Row 1: 色彩系统 */}
      <div
        className="border p-6 md:p-7 transition-all duration-500"
        style={{
          borderColor: "#CDE3A1",
          opacity: visible ? 1 : 0,
          transitionDelay: "100ms",
        }}
      >
        <h3 className="text-base font-bold text-[#566B1F] md:text-lg">色彩系统</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {colors.map((c) => (
            <div key={c.hex} className="flex flex-col overflow-hidden border transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
              <div className="h-20 w-full" style={{ backgroundColor: c.hex }} />
              <div className="px-3 py-2.5">
                <p className="text-xs font-semibold text-[#566B1F]">{c.name}</p>
                <p className="text-[10px] text-[#8a8a8a] font-mono">{c.hex}</p>
                <p className="mt-1 text-[9px] leading-tight text-[#8a8a8a]">{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: 字体层级 + Logo */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        <div
          className="md:col-span-3 border p-6 md:p-7 transition-all duration-500"
          style={{
            borderColor: "#CDE3A1",
            opacity: visible ? 1 : 0,
            transitionDelay: "200ms",
          }}
        >
          <h3 className="text-base font-bold text-[#566B1F] md:text-lg">字体层级</h3>
          <p className="mt-1 text-xs text-[#8a8a8a]">阿里巴巴普惠体（Alibaba PuHuiTi）</p>
          <div className="mt-5 space-y-3">
            {fontLevels.map((f) => (
              <div key={f.size} className="flex items-center justify-between border px-4 py-3 transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
                <span
                  className="text-[#566B1F] leading-tight"
                  style={{
                    fontFamily: "'Alibaba PuHuiTi', 'PingFang SC', 'Noto Sans SC', sans-serif",
                    fontSize: f.size,
                    fontWeight: f.weight === "Bold" ? 700 : f.weight === "Medium" ? 500 : 400,
                  }}
                >
                  {f.preview}
                </span>
                <div className="flex shrink-0 items-center gap-2 text-xs text-[#8a8a8a]">
                  <span className="font-mono">{f.size}</span>
                  <span className="border px-2 py-0.5 text-[10px] font-medium text-[#8a8a8a]" style={{ borderColor: "#CDE3A1" }}>
                    {f.weight}
                  </span>
                  <span className="text-[10px] hidden sm:inline">{f.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="md:col-span-2 border p-6 md:p-7 transition-all duration-500"
          style={{
            borderColor: "#CDE3A1",
            opacity: visible ? 1 : 0,
            transitionDelay: "300ms",
          }}
        >
          <h3 className="text-base font-bold text-[#566B1F] md:text-lg">Logo 展示</h3>
          <p className="mt-1 text-xs text-[#8a8a8a]">书本与猫头鹰融合图形，象征孩子、知识、好奇心与创造力</p>
          <div className="mt-5 space-y-4">
            <div className="flex flex-col items-center border p-6 transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
              <div className="flex h-36 w-full items-center justify-center overflow-hidden">
                {logoVariants[0].img ? (
                  <img src={logoVariants[0].img} alt={logoVariants[0].label} className="h-full w-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center">
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                      <rect x="4" y="8" width="20" height="20" rx="2" fill="#91C88F" />
                      <circle cx="14" cy="18" r="3" fill="#566B1F" />
                      <path d="M22 4L28 10L26 12L20 6L22 4Z" fill="#566B1F" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm font-semibold text-[#566B1F]">{logoVariants[0].label}</p>
              <p className="mt-0.5 text-[10px] text-center text-[#8a8a8a]">{logoVariants[0].desc}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {logoVariants.slice(1).map((v) => (
                <div key={v.label} className="flex flex-col items-center border p-4 transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
                  <div className="flex h-20 w-full items-center justify-center overflow-hidden">
                    {v.img ? (
                      <img src={v.img} alt={v.label} className="h-full w-full object-contain" />
                    ) : (
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <rect x="4" y="8" width="20" height="20" rx="2" fill="#91C88F" />
                        <circle cx="14" cy="18" r="3" fill="#566B1F" />
                        <path d="M22 4L28 10L26 12L20 6L22 4Z" fill="#566B1F" />
                      </svg>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-[#566B1F]">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: 组件示例 */}
      <div
        className="border p-6 md:p-7 transition-all duration-500"
        style={{
          borderColor: "#CDE3A1",
          opacity: visible ? 1 : 0,
          transitionDelay: "400ms",
        }}
      >
        <h3 className="text-base font-bold text-[#566B1F] md:text-lg">落地应用参考</h3>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* 标题栏 + 选项栏 */}
          <div>
            <p className="text-xs font-semibold text-[#566B1F] mb-1">标题栏</p>
            <div className="rounded-lg px-4 py-3 text-sm font-bold text-[#566B1F] mb-4" style={{ backgroundColor: "#CDE3A1" }}>
              梦想故事书
            </div>
            <p className="text-xs font-semibold text-[#566B1F] mb-1">选项栏</p>
            <div className="flex gap-2">
              <span className="rounded-lg px-4 py-2 text-xs font-medium text-[#566B1F]" style={{ backgroundColor: "#9FCCEF" }}>故事创作</span>
              <span className="rounded-lg px-4 py-2 text-xs font-medium text-[#566B1F]" style={{ backgroundColor: "#9FCCEF" }}>我的作品</span>
              <span className="rounded-lg px-4 py-2 text-xs font-medium text-[#566B1F]" style={{ backgroundColor: "#9FCCEF" }}>好友</span>
            </div>
          </div>

          {/* 按钮 */}
          <div>
            <p className="text-xs font-semibold text-[#566B1F] mb-1">按钮</p>
            <div className="mt-3 flex flex-col gap-2.5">
              <button className="rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-80" style={{ backgroundColor: "#91C88F" }}>
                开始创作（主按钮）
              </button>
              <button className="rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-80" style={{ backgroundColor: "#566B1F" }}>
                确认（深色按钮）
              </button>
              <button className="rounded-lg border px-6 py-2.5 text-sm font-medium text-[#566B1F] transition-all duration-200 hover:opacity-70" style={{ borderColor: "#91C88F", backgroundColor: "#CDE3A1" }}>
                次要按钮
              </button>
            </div>
          </div>

          {/* 提示栏 + 卡片 */}
          <div>
            <p className="text-xs font-semibold text-[#566B1F] mb-1">提示栏</p>
            <div className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-[#566B1F] mb-4" style={{ backgroundColor: "#FDC76A" }}>
              <span >⚠️</span>
              <span>注意：内容将自动保存</span>
            </div>
            <p className="text-xs font-semibold text-[#566B1F] mb-1">卡片示例</p>
            <div className="space-y-2">
              {["我的故事", "角色库", "故事书"].map((title) => (
                <div key={title} className="flex items-center gap-3 rounded-lg border p-3 transition-all duration-200 hover:opacity-80" style={{ borderColor: "#CDE3A1", backgroundColor: "#CDE3A1" }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#91C88F" }}>
                    {title === "我的故事" ? "故" : title === "角色库" ? "角" : "书"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#566B1F]">{title}</p>
                    <p className="text-[10px] text-[#566B1F]/70">
                      {title === "我的故事" ? "查看已创作的全部故事" : title === "角色库" ? "管理你的角色人物" : "定制专属故事书"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-[11px] text-center text-[#b0b0b0] italic">
          更多组件和交互态待补充 →
        </p>
      </div>
    </div>
  );
}
