"use client";

import { useEffect, useRef, useState } from "react";

const businessModels = [
  {
    title: "从极客到消费级",
    desc: "以 M5Stack CoreS3 为基础快速验证产品形态，后续可向定制硬件与规模化生产演进",
  },
  {
    title: "IP 联名限定版",
    desc: "与潮玩 IP 合作推出限定角色，硬件外观与角色内容双重定制，拓宽品牌价值",
  },
  {
    title: "角色记忆云存储",
    desc: "角色记忆与聊天记录云端同步，换机不丢失，打造可携带的长期陪伴关系",
  },
  {
    title: "角色订阅内容",
    desc: "定期更新的角色剧情、语音包与互动内容，让用户与角色的关系持续升温",
  },
];

export default function PopBoxBusiness() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {/* Top description */}
      <p
        className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed mb-6"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        PopBox 探索了 AI + 潮玩的新品类可能性——让收藏品从静态展示进化为有生命的陪伴终端。
      </p>

      {/* Business model grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border-t border-l" style={{ borderColor: "var(--border)" }}>
        {businessModels.map((model, idx) => (
          <div
            key={model.title}
            className="p-5 border-r border-b transition-all duration-300 hover:bg-[#f9f9f9]"
            style={{
              borderColor: "var(--border)",
              opacity: visible ? 1 : 0,
              transitionDelay: `${0.1 + idx * 0.1}s`,
            }}
          >
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-1.5">{model.title}</h4>
            <p className="text-xs leading-relaxed text-[#8a8a8a]">{model.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
