"use client";

import { useEffect, useRef, useState } from "react";

const coreValues = [
  { label: "教育性", color: "#fb7a4a", desc: "传递财商知识，培养正确金钱观" },
  { label: "趣味性", color: "#f9a06b", desc: "互动玩法，降低学习门槛，提升参与度" },
  { label: "安全性", color: "#f5c078", desc: "保障资金与个人隐私安全，支持家长监管" },
];

const stakeholders = [
  {
    role: "家长",
    needs: ["安全性", "可监管", "教育性"],
    x: 0,
    y: 0,
  },
  {
    role: "儿童",
    needs: ["易操作", "隐私保护", "趣味性", "存储助手"],
    x: 2,
    y: 0,
  },
  {
    role: "产品",
    needs: ["管理手段", "合作机制", "提供服务"],
    x: 1,
    y: 1,
    center: true,
  },
  {
    role: "第三方支付平台",
    needs: ["隐私安全", "支付安全"],
    x: 1,
    y: 2,
  },
];

export default function ConceptSection() {
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
        {/* ===== 核心定位 ===== */}
        <div className="mb-6 text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
            Design Concept
          </span>
          <p className="mt-3 text-lg font-medium text-[#1d1d1f]">
            打造移动支付时代的「电子存钱罐」——同时满足儿童与家长双方需求
          </p>
        </div>

        {/* ===== 三核心 + 价值主张 ===== */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* 左侧：三核心 */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6">
            <h3 className="text-sm font-semibold text-accent">设计三核心</h3>
            <p className="mt-1 text-sm text-apple-gray">
              产品需同时平衡三大关键属性
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {coreValues.map((v) => (
                <div key={v.label} className="text-center">
                  <div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm md:h-20 md:w-20 md:text-base"
                    style={{ backgroundColor: v.color }}
                  >
                    {v.label}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-apple-gray">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：用户价值主张 */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-6">
            <h3 className="text-sm font-semibold text-accent">目标用户价值主张</h3>
            <p className="mt-1 text-sm text-apple-gray">
              儿童与家长的双向满足
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-apple-border/10 bg-white/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👧</span>
                  <span className="text-sm font-semibold text-[#1d1d1f]">儿童层面</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-apple-gray">
                  提供「电子存钱罐」+ 理财小助手，既能规范消费行为，又能作为桌面伙伴互动玩耍。
                </p>
              </div>
              <div className="rounded-xl border border-apple-border/10 bg-white/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👩</span>
                  <span className="text-sm font-semibold text-[#1d1d1f]">家长层面</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-apple-gray">
                  提供数字零花钱的安全存储与监管方案，同时通过交互培养孩子财商。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 利益相关者关系图 ===== */}
        <div className="mt-6 rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:shadow-card-hover md:p-6">
          <h3 className="text-sm font-semibold text-accent">利益相关者关系</h3>
          <p className="mt-1 text-sm text-apple-gray">核心角色与需求映射</p>

          <div className="mt-5">
            {/* Desktop: stakeholder map */}
          <div className="hidden md:block">
            <div className="flex items-start justify-center gap-6">
              {/* 家长 */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent shadow-sm">
                  家
                </div>
                <span className="mt-2 text-sm font-semibold text-[#1d1d1f]">家长</span>
                <div className="mt-3 space-y-1.5">
                  {["安全性", "可监管", "教育性"].map((n) => (
                    <span
                      key={n}
                      className="block rounded-full bg-accent/5 px-3 py-1 text-center text-[11px] text-apple-gray"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-2 self-center">
                <span className="text-2xl text-apple-border">⟷</span>
                <span className="text-[10px] text-apple-gray">双向互动</span>
              </div>

              {/* 财小喵（中心） */}
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent text-3xl font-bold text-white shadow-elevated">
                  🐱
                </div>
                <span className="mt-2 text-base font-bold text-accent">财小喵</span>
                <div className="mt-3 space-y-1.5">
                  {["管理手段", "合作机制", "提供服务"].map((n) => (
                    <span
                      key={n}
                      className="block rounded-full bg-accent/10 px-3 py-1 text-center text-[11px] font-medium text-accent"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-2 self-center">
                <span className="text-2xl text-apple-border">⟷</span>
                <span className="text-[10px] text-apple-gray">双向互动</span>
              </div>

              {/* 儿童 */}
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent shadow-sm">
                  童
                </div>
                <span className="mt-2 text-sm font-semibold text-[#1d1d1f]">儿童</span>
                <div className="mt-3 space-y-1.5">
                  {["易操作", "隐私保护", "趣味性", "存储助手"].map((n) => (
                    <span
                      key={n}
                      className="block rounded-full bg-accent/5 px-3 py-1 text-center text-[11px] text-apple-gray"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 第三方支付平台 - 下方居中 */}
            <div className="mt-6 flex flex-col items-center">
              <span className="text-lg text-apple-border">↓</span>
              <span className="mt-1 text-[10px] text-apple-gray">服务支撑</span>
              <div className="mt-2 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-accent/30 text-xl font-bold text-accent/70 shadow-sm">
                  支
                </div>
                <span className="mt-1.5 text-sm font-semibold text-apple-gray">
                  第三方支付平台
                </span>
                <div className="mt-2 flex gap-2">
                  {["隐私安全", "支付安全"].map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-dashed border-accent/20 px-2.5 py-0.5 text-[10px] text-apple-gray"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

            {/* Mobile: vertical */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              {stakeholders.map((s, i) => (
                <div key={s.role} className="flex w-full flex-col items-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold shadow-sm ${
                      s.center
                        ? "bg-accent text-white"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {s.role === "家长" ? "家" : s.role === "儿童" ? "童" : s.role === "产品" ? "🐱" : "支"}
                  </div>
                  <span
                    className={`mt-1.5 text-sm font-semibold ${
                      s.center ? "text-accent" : "text-[#1d1d1f]"
                    }`}
                  >
                    {s.role}
                  </span>
                  <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                    {s.needs.map((n) => (
                      <span
                        key={n}
                        className={`rounded-full px-2.5 py-0.5 text-[10px] ${
                          s.center
                            ? "bg-accent/10 font-medium text-accent"
                            : "bg-accent/5 text-apple-gray"
                        }`}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  {i < stakeholders.length - 1 && (
                    <span className="mt-2 text-xs text-apple-border">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
