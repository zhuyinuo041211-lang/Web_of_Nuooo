"use client";

import { useEffect, useRef, useState } from "react";

const teacherBarData = [
  { label: "时间紧张", percentage: 55, color: "#f59e0b" },
  { label: "组织困难", percentage: 28, color: "#f97316" },
  { label: "没什么用", percentage: 10, color: "#a8a29e" },
  { label: "其他", percentage: 7, color: "#d4d4d8" },
];

const opportunityData = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "机会点 1",
    content:
      "大多数故事创作活动发生在家庭而非学校，但活动频率过低。父母在孩子故事讲述中起关键作用。",
  },
  {
    icon: "🧩",
    title: "机会点 2",
    content:
      "儿童故事讲述的核心痛点是情节推进与串联困难。低年级儿童虽想象力丰富，但缺乏组织故事的能力。",
  },
];

export default function ImagineerBackground() {
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
        className={`transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* 设计背景说明文字 */}
        <p className="mb-6 text-sm leading-relaxed text-apple-gray md:text-base md:leading-8">
          本项目为浙江大学《信息与交互设计技术》课程设计实践。研究团队通过用户访谈与行为观察发现：
          6–10 岁儿童处于叙事能力发展的关键期，但普遍面临"表达易卡顿 — 同伴缺位 — 成果难留存"的断裂式创作体验。
          Imagineer 以"AI 降低表达门槛 × 协作激发创作动机 × 沉淀构建成长档案"为设计策略，
          探索生成式 AI 在儿童叙事教育中的产品化落地路径。
        </p>

        {/* ===== 顶部双栏对比区 ===== */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* 左栏：天然优势 */}
          <div className="rounded-2xl border border-amber-200/60 bg-amber-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                🐻
              </span>
              <h3 className="text-base font-semibold text-[#1d1d1f] md:text-lg">
                儿童在故事创作方面充满优势
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "思维尚未被固化，充满天马行空的想象力",
                "情感直接而真实，故事富有感染力",
                "不在意想法是否符合常规，敢于自由表达",
              ].map((text) => (
                <li key={text}>
                  <span className="text-sm leading-relaxed text-apple-gray">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右栏：发展价值 */}
          <div className="rounded-2xl border border-amber-200/60 bg-amber-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                ✏️
              </span>
              <h3 className="text-base font-semibold text-[#1d1d1f] md:text-lg">
                故事创作对儿童发展有利
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                "激发想象力与创造力",
                "提升语言表达与沟通能力",
                "增强情感认知与同理心",
                "培养逻辑思维能力",
              ].map((text) => (
                <li key={text}>
                  <span className="text-sm leading-relaxed text-apple-gray">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== 中间转折区 ===== */}
        <div className="my-6 flex flex-col items-center md:my-7">
          <p className="text-base font-semibold text-amber-700 md:text-lg">
            但在当下教育背景中
          </p>
          <div className="mt-2 h-5 w-0.5 bg-gradient-to-b from-amber-300 to-amber-200 md:h-6" />
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D97706"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>

        {/* ===== 底部双栏痛点区 ===== */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* 左栏：学校教育 */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                🏫
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#1d1d1f]">学校教育</h3>
                <p className="mt-0.5 text-xs text-apple-gray">
                  当前学校教育对儿童故事讲述能力的培养程度十分有限
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-apple-gray">
              由多重因素造成：儿童在校时间有限、学业压力大；老师经验不足；故事资源匮乏。
            </p>

            {/* 数据指标 */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-amber-50 p-3 text-center">
                <span className="text-2xl font-bold text-amber-600">78%</span>
                <p className="mt-0.5 text-[11px] text-apple-gray">
                  认为故事创作对儿童有益的老师
                </p>
              </div>
              <div className="rounded-xl bg-orange-50 p-3 text-center">
                <span className="text-2xl font-bold text-orange-500">15%</span>
                <p className="mt-0.5 text-[11px] text-apple-gray">
                  愿意在校组织故事创作的老师
                </p>
              </div>
            </div>

            {/* 柱状图 */}
            <div className="mt-5">
              <p className="text-[11px] font-medium text-apple-gray">
                老师不愿意组织故事讲述的原因
              </p>
              <div className="mt-3 space-y-2.5">
                {teacherBarData.map((d) => (
                  <div key={d.label} className="flex items-center gap-2">
                    <span className="w-14 text-[11px] text-apple-gray">{d.label}</span>
                    <div className="flex-1 rounded-full bg-amber-50 h-5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${d.percentage}%` : "0%",
                          backgroundColor: d.color,
                        }}
                      />
                    </div>
                    <span className="w-8 text-right text-[11px] font-medium text-apple-gray">
                      {d.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右栏：家庭教育 */}
          <div className="rounded-2xl border border-apple-border/20 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                🏠
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#1d1d1f]">家庭教育</h3>
                <p className="mt-0.5 text-xs text-apple-gray">
                  只有少数家庭有意识和能力通过故事讲述培养孩子
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-apple-gray">
              家长的时间安排、引导能力等，让家庭环境下的儿童故事讲述有所局限。
            </p>

            {/* 机会点 */}
            <div className="mt-5 space-y-4">
              {opportunityData.map((opp) => (
                <div
                  key={opp.title}
                  className="rounded-xl border border-amber-100 bg-amber-50/50 p-4 transition-all duration-200 hover:bg-amber-50"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{opp.icon}</span>
                    <span className="text-sm font-semibold text-amber-700">
                      {opp.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-apple-gray">
                    {opp.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
