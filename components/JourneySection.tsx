"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type JourneyStage = {
  phase: string;
  subtitle: string;
  icon: string;
  actions: string[];
  thoughts: string;
  emotion: number;
  touchpoints: string[];
};

const journeyStages: JourneyStage[] = [
  {
    phase: "开箱与绑定",
    subtitle: "初次接触",
    icon: "📦",
    actions: [
      "孩子收到财小喵硬件设备，完成开箱",
      "家长下载 APP 并完成设备绑定",
      "孩子录入指纹，建立身份档案"
    ],
    thoughts: "好可爱的猫咪存钱罐！我要开始攒钱了！",
    emotion: 5,
    touchpoints: ["财小喵硬件", "家长端 APP"]
  },
  {
    phase: "存入零花钱",
    subtitle: "初始激励",
    icon: "💰",
    actions: [
      "家长通过 APP 存入第一笔零花钱",
      "财小喵屏幕显示余额更新动画",
      "孩子看到数字增长，产生储蓄兴趣"
    ],
    thoughts: "钱变多了！我要好好攒起来。",
    emotion: 4,
    touchpoints: ["家长端 APP", "财小喵屏幕"]
  },
  {
    phase: "完成任务",
    subtitle: "持续互动",
    icon: "⭐",
    actions: [
      "家长在 APP 设置日常任务与对应奖励",
      "财小喵语音提醒孩子完成今日任务",
      "孩子完成任务后获得奖励金币"
    ],
    thoughts: "做完家务就能拿到奖励了，加油！",
    emotion: 3,
    touchpoints: ["家长端 APP", "财小喵语音", "财小喵屏幕"]
  },
  {
    phase: "取钱消费",
    subtitle: "决策时刻",
    icon: "🤔",
    actions: [
      "孩子与财小喵 AI 对话说明取钱目的",
      "财小喵提醒消费合理性，引导理性决策",
      "超额取款时家长收到审批通知",
      "孩子通过指纹验证取出零钱"
    ],
    thoughts: "我真的需要这个吗…好吧就买这一次。",
    emotion: 2,
    touchpoints: ["财小喵 AI 对话", "家长端通知", "指纹识别"]
  },
  {
    phase: "攒钱达成",
    subtitle: "成就感",
    icon: "🏆",
    actions: [
      "孩子设定攒钱目标并追踪进度",
      "持续完成任务积累奖励金额",
      "目标达成时财小喵播放庆祝动画",
      "家长给予额外肯定与鼓励"
    ],
    thoughts: "我终于攒够了！好有成就感！",
    emotion: 5,
    touchpoints: ["财小喵屏幕进度", "家长端 APP", "庆祝动画"]
  }
];

const emotionLabels = ["", "低落", "平淡", "还行", "开心", "兴奋"];

function EmotionBadge({ value }: { value: number }) {
  const colors = [
    "",
    "bg-red-100 text-red-500 border-red-200",
    "bg-orange-100 text-orange-500 border-orange-200",
    "bg-yellow-100 text-yellow-600 border-yellow-200",
    "bg-lime-100 text-lime-600 border-lime-200",
    "bg-emerald-100 text-emerald-600 border-emerald-200"
  ];
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${colors[value]}`}>
      {emotionLabels[value]}
    </span>
  );
}

export default function JourneySection() {
  const [visible, setVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(-1);
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

  useEffect(() => {
    if (!visible) return;
    journeyStages.forEach((_, i) => {
      setTimeout(() => setActiveStage(i), i * 200);
    });
  }, [visible]);

  return (
    <div ref={ref} className="relative">
      <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        {/* 顶部说明 */}
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
            User Journey
          </span>
          <p className="mt-3 text-sm leading-relaxed text-apple-gray">
            以孩子为主体的完整使用旅程，从开箱到攒钱达成的情感曲线
          </p>
        </div>

        {/* === User Journey Image === */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-apple-border/20 bg-white/60 shadow-sm">
          <div className="relative w-full">
            <Image
              src="/caixiaomiao_journey.jpg"
              alt="财小喵用户使用旅程图"
              width={2400}
              height={1350}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* === Stage Cards === */}
        <div className="relative">
          {/* 连接线 */}
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/10 md:left-[29px]" />

          <div className="space-y-6">
            {journeyStages.map((stage, i) => (
              <div
                key={stage.phase}
                className="transition-all duration-500"
                style={{
                  opacity: visible && activeStage >= i ? 1 : 0,
                  transform: visible && activeStage >= i ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 200}ms`
                }}
              >
                <div className="flex gap-4 md:gap-6">
                  {/* 时间轴节点 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`flex h-[46px] w-[46px] items-center justify-center rounded-2xl text-lg shadow-sm transition-all duration-300 md:h-[58px] md:w-[58px] md:text-xl ${
                        stage.emotion >= 4
                          ? "bg-emerald-100 text-emerald-600"
                          : stage.emotion === 3
                          ? "bg-amber-100 text-amber-600"
                          : "bg-orange-100 text-orange-500"
                      }`}
                    >
                      {stage.icon}
                    </div>
                  </div>

                  {/* 内容卡片 */}
                  <div className="min-w-0 flex-1 rounded-2xl border border-apple-border/20 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-6">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <h4 className="text-base font-semibold text-[#1d1d1f]">{stage.phase}</h4>
                      <span className="text-[11px] text-apple-gray">{stage.subtitle}</span>
                      <EmotionBadge value={stage.emotion} />
                    </div>

                    {/* 用户行为 */}
                    <div className="mt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">用户行为</span>
                      <ul className="mt-2 space-y-1.5">
                        {stage.actions.map((action) => (
                          <li key={action} className="flex items-start gap-2 text-xs leading-relaxed text-apple-gray">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 内心想法 */}
                    <div className="mt-3 rounded-xl bg-accent/5 px-4 py-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">内心想法</span>
                      <p className="mt-1 text-xs italic leading-relaxed text-apple-gray">
                        &ldquo;{stage.thoughts}&rdquo;
                      </p>
                    </div>

                    {/* 触达点 */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {stage.touchpoints.map((tp) => (
                        <span key={tp} className="rounded-full border border-apple-border/20 bg-white/50 px-2.5 py-0.5 text-[10px] text-apple-gray">
                          {tp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
