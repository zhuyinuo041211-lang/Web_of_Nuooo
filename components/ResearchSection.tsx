"use client";

import { useEffect, useRef, useState } from "react";

const cashRateData = [
  { year: "2012", rate: 75 },
  { year: "2015", rate: 58 },
  { year: "2018", rate: 40 },
  { year: "2021", rate: 28 },
  { year: "2024", rate: 20 },
];

const factorData = [
  { label: "金钱认知", percentage: 30 },
  { label: "储蓄意识", percentage: 25 },
  { label: "消费观念", percentage: 20 },
  { label: "投资启蒙", percentage: 15 },
  { label: "社会责任", percentage: 10 },
];

const painPoints = [
  { icon: "💰", title: "货币意识模糊", desc: "对 1000 元纸币的价值感知弱" },
  { icon: "🛒", title: "非理性消费行为", desc: "对电子支付的「无实感消费」缺乏概念" },
  { icon: "🔗", title: "劳动与报酬关系模糊", desc: "无法理解劳动与金钱的等价关系" },
];

const competitors = [
  { name: "卷钞机玩具", desc: "依赖纸币，在电子支付时代失去教育意义" },
  { name: "小招财存钱罐", desc: "仅作为「电子存钱罐」，教育作用不足" },
  { name: "绘本 / 书籍", desc: "理论为主，说教意味重，孩子无法应用到生活" },
  { name: "电子存钱罐", desc: "缺乏实践引导，无法将财商知识落地" },
];

export default function ResearchSection() {
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className={`transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* ===== 中心视觉 ===== */}
        <div className="mb-6 flex justify-center md:mb-8">
          <div className="flex h-16 w-16 items-center justify-center border md:h-20 md:w-20" style={{ borderColor: "#FFD1DC" }}>
            <span className="text-3xl md:text-4xl">🐱</span>
          </div>
        </div>

        {/* ===== 2×2 网格 ===== */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* ---------- 左上：核心数据 ---------- */}
          <div className="border p-5 transition-all duration-300 hover:bg-[#FFF0F3] md:p-6" style={{ borderColor: "#FFD1DC" }}>
            <h3 className="text-sm font-semibold text-[#1a1a1a]">核心数据背景</h3>
            <p className="mt-1 text-base font-medium text-[#1a1a1a]">
              移动支付时代的消费行为变迁
            </p>

            <div className="mt-5 flex items-end gap-2 md:gap-3">
              {cashRateData.map((d) => (
                <div key={d.year} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-xs font-semibold text-[#1a1a1a]">{d.rate}%</span>
                  <div className="relative flex h-28 w-full items-end justify-center border md:h-32" style={{ borderColor: "#FFD1DC" }}>
                    <div
                      className="w-full transition-all duration-1000"
                      style={{
                        height: visible ? `${d.rate}%` : "0%",
                        backgroundColor: "#FF6B8A",
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-[#8a8a8a]">{d.year}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#8a8a8a]">
              现金支付使用率从
              <span className="font-semibold text-[#1a1a1a]"> 75%（2012）</span>
              降至
              <span className="font-semibold text-[#1a1a1a]"> 20%（2024）</span>；
              2023 年移动支付普及率已达
              <span className="font-semibold text-[#1a1a1a]"> 86%</span>
            </p>
          </div>

          {/* ---------- 右上：核心维度 ---------- */}
          <div className="border p-5 transition-all duration-300 hover:bg-[#FFF0F3] md:p-6" style={{ borderColor: "#FFD1DC" }}>
            <h3 className="text-sm font-semibold text-[#1a1a1a]">财商教育核心维度</h3>
            <p className="mt-1 text-base font-medium text-[#1a1a1a]">
              关键因素及权重占比
            </p>

            <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
              {/* 环形图 - monochrome */}
              <div className="relative h-28 w-28 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {factorData.map((f, i) => {
                    const offset = factorData.slice(0, i).reduce((s, x) => s + x.percentage, 0);
                    const dashArray = f.percentage * 2.83;
                    const dashOffset = -offset * 2.83;
                    const pinkShades = ["#FF6B8A", "#FF8FA3", "#FFB3C1", "#FFD1DC", "#FFE8B0"];
                    return (
                      <circle
                        key={f.label}
                        cx="50" cy="50" r="45"
                        fill="none"
                        stroke={pinkShades[i]}
                        strokeWidth="8"
                        strokeDasharray={`${dashArray} ${282.7 - dashArray}`}
                        strokeDashoffset={dashOffset}
                        className="transition-all duration-1000"
                        style={{ opacity: visible ? 1 : 0 }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* 图例 */}
              <div className="flex-1 space-y-2 self-stretch">
                {factorData.map((f, i) => {
                  const pinkShades = ["#D4748F", "#FF6B8A", "#F0B8C8", "#F5D0DC", "#FCE4EC"];
                  return (
                    <div key={f.label} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 shrink-0" style={{ backgroundColor: pinkShades[i] }} />
                      <span className="flex-1 text-xs text-[#8a8a8a]">{f.label}</span>
                      <span className="text-xs font-semibold text-[#1a1a1a]">{f.percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ---------- 左下：痛点 ---------- */}
          <div className="border p-5 transition-all duration-300 hover:bg-[#FFF0F3] md:p-6" style={{ borderColor: "#FFD1DC" }}>
            <h3 className="text-sm font-semibold text-[#1a1a1a]">财商教育困境</h3>
            <p className="mt-1 text-base font-medium text-[#1a1a1a]">
              无现金时代的儿童财商痛点
            </p>

            <div className="mt-5 space-y-4">
              {painPoints.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border text-lg" style={{ borderColor: "#FFD1DC" }}>
                    {p.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a]">{p.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#8a8a8a]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- 右下：竞品分析 ---------- */}
          <div className="border p-5 transition-all duration-300 hover:bg-[#FFF0F3] md:p-6" style={{ borderColor: "#FFD1DC" }}>
            <h3 className="text-sm font-semibold text-[#1a1a1a]">竞品调研分析</h3>
            <p className="mt-1 text-base font-medium text-[#1a1a1a]">
              现有财商产品的不足
            </p>

            <div className="mt-5 space-y-2.5">
              {competitors.map((c) => (
                <div key={c.name} className="border p-3 transition-all duration-200 hover:bg-[#f5f5f5]" style={{ borderColor: "#FFD1DC" }}>
                  <p className="text-sm font-medium text-[#1a1a1a]">{c.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#8a8a8a]">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
