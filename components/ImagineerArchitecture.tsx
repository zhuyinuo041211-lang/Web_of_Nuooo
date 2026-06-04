"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  {
    name: "好友",
    children: ["添加好友", "邀请好友共创", "查看好友故事库"],
  },
  {
    name: "首页",
    children: ["邀请好友", "自己创作"],
    mergeLabel: "选择人物 → 跟随 AI 进行创作",
  },
  {
    name: "我的空间",
    groups: [
      { label: "账号信息" },
      {
        label: "人物库",
        subs: ["新建人物", { left: "查看人物", right: "改变人物" }],
      },
      {
        label: "故事库",
        subs: [
          { left: "查看故事", right: "改写故事" },
          "定制故事书",
        ],
      },
    ],
  },
];

type SubItem = string | { label?: string; left?: string; right?: string };

function SubNode({ item }: { item: SubItem }) {
  if (typeof item === "string") {
    return (
      <div className="border px-3 py-1.5 text-[11px] text-center text-[#8a8a8a] transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
        {item}
      </div>
    );
  }
  if (item.left && item.right) {
    return (
      <div className="flex items-center justify-center gap-1 border px-3 py-1.5 text-[11px] text-center text-[#8a8a8a] transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
        <span>{item.left}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
        <span>{item.right}</span>
      </div>
    );
  }
  return null;
}

function GroupNode({ label, subs }: { label: string; subs?: SubItem[] }) {
  return (
    <div className="flex flex-col items-center">
      <div className="border px-3 py-1.5 text-[11px] text-center font-medium text-[#8a8a8a] transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
        {label}
      </div>
      {subs && subs.length > 0 && (
        <>
          <div className="h-3 w-0.5 bg-[#CDE3A1]" />
          <div className="flex flex-col gap-1.5">
            {subs.map((s, i) => (
              <SubNode key={i} item={s} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ChildList({ children }: { children: string[] }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {children.map((child) => (
        <div key={child} className="border px-3 py-1.5 text-[11px] text-center text-[#8a8a8a] transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default function ImagineerArchitecture() {
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
        {/* Imagineer 主入口 */}
        <div className="flex justify-center" style={{ transitionDelay: "100ms" }}>
          <div className="inline-block border-2 px-8 py-3 text-base font-bold text-[#566B1F] transition-all duration-300 hover:bg-[#CDE3A1] md:text-lg" style={{ borderColor: "#CDE3A1" }}>
            Imagineer
          </div>
        </div>

        {/* 连接线 */}
        <div className="flex justify-center" style={{ transitionDelay: "150ms" }}>
          <div className="h-6 w-0.5 bg-[#CDE3A1]" />
        </div>

        {/* 水平分支线 */}
        <div className="flex justify-center" style={{ transitionDelay: "200ms" }}>
          <div className="h-0.5 w-full max-w-[600px] bg-[#CDE3A1]" />
        </div>

        {/* 三列模块 */}
        <div className="mt-0 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* 好友 */}
          <div className="flex flex-col items-center" style={{ transitionDelay: "300ms" }}>
            <div className="h-4 w-0.5 bg-[#CDE3A1]" />
            <div className="border px-5 py-2.5 text-sm text-center font-semibold text-[#566B1F] transition-all duration-300 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
              好友
            </div>
            <div className="my-3 h-5 w-0.5 bg-[#CDE3A1]" />
            <ChildList children={modules[0].children ?? []} />
          </div>

          {/* 首页 */}
          <div className="flex flex-col items-center" style={{ transitionDelay: "400ms" }}>
            <div className="h-4 w-0.5 bg-[#CDE3A1]" />
            <div className="border px-5 py-2.5 text-sm text-center font-semibold text-[#566B1F] transition-all duration-300 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
              首页
            </div>
            <div className="my-3 h-5 w-0.5 bg-[#CDE3A1]" />
            <ChildList children={modules[1].children ?? []} />

            {/* 合并箭头 */}
            <div className="my-1 flex flex-col items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>

            {/* 核心创作路径 */}
            <div className="border-2 px-4 py-2.5" style={{ borderColor: "#CDE3A1" }}>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#566B1F]">
                <span>选择人物</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
                <span>跟随 AI 进行创作</span>
              </div>
              <p className="mt-0.5 text-[10px] text-[#b0b0b0] text-center">核心创作路径</p>
            </div>
          </div>

          {/* 我的空间 */}
          <div className="flex flex-col items-center" style={{ transitionDelay: "500ms" }}>
            <div className="h-4 w-0.5 bg-[#CDE3A1]" />
            <div className="border px-5 py-2.5 text-sm text-center font-semibold text-[#566B1F] transition-all duration-300 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
              我的空间
            </div>
            <div className="my-3 h-5 w-0.5 bg-[#CDE3A1]" />

            <div className="flex flex-col items-center gap-4">
              <GroupNode label="账号信息" />
              <GroupNode label="人物库" subs={["新建人物", { left: "查看人物", right: "改变人物" }]} />
              <GroupNode label="故事库" subs={[{ left: "查看故事", right: "改写故事" }, "定制故事书"]} />
            </div>
          </div>
        </div>

        {/* 架构图 */}
        <div className="mt-8 flex flex-col items-center" style={{ transitionDelay: "600ms" }}>
          <img src="/imagineer_architecture.jpg" alt="Imagineer 功能架构图" className="w-full max-w-2xl border" style={{ borderColor: "#CDE3A1" }} />
          <p className="mt-3 text-sm font-medium text-[#8a8a8a]">低保真设计</p>
        </div>
      </div>
    </div>
  );
}
