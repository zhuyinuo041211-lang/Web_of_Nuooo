"use client";

import { useEffect, useRef, useState } from "react";

type TechCategory = {
  title: string;
  icon: string;
  items: { label: string; detail: string }[];
};

const categories: TechCategory[] = [
  {
    title: "硬件模块",
    icon: "🔧",
    items: [
      { label: "主控芯片", detail: "ESP32-S3，集成 WiFi / BLE 双模通信，支持低功耗运行" },
      { label: "RFID 识别", detail: "MFRC-522 模块，手机贴近设备即可完成绑定" },
      { label: "指纹识别", detail: "电容式指纹传感器，支持本地指纹特征存储与支付授权" },
      { label: "显示与触控", detail: "LCD 彩屏显示余额与交互信息，配合触摸反馈操作" },
      { label: "语音交互", detail: "麦克风 + 扬声器，支持语音输入与播报反馈" }
    ]
  },
  {
    title: "软件架构",
    icon: "💻",
    items: [
      { label: "设备端固件", detail: "PlatformIO + M5Stack 框架，驱动外设与屏幕渲染" },
      { label: "移动端 APP", detail: "家长端与儿童端双角色设计，支持 iOS / Android" },
      { label: "后端服务", detail: "云服务器处理数据同步、任务调度与通知推送" },
      { label: "AI 服务", detail: "语音识别 (ASR) + 大语言模型 (LLM) 驱动对话与消费分析" }
    ]
  },
  {
    title: "安全体系",
    icon: "🔒",
    items: [
      { label: "本地认证", detail: "指纹特征值存储于设备本地，不上传云端" },
      { label: "通信安全", detail: "TLS / SSL 加密传输，防止中间人攻击" },
      { label: "权限管控", detail: "超额取款触发家长审批通知，儿童操作受额度限制" },
      { label: "隐私保护", detail: "用户数据分级存储，遵循未成年人数据保护规范" }
    ]
  },
  {
    title: "数据与 AI",
    icon: "🧠",
    items: [
      { label: "消费分析", detail: "记录收支行为，生成可视化消费报告与趋势分析" },
      { label: "AI 对话", detail: "引导儿童说明消费动机，辅助理性决策习惯的养成" },
      { label: "任务引擎", detail: "家长设定条件触发奖励，自动化任务匹配与发放" },
      { label: "理财建议", detail: "基于消费数据提供个性化储蓄建议与目标规划" }
    ]
  }
];

export default function TechRoadmap() {
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
      <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        {/* 顶部说明 */}
        <div className="mb-8 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#b0b0b0] mb-3">
            Tech Stack
          </p>
          <p className="text-sm leading-relaxed text-[#8a8a8a]">
            从硬件到 AI 的完整技术方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="border p-5 transition-all duration-300 hover:bg-[#FFF0F3] md:p-6"
              style={{
                borderColor: "#FFD1DC",
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 150}ms`
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border text-lg" style={{ borderColor: "#FFD1DC" }}>
                  {cat.icon}
                </span>
                <h3 className="text-base font-semibold text-[#1a1a1a]">{cat.title}</h3>
              </div>

              <div className="mt-5 space-y-3.5">
                {cat.items.map((item) => (
                  <div key={item.label} className="pb-3 last:pb-0" style={{ borderBottom: "1px solid #FFD1DC" }}>
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 border px-2 py-0.5 text-[11px] font-medium text-[#8a8a8a]" style={{ borderColor: "#FFD1DC" }}>
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#8a8a8a]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
