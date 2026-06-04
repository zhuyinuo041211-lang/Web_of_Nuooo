"use client";

import { useEffect, useRef, useState } from "react";

type RatingBarProps = {
  label: string;
  value: number;
  max?: number;
};

function RatingBar({ label, value, max = 7 }: RatingBarProps) {
  const filled = Math.min(value, max);
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 text-[11px] text-[#8a8a8a] shrink-0 leading-tight">{label}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={`inline-block h-2.5 w-2.5 transition-all duration-500 ${
              i < filled ? "bg-[#1a1a1a]" : "bg-[#e5e5e5]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const personas = [
  {
    name: "小宇",
    age: "8 岁",
    role: "二年级学生",
    traits: [
      "精灵古怪，脑子里有许多新奇点子",
      "喜欢读书，喜欢跟朋友分享书中的故事",
    ],
    ratings: [
      { label: "故事创作时间", value: 5 },
      { label: "创造力", value: 6 },
      { label: "需要辅助程度", value: 6 },
    ],
    pains: [
      "喜欢讲故事，但是没有听众、也没有可以一起演故事的小伙伴",
      "创作过程中经常卡住，想寻求帮助却得不到回应",
      "完成的故事没有记录渠道，过几天就忘掉了",
    ],
    quote: "妈妈妈妈，可以陪我讲故事吗？",
    avatar: "/imagineer_boy_avatar.jpg",
  },
  {
    name: "花姐",
    age: "35 岁",
    role: "小宇妈妈",
    traits: [
      "平时经常忙碌，没有时间陪伴孩子",
      "对孩子的期望很高，希望孩子快乐且有收获",
    ],
    ratings: [
      { label: "陪孩子的时间", value: 2 },
      { label: "愿意付出的程度", value: 6 },
      { label: "故事引导能力", value: 3 },
    ],
    pains: [
      "工作忙、家务多，想陪孩子但没时间",
      "偶尔陪孩子创作时缺乏正确的引导方法",
      "希望孩子多跟其他小朋友互动",
    ],
    quote: "小宇乖，妈妈现在没空",
    avatar: "/imagineer_mom_avatar.jpg",
  },
];

function PersonaCard({ data, index }: { data: (typeof personas)[0]; index: number }) {
  return (
    <div
      className="border p-6 transition-all duration-500 hover:bg-[#CDE3A1] md:p-8"
      style={{
        borderColor: "#CDE3A1",
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border text-3xl md:h-16 md:w-16 md:text-4xl" style={{ borderColor: "#CDE3A1" }}>
          {data.avatar ? (
            <img
              src={data.avatar}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span >{data.name === "小宇" ? "👦" : "👩"}</span>
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-[#566B1F]">{data.name}</h4>
          <div className="mt-0.5 flex items-center gap-2 text-sm text-[#8a8a8a]">
            <span>{data.age}</span>
            <span>·</span>
            <span>{data.role}</span>
          </div>
        </div>
      </div>

      {/* Body: two columns */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Traits */}
        <div className="border p-4 md:p-5" style={{ borderColor: "#CDE3A1" }}>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#566B1F]">
            特点
          </span>
          <ul className="mt-3 space-y-2">
            {data.traits.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm leading-relaxed text-[#8a8a8a]">
                <span className="mt-2 h-px w-3 shrink-0 bg-[#d4d4d4]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 pt-4" style={{ borderTop: "1px solid #CDE3A1" }}>
            {data.ratings.map((r) => (
              <RatingBar key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
        </div>

        {/* Pains */}
        <div className="border p-4 md:p-5" style={{ borderColor: "#CDE3A1" }}>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8a8a8a]">
            痛点
          </span>
          <ul className="mt-3 space-y-2.5">
            {data.pains.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-[#8a8a8a]">
                <span className="mt-2 h-px w-3 shrink-0 bg-[#d4d4d4]" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-4 border px-4 py-3 text-center" style={{ borderColor: "#CDE3A1" }}>
            <span className="text-sm font-medium italic text-[#8a8a8a]">
              &ldquo;{data.quote}&rdquo;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImagineerPersonas() {
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
        className={`space-y-8 transition-all duration-700 md:space-y-10 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {personas.map((data, i) => (
          <PersonaCard key={data.name} data={data} index={i} />
        ))}
      </div>
    </div>
  );
}
