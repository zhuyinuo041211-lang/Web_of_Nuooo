"use client";

import { useEffect, useRef, useState } from "react";

const backendLayers = [
  {
    title: "后端服务",
    subtitle: "Express API",
    badge: "Node.js",
    items: [
      "/api/stt — 语音转文字",
      "/api/chat — 对话生成",
      "/api/recognize — 视觉识别",
    ],
  },
  {
    title: "AI 引擎",
    subtitle: "Qwen 系列模型",
    badge: "LLM + VL",
    items: [
      "Qwen-turbo — 轻量对话生成",
      "Qwen3.6-plus — 视觉角色识别",
      "Qwen-plus — 联网搜索补全",
    ],
  },
];

function LayerCard({
  title,
  subtitle,
  badge,
  children,
  delay,
  visible,
}: {
  title: string;
  subtitle: string;
  badge: string;
  children: React.ReactNode;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className="flex-1 border transition-all duration-500 hover:bg-[#f9f9f9] h-full"
      style={{
        borderColor: "var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-base font-semibold text-[#1a1a1a]">{title}</h4>
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#8a8a8a]">
            {badge}
          </span>
        </div>
        <p className="text-xs text-[#b0b0b0]">{subtitle}</p>
      </div>
      <div className="p-5 space-y-3">{children}</div>
    </div>
  );
}

export default function PopBoxArchitecture() {
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
    <div ref={ref} className="w-full space-y-6">
      {/* 前端层 */}
      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}>
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#b0b0b0] mb-4">
          前端层
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <div className="flex-1">
            <LayerCard
              title="硬件端"
              subtitle="M5Stack CoreS3"
              badge="C++ / Arduino"
              delay={0.1}
              visible={visible}
            >
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                  触摸屏幕唤醒角色、切换对话，操作直观自然
                </p>
                <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                  按住说话与角色语音聊天，拍照即可让新角色入住
                </p>
                <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                  WiFi 自动连接后端，对话与角色数据实时同步
                </p>
              </div>
            </LayerCard>
          </div>
          <div className="flex-1">
            <LayerCard
              title="网页端"
              subtitle="角色管理平台"
              badge="Next.js / Web API"
              delay={0.22}
              visible={visible}
            >
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                  查看已入住角色列表，管理角色人设与对话记录
                </p>
                <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                  给角色留言，下次对话时角色会读取并回应
                </p>
                <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                  上传照片和故事，丰富角色的记忆库
                </p>
              </div>
            </LayerCard>
          </div>
        </div>
      </div>

      {/* 后端层 */}
      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}>
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#b0b0b0] mb-4">
          后端层
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {backendLayers.map((layer, idx) => (
            <div key={layer.title} className="flex-1">
              <LayerCard
                title={layer.title}
                subtitle={layer.subtitle}
                badge={layer.badge}
                delay={0.45 + idx * 0.12}
                visible={visible}
              >
                <div className="space-y-2">
                  {layer.items.map((item) => (
                    <p key={item} className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed pl-3 border-l" style={{ borderColor: "var(--border)" }}>
                      {item}
                    </p>
                  ))}
                </div>
              </LayerCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
