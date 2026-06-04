"use client";

import { useEffect, useRef, useState } from "react";

// ── Data ──

type Stage = {
  title: string;
  goals: string[];
  behaviors: { text: string; emotion: number; emotionLabel: string }[];
  highlights: string[];
};

function EmotionCurve({ points, animate, delay }: { points: { value: number }[]; animate: boolean; delay?: number }) {
  const h = 60;
  const w = 200;
  const maxVal = Math.max(...points.map(p => Math.abs(p.value)), 1);
  const stepX = points.length > 1 ? w / (points.length - 1) : w;
  const d = points.map((p, i) => {
    const x = i * stepX;
    const y = h / 2 - (p.value / maxVal) * (h / 2 - 4);
    return (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1);
  }).join(" ");
  return (
    <svg viewBox={"0 0 " + w + " " + h} className="w-full h-12" style={{ opacity: animate ? 1 : 0, transition: "opacity 0.5s ease " + (delay ?? 0) + "ms" }}>
      <path d={d} fill="none" stroke="#566B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stages: Stage[] = [
  {
    title: "邀请好友",
    goals: ["快速联系朋友，与朋友拥有线上共同玩耍的机会"],
    behaviors: [
      { text: "查看在线好友", emotion: 3, emotionLabel: "😐" },
      { text: "邀请好友", emotion: 3, emotionLabel: "😐" },
    ],
    highlights: [
      "APP 通过家长手机号登录，方便管理",
      "小朋友可通过分享 ID 添加好友",
      "随时查看在线好友并邀请共同创作",
    ],
  },
  {
    title: "故事创作",
    goals: [
      "表达自己的想法，有人辅助推进故事情节发展",
      "直观看到创作的故事，同时完善价值观、表达能力",
    ],
    behaviors: [
      { text: "说出想法", emotion: 3, emotionLabel: "😐" },
      { text: "AI 引导下推进情节、查看实时场景图片", emotion: 4, emotionLabel: "😊" },
      { text: "创作中出现价值观偏差，AI 纠正情节", emotion: 3, emotionLabel: "😐" },
    ],
    highlights: [
      "文本生成 AI 通过提问推进情节、判断价值观",
      "孩子以角色扮演形式创作，场景由自己创造",
      "图像生成 AI 生成人物、场景图片",
      "AI 引导创作完整的故事框架、开头、过程、结尾",
    ],
  },
  {
    title: "故事集定制",
    goals: [
      "拥有自己专属的故事书",
      "将自己的故事分享给家人朋友",
    ],
    behaviors: [
      { text: "完成故事、选择多个故事定制故事书", emotion: 4, emotionLabel: "😊" },
      { text: "收到故事书、分享给家人朋友", emotion: 5, emotionLabel: "😊" },
    ],
    highlights: [
      "孩子/家长可选择故事定制实体书，自定义封面、顺序",
      "平台制作寄送，让孩子更有成就感",
      "支持在故事社区分享，互相学习阅读",
    ],
  },
];

// ── Storyboard Data ──

type StoryboardPanel = {
  scene: string;
  img: string;
  title: string;
  desc: string;
  story: string;
  aiRole: string;
};

const storyboardPanels: StoryboardPanel[] = [
  {
    scene: "📱",
    img: "/storyBoard_1.png",
    title: "发起邀请",
    desc: "孩子查看在线好友并发起创作邀请",
    story: "小宇打开平板，看到好朋友也在线上，迫不及待地点下了「邀请」按钮。",
    aiRole: "AI 推荐在线好友，辅助发送邀请通知",
  },
  {
    scene: "💭",
    img: "/storyBoard_2.png",
    title: "表达想法",
    desc: "孩子将脑海中的零散想法告诉 AI",
    story: "\"我想讲一个关于小松鼠的故事……它找到了一朵会飞的蘑菇！\"小宇对着屏幕比划着。",
    aiRole: "AI 理解碎片化表达，转化为完整通顺的句子",
  },
  {
    scene: "🎨",
    img: "/storyBoard_3.png",
    title: "场景生成",
    desc: "AI 根据故事内容实时生成场景画面",
    story: "话音刚落，屏幕上就出现了小松鼠站在闪闪发光的蘑菇上。小宇惊喜地叫了出来。",
    aiRole: "图像 AI 将文字描述转为直观视觉场景，激发想象力",
  },
  {
    scene: "🧭",
    img: "/storyBoard_4.png",
    title: "价值引导",
    desc: "故事情节出现价值观偏差，AI 及时介入",
    story: "\"小松鼠要把所有蘑菇都抢走！\"AI 温柔地问：\"如果你是蘑菇，你希望小松鼠怎么做呢？\"",
    aiRole: "AI 识别偏差内容，以提问方式引导正向思考",
  },
  {
    scene: "📖",
    img: "/storyBoard_5.png",
    title: "故事完成",
    desc: "AI 辅助梳理完整故事框架",
    story: "一问一答中，故事悄悄长大了——从相遇、冒险到分享的温馨结局，完整而流畅。",
    aiRole: "AI 确保故事有开头、过程、结尾，逻辑连贯",
  },
  {
    scene: "📚",
    img: "/storyBoard_6.png",
    title: "书集定制",
    desc: "选择多个故事定制专属故事书",
    story: "\"我还要把上次的故事也放进来！\"小宇兴奋地挑选着，定制了一本属于自己的故事书。",
    aiRole: "AI 推荐故事组合方案，辅助封面和顺序设计",
  },
  {
    scene: "🎉",
    img: "/storyBoard_7.png",
    title: "分享收获",
    desc: "收到实体故事书，分享给家人朋友",
    story: "几天后，小宇收到了印着自己名字的实体书，迫不及待地读给妈妈听。",
    aiRole: "AI 生成个性化寄语和推荐语，记录成长",
  },
];

// ── Storyboard S-Curve Component ──

function StoryboardPanels({ visible }: { visible: boolean }) {
  return (
    <div className="relative">
      {/* Desktop: alternating left/right */}
      <div className="hidden md:block">
        <div className="relative">
          {storyboardPanels.map((panel, i) => {
            const isLeft = i % 2 === 0;
            const delay = 200 + i * 120;
            return (
              <div key={i} style={{ opacity: visible ? 1 : 0, transition: `all 0.6s ease-out ${delay}ms` }}>
                <div className="flex items-stretch gap-6 mb-8">
                  {isLeft ? (
                    <>
                      <div className="relative w-[55%]">
                        <div className="relative overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
                          <div className="absolute -top-1 -left-1 z-10 flex h-10 w-10 items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#566B1F" }}>
                            {i + 1}
                          </div>
                          <div className="flex h-44 items-center justify-center overflow-hidden" style={{ backgroundColor: "#CDE3A1" }}>
                            <img src={panel.img} alt={panel.title} className="h-full w-full object-cover" />
                          </div>
                          <div className="flex items-center justify-between gap-3 px-5 py-3">
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-[#566B1F]">{panel.title}</p>
                              <p className="mt-0.5 text-[11px] leading-relaxed text-[#8a8a8a]">{panel.desc}</p>
                            </div>
                            <div className="shrink-0 border px-2.5 py-1.5 text-center" style={{ borderColor: "#CDE3A1" }}>
                              <span className="text-[9px] font-semibold text-[#8a8a8a] leading-tight">{panel.aiRole}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[40%] items-center">
                        <div className="relative border px-5 py-6" style={{ borderColor: "#CDE3A1", backgroundColor: "#E8F5D8" }}>
                          <p className="text-sm leading-relaxed text-[#8a8a8a] italic">{panel.story}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex w-[40%] items-center">
                        <div className="relative border px-5 py-6" style={{ borderColor: "#CDE3A1", backgroundColor: "#E8F5D8" }}>
                          <p className="text-sm leading-relaxed text-[#8a8a8a] italic">{panel.story}</p>
                        </div>
                      </div>
                      <div className="relative w-[55%]">
                        <div className="relative overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
                          <div className="absolute -top-1 -left-1 z-10 flex h-10 w-10 items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#566B1F" }}>
                            {i + 1}
                          </div>
                          <div className="flex h-44 items-center justify-center overflow-hidden" style={{ backgroundColor: "#CDE3A1" }}>
                            <img src={panel.img} alt={panel.title} className="h-full w-full object-cover" />
                          </div>
                          <div className="flex items-center justify-between gap-3 px-5 py-3">
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-[#566B1F]">{panel.title}</p>
                              <p className="mt-0.5 text-[11px] leading-relaxed text-[#8a8a8a]">{panel.desc}</p>
                            </div>
                            <div className="shrink-0 border px-2.5 py-1.5 text-center" style={{ borderColor: "#CDE3A1" }}>
                              <span className="text-[9px] font-semibold text-[#8a8a8a] leading-tight">{panel.aiRole}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="space-y-5 md:hidden">
        {storyboardPanels.map((panel, i) => {
          const delay = 200 + i * 100;
          return (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.5s ease-out ${delay}ms`,
              }}
            >
              <div className="relative overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
                <div className="absolute -top-1 -left-1 z-10 flex h-8 w-8 items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#566B1F" }}>
                  {i + 1}
                </div>
                <div className="flex h-28 items-center justify-center overflow-hidden" style={{ backgroundColor: "#CDE3A1" }}>
                  <img src={panel.img} alt={panel.title} className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between gap-2 px-4 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#566B1F]">{panel.title}</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-[#8a8a8a]">{panel.desc}</p>
                  </div>
                  <div className="shrink-0 border px-2 py-1" style={{ borderColor: "#CDE3A1" }}>
                    <span className="text-[8px] font-semibold text-[#8a8a8a] leading-tight">{panel.aiRole}</span>
                  </div>
                </div>
                <div className="border-t px-4 py-3" style={{ borderColor: "#CDE3A1", backgroundColor: "#E8F5D8" }}>
                  <p className="text-[11px] leading-relaxed text-[#8a8a8a] italic">{panel.story}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Stage Card ──

function StageColumn({ stage, index, visible }: { stage: Stage; index: number; visible: boolean }) {
  const delay = index * 150;

  return (
    <div
      className="flex min-w-0 flex-1 flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      {/* Stage title */}
      <div className="mb-3 border px-3 py-2.5 text-center" style={{ borderColor: "#CDE3A1" }}>
        <span className="text-sm font-bold text-[#566B1F]">{stage.title}</span>
      </div>

      {/* Goals */}
      <div className="mb-3 px-3 py-3" style={{ backgroundColor: "#566B1F" }}>
        {stage.goals.map((g, i) => (
          <p key={i} className="text-[11px] leading-relaxed text-white/90 md:text-xs">
            {i > 0 && <span className="mr-1">·</span>}{i > 0 ? g : g}
          </p>
        ))}
      </div>

      {/* Behaviors */}
      <div className="mb-3 flex-1 border px-3 py-3 transition-all duration-300 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}>
        <ul className="space-y-2">
          {stage.behaviors.map((b, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="mt-0.5 shrink-0 text-xs" >{b.emotionLabel}</span>
              <span className="text-[11px] leading-relaxed text-[#8a8a8a] md:text-xs">{b.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Emotion curve */}
      <div className="px-2 py-2" style={{ backgroundColor: "#E8F5D8" }}>
        <EmotionCurve
          points={stage.behaviors.map((b) => ({ value: b.emotion }))}
          animate={visible}
          delay={delay + 400}
        />
      </div>
    </div>
  );
}

// ── Main Component ──

export default function ImagineerJourney() {
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
        {/* ── Header ── */}
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border md:h-14 md:w-14" style={{ borderColor: "#CDE3A1" }}>
            <img src="/imagineer_boy_avatar.jpg" alt="小宇" className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#566B1F] md:text-lg">
              小宇的故事创作旅程图
            </h3>
            <p className="mt-1 text-[11px] leading-relaxed text-[#8a8a8a] md:text-xs">
              本用户旅程图模拟小宇进行一次协作创作故事及选择三个故事定制故事集的过程，
              分析用户在交互过程中的目标、交互行为、情绪及 Imagineer 给用户带来的交互亮点。
            </p>
          </div>
        </div>

        {/* ── Desktop: Grid Layout ── */}
        <div className="hidden md:block">
          <div className="overflow-hidden border" style={{ borderColor: "#CDE3A1" }}>
            {/* Headers row */}
            <div className="grid grid-cols-[56px_1fr_1fr_1fr]" style={{ borderBottom: "1px solid #CDE3A1" }}>
              <div className="p-3" />
              {stages.map((s, i) => (
                <div key={s.title} className="p-3 text-center" style={{ borderRight: i < stages.length - 1 ? "1px solid #CDE3A1" : "none", opacity: visible ? 1 : 0, transition: `all 0.5s ease-out ${i * 150}ms` }}>
                  <span className="text-sm font-bold text-[#566B1F]">{s.title}</span>
                </div>
              ))}
            </div>

            {/* 用户目标 row */}
            <div className="grid grid-cols-[56px_1fr_1fr_1fr]" style={{ borderBottom: "1px solid #CDE3A1" }}>
              <div className="flex flex-col items-center justify-center gap-0.5 p-3" style={{ borderRight: "1px solid #CDE3A1" }}>
                <span className="text-base" >🎯</span>
                <span className="text-xs font-semibold text-[#566B1F] leading-tight text-center">用户目标</span>
              </div>
              {stages.map((s, i) => (
                <div key={`goal-${i}`} className="flex items-center justify-center p-3" style={{ borderRight: i < stages.length - 1 ? "1px solid #CDE3A1" : "none", opacity: visible ? 1 : 0, transition: `all 0.5s ease-out ${300 + i * 150}ms` }}>
                  <div>
                    {s.goals.map((g, j) => (
                      <p key={j} className="mb-1 text-[11px] leading-relaxed text-[#8a8a8a] text-center last:mb-0">
                        {j > 0 ? <span className="mr-1 text-[#d4d4d4]">·</span> : ""}{g}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 用户行为 row */}
            <div className="grid grid-cols-[56px_1fr_1fr_1fr]" style={{ borderBottom: "1px solid #CDE3A1" }}>
              <div className="flex flex-col items-center justify-center gap-0.5 p-3" style={{ borderRight: "1px solid #CDE3A1" }}>
                <span className="text-base" >👆</span>
                <span className="text-xs font-semibold text-[#566B1F] leading-tight text-center">用户行为</span>
              </div>
              {stages.map((s, i) => (
                <div key={`beh-${i}`} className="flex items-center justify-center p-3" style={{ borderRight: i < stages.length - 1 ? "1px solid #CDE3A1" : "none", opacity: visible ? 1 : 0, transition: `all 0.5s ease-out ${500 + i * 150}ms` }}>
                  <ul className="space-y-1.5">
                    {s.behaviors.map((b, j) => (
                      <li key={j} className="flex items-start gap-1 text-[11px] leading-relaxed text-[#8a8a8a]">
                        <span className="shrink-0" >{b.emotionLabel}</span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 交互亮点通栏 */}
            <div>
              <div className="grid grid-cols-[56px_1fr_1fr_1fr]">
                <div className="flex flex-col items-center justify-center gap-0.5 p-3" style={{ borderRight: "1px solid #CDE3A1", backgroundColor: "#CDE3A1" }}>
                  <span className="text-base" >💡</span>
                  <span className="text-xs font-semibold text-[#566B1F] leading-tight text-center">交互亮点</span>
                </div>
                {stages.map((s, i) => (
                  <div key={`hl-${i}`} className="flex items-center justify-center p-3" style={{ borderRight: i < stages.length - 1 ? "1px solid #CDE3A1" : "none", backgroundColor: "#CDE3A1", opacity: visible ? 1 : 0, transition: `all 0.5s ease-out ${900 + i * 150}ms` }}>
                    <ul className="space-y-1.5">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-[11px] leading-relaxed text-[#566B1F]">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: "#566B1F" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: Vertical Stack ── */}
        <div className="space-y-6 md:hidden">
          {stages.map((stage, i) => {
            const delay = i * 150;
            return (
              <div
                key={stage.title}
                className="overflow-hidden border" style={{ borderColor: "#CDE3A1", opacity: visible ? 1 : 0, transition: `all 0.6s ease-out ${delay}ms` }}
              >
                <div className="p-3 text-center" style={{ borderBottom: "1px solid #CDE3A1" }}>
                  <span className="text-sm font-bold text-[#566B1F]">{stage.title}</span>
                </div>

                <div className="p-3" style={{ borderBottom: "1px solid #CDE3A1" }}>
                  <div className="mb-2 flex flex-col items-center gap-0.5">
                    <span className="text-base" >🎯</span>
                    <span className="text-xs font-semibold text-[#566B1F]">用户目标</span>
                  </div>
                  <div className="px-3 py-2" style={{ backgroundColor: "#566B1F" }}>
                    {stage.goals.map((g, j) => (
                      <p key={j} className="text-[11px] leading-relaxed text-white/90 text-center">
                        {j > 0 && <span className="mr-1">·</span>}{g}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="p-3" style={{ borderBottom: "1px solid #CDE3A1" }}>
                  <div className="mb-2 flex flex-col items-center gap-0.5">
                    <span className="text-base" >👆</span>
                    <span className="text-xs font-semibold text-[#566B1F]">用户行为</span>
                  </div>
                  <ul className="space-y-1.5">
                    {stage.behaviors.map((b, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-[11px] leading-relaxed text-[#8a8a8a]">
                        <span className="shrink-0" >{b.emotionLabel}</span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3" style={{ backgroundColor: "#CDE3A1" }}>
                  <div className="mb-2 flex flex-col items-center gap-0.5">
                    <span className="text-base" >💡</span>
                    <span className="text-xs font-semibold text-[#566B1F]">交互亮点</span>
                  </div>
                  <ul className="space-y-1.5">
                    {stage.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5 text-[11px] leading-relaxed text-[#566B1F]">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0" style={{ backgroundColor: "#566B1F" }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Storyboard: S-curve comic panels ── */}
        <div className="mt-14">
          <h4 className="mb-8 text-center text-base font-bold text-[#566B1F] md:text-lg">
            <span >🎬</span> 行为故事版 — AI 引导下的创作之旅
          </h4>
          <StoryboardPanels visible={visible} />
        </div>
      </div>
    </div>
  );
}
