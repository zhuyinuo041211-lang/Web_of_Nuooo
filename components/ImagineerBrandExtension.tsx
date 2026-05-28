"use client";

import { useEffect, useRef, useState } from "react";

const merchItems = [
  { icon: "📖", label: "实体故事书", desc: "精装印刷，个性化封面与内容" },
  { icon: "👜", label: "帆布袋", desc: "品牌 LOGO 联名帆布袋" },
  { icon: "🎨", label: "贴纸", desc: "角色形象贴纸套装" },
  { icon: "🎁", label: "文创礼盒", desc: "IP 衍生礼盒套装" },
];

const mobileFeatures = [
  { icon: "🧸", label: "角色创建", desc: "自定义角色形象与性格" },
  { icon: "🎤", label: "语音输入", desc: "语音转文字，降低输入门槛" },
  { icon: "🖼️", label: "AI 画面生成", desc: "文本转图像，实时可视化" },
  { icon: "☁️", label: "云端存储", desc: "故事云同步，永不丢失" },
  { icon: "📱", label: "多端同步", desc: "平板 / 手机无缝切换" },
];

export default function ImagineerBrandExtension() {
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
    <div ref={ref} className="space-y-8">
      {/* 周边产品 */}
      <div
        className="rounded-2xl border border-amber-200/50 bg-white/40 p-6 md:p-7 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "100ms",
        }}
      >
        <h3 className="text-base font-bold text-amber-800 md:text-lg">周边产品</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {merchItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl border border-amber-100/60 bg-white/60 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="mt-3 text-sm font-semibold text-[#1d1d1f]">{item.label}</p>
              <p className="mt-1 text-[10px] text-center text-apple-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 移动端适配 */}
      <div
        className="rounded-2xl border border-amber-200/50 bg-white/40 p-6 md:p-7 transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: "200ms",
        }}
      >
        <h3 className="text-base font-bold text-amber-800 md:text-lg">移动端适配</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {mobileFeatures.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center rounded-xl border border-amber-100/60 bg-white/60 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100/60 to-amber-50/30 text-xl shadow-sm">
                {f.icon}
              </div>
              <p className="mt-2.5 text-sm font-semibold text-[#1d1d1f]">{f.label}</p>
              <p className="mt-0.5 text-[10px] text-center text-apple-gray">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
