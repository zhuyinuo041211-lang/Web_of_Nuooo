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
  { label: "金钱认知", percentage: 30, color: "#fb7a4a" },
  { label: "储蓄意识", percentage: 25, color: "#f9a06b" },
  { label: "消费观念", percentage: 20, color: "#f5c078" },
  { label: "投资启蒙", percentage: 15, color: "#e8d58a" },
  { label: "社会责任", percentage: 10, color: "#d4e8a0" },
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

const donutStyle = {
  background: `conic-gradient(
    #fb7a4a 0% 30%,
    #f9a06b 30% 55%,
    #f5c078 55% 75%,
    #e8d58a 75% 90%,
    #d4e8a0 90% 100%
  )`,
};

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
        {/* ===== 中心视觉（桌面端显示） ===== */}
        <div className="mb-6 flex justify-center md:mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-apple-border/20 bg-white shadow-elevated md:h-20 md:w-20">
            <span className="text-3xl md:text-4xl">🐱</span>
          </div>
        </div>

        {/* ===== 2×2 网格 ===== */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* ---------- 左上：核心数据 ---------- */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6">
            <h3 className="text-sm font-semibold text-accent">核心数据背景</h3>
            <p className="mt-1 text-base font-medium text-[#1d1d1f]">
              移动支付时代的消费行为变迁
            </p>

            <div className="mt-5 flex items-end gap-2 md:gap-3">
              {cashRateData.map((d) => (
                <div key={d.year} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-xs font-semibold text-accent">{d.rate}%</span>
                  <div className="relative flex h-28 w-full items-end justify-center rounded-md bg-accent/5 md:h-32">
                    <div
                      className="w-full rounded-t-md transition-all duration-1000"
                      style={{
                        height: visible ? `${d.rate}%` : "0%",
                        backgroundColor:
                          d.rate > 50 ? "#fb7a4a" : d.rate > 30 ? "#f9a06b" : "#f5c078",
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-apple-gray">{d.year}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-apple-gray">
              现金支付使用率从
              <span className="font-semibold text-[#1d1d1f]"> 75%（2012）</span>
              降至
              <span className="font-semibold text-[#1d1d1f]"> 20%（2024）</span>；
              2023 年移动支付普及率已达
              <span className="font-semibold text-[#1d1d1f]"> 86%</span>
            </p>
          </div>

          {/* ---------- 右上：核心维度 ---------- */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6">
            <h3 className="text-sm font-semibold text-accent">财商教育核心维度</h3>
            <p className="mt-1 text-base font-medium text-[#1d1d1f]">
              关键因素及权重占比
            </p>

            <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row">
              {/* 环形图 */}
              <div className="relative h-28 w-28 shrink-0">
                <div
                  className="h-full w-full rounded-full shadow-inner"
                  style={donutStyle}
                />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm" />
              </div>

              {/* 图例 */}
              <div className="flex-1 space-y-2 self-stretch">
                {factorData.map((f) => (
                  <div key={f.label} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: f.color }}
                    />
                    <span className="flex-1 text-xs text-apple-gray">{f.label}</span>
                    <span className="text-xs font-semibold text-[#1d1d1f]">
                      {f.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- 左下：痛点 ---------- */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6">
            <h3 className="text-sm font-semibold text-accent">财商教育困境</h3>
            <p className="mt-1 text-base font-medium text-[#1d1d1f]">
              无现金时代的儿童财商痛点
            </p>

            <div className="mt-5 space-y-4">
              {painPoints.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-lg">
                    {p.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[#1d1d1f]">{p.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-apple-gray">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- 右下：竞品分析 ---------- */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6">
            <h3 className="text-sm font-semibold text-accent">竞品调研分析</h3>
            <p className="mt-1 text-base font-medium text-[#1d1d1f]">
              现有财商产品的不足
            </p>

            <div className="mt-5 space-y-2.5">
              {competitors.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-apple-border/10 bg-white/40 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80"
                >
                  <p className="text-sm font-medium text-[#1d1d1f]">{c.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-apple-gray">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
