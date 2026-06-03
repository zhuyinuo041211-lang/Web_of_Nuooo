"use client";

import { useEffect, useRef, useState } from "react";

const backendLayers = [
  {
    title: "后端服务",
    subtitle: "Express API",
    color: "from-accent/10 to-rose-400/10",
    border: "border-accent/20",
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
    color: "from-violet-400/10 to-indigo-400/10",
    border: "border-violet-200/40",
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
  color,
  border,
  badge,
  children,
  delay,
  visible,
}: {
  title: string;
  subtitle: string;
  color: string;
  border: string;
  badge: string;
  children: React.ReactNode;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className="flex-1 rounded-xl border bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-500 hover:shadow-md h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}s`,
        borderColor: "rgba(0,0,0,0.06)",
      }}
    >
      <div className={`rounded-t-xl bg-gradient-to-br ${color} px-5 py-4 border-b ${border}`}>
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-[#1d1d1f]">{title}</h4>
          <span className="text-[11px] font-medium uppercase tracking-wider text-apple-gray bg-white/60 rounded-full px-2.5 py-0.5">
            {badge}
          </span>
        </div>
        <p className="text-sm text-apple-gray mt-1 font-mono">{subtitle}</p>
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
    <div ref={ref} className="w-full space-y-4">
      {/* 前端层 */}
      <div
        className="rounded-2xl bg-gradient-to-b from-orange-50/40 to-transparent p-4 md:p-5"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-apple-gray/50 mb-3 ml-1">
          前端层
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
          <div className="flex-1">
            <LayerCard
              title="硬件端"
              subtitle="M5Stack CoreS3"
              color="from-orange-400/20 to-amber-400/10"
              border="border-orange-200/40"
              badge="C++ / Arduino"
              delay={0.1}
              visible={visible}
            >
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-orange-200/40">
                  触摸屏幕唤醒角色、切换对话，操作直观自然
                </p>
                <p className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-orange-200/40">
                  按住说话与角色语音聊天，拍照即可让新角色入住
                </p>
                <p className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-orange-200/40">
                  WiFi 自动连接后端，对话与角色数据实时同步
                </p>
              </div>
            </LayerCard>
          </div>
          <div className="flex-1">
            <LayerCard
              title="网页端"
              subtitle="角色管理平台"
              color="from-teal-400/10 to-emerald-400/10"
              border="border-teal-200/30"
              badge="Next.js / Web API"
              delay={0.22}
              visible={visible}
            >
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-teal-200/40">
                  查看已入住角色列表，管理角色人设与对话记录
                </p>
                <p className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-teal-200/40">
                  给角色留言，下次对话时角色会读取并回应
                </p>
                <p className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-teal-200/40">
                  上传照片和故事，丰富角色的记忆库
                </p>
              </div>
            </LayerCard>
          </div>
        </div>
      </div>

      {/* 后端层 */}
      <div
        className="rounded-2xl bg-gradient-to-b from-accent/5 to-transparent p-4 md:p-5"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-apple-gray/50 mb-3 ml-1">
          后端层
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          {backendLayers.map((layer, idx) => (
            <div key={layer.title} className="flex-1">
              <LayerCard
                title={layer.title}
                subtitle={layer.subtitle}
                color={layer.color}
                border={layer.border}
                badge={layer.badge}
                delay={0.45 + idx * 0.12}
                visible={visible}
              >
                <div className="space-y-2">
                  {layer.items.map((item) => (
                    <p key={item} className="text-xs md:text-sm text-apple-gray leading-relaxed pl-3 border-l-2 border-apple-border/30">
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
