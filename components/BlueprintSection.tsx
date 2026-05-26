"use client";

import { useEffect, useRef, useState } from "react";

const layers = ["用户行为", "前台行为", "后台行为", "技术支持"] as const;

const stages = [
  {
    title: "家长存钱",
    subtitle: "零花钱存入",
    cells: {
      "用户行为": { content: "家长通过手机端 APP 向「财小喵」端存入孩子的零花钱", icon: "👩" },
      "前台行为": { content: "提供安全的转账渠道", icon: "🛡️" },
      "后台行为": { content: "与支付宝等第三方支付平台取得合作；保护用户财产安全", icon: "⚙️" },
      "技术支持": { content: "TLS/SSL 加密传输协议；银行级数据加密存储；PCI DSS 合规管理", icon: "🔐", isTech: true },
    },
  },
  {
    title: "任务设置",
    subtitle: "任务与奖励机制",
    cells: {
      "用户行为": { content: "家长与孩子商定好任务与对应的奖励后，通过 APP 设定；孩子完成任务后领取奖励", icon: "👧" },
      "前台行为": { content: "提供任务设定功能；在「财小喵」端显示任务；语音提醒孩子任务完成情况；任务结束时发放奖励", icon: "📋" },
      "后台行为": { content: "财小喵端数据同步；任务合理性评估审核；记录孩子任务完成状态；区分孩子与家长的用户权限", icon: "⚙️" },
      "技术支持": { content: "语音识别与合成（ASR/TTS）；实时数据同步引擎；行为分析机器学习模型", icon: "🤖", isTech: true },
    },
  },
  {
    title: "孩子取钱",
    subtitle: "取款与消费管控",
    cells: {
      "用户行为": { content: "孩子经过与财小喵交流后取出目标数额的零花钱；如果数额超过一定值，家长收到通知", icon: "👧" },
      "前台行为": { content: "内置 AI 与儿童交互，询问取钱目的、提醒消费是否合理；数额超过一定值时向家长发送通知", icon: "💬" },
      "后台行为": { content: "评估孩子消费的合理性；家长端信息同步；接入可对话 AI 的 API；孩子消费数据的记录与分析", icon: "⚙️" },
      "技术支持": { content: "大语言模型（LLM）驱动的对话系统；智能风控引擎（实时交易监测与异常检测）", icon: "🧠", isTech: true },
    },
  },
  {
    title: "孩子攒钱",
    subtitle: "目标与进度管理",
    cells: {
      "用户行为": { content: "孩子自行设定攒钱目标，在财小喵的帮助下开始攒钱", icon: "👧" },
      "前台行为": { content: "提供目标制定功能；显示攒钱进度，并定时提醒孩子；攒钱完成后允许孩子取钱", icon: "🎯" },
      "后台行为": { content: "存储信息；及时总计分析用户的消费状况，给予反馈", icon: "⚙️" },
      "技术支持": { content: "移动端跨平台架构（React Native）；实时数据可视化看板；定时任务调度与推送服务", icon: "📱", isTech: true },
    },
  },
];

const layerStyle: Record<string, { dot: string; bg: string; border: string }> = {
  "用户行为": { dot: "bg-accent", bg: "bg-accent/5", border: "border-accent" },
  "前台行为": { dot: "bg-[#f9a06b]", bg: "bg-orange-50/60", border: "border-[#f9a06b]" },
  "后台行为": { dot: "bg-[#f5c078]", bg: "bg-amber-50/40", border: "border-[#f5c078]" },
  "技术支持": { dot: "bg-[#d4e8a0]", bg: "bg-lime-50/30", border: "border-[#d4e8a0]" },
};

export default function BlueprintSection() {
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
      { threshold: 0.08 },
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
        {/* 顶部说明 */}
        <div className="mb-6 text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
            Service Blueprint
          </span>
          <p className="mt-3 text-sm leading-relaxed text-apple-gray">
            从家长存钱到孩子攒钱的全链路服务逻辑
          </p>
        </div>

        {/* 图例 */}
        <div className="mb-5 flex flex-wrap justify-center gap-4 text-xs">
          {layers.map((layer) => (
            <div key={layer} className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${layerStyle[layer].dot}`} />
              <span className="text-apple-gray">{layer}</span>
            </div>
          ))}
        </div>

        {/* ===== Desktop: 对齐网格 ===== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[80px_repeat(4,1fr)] gap-2">
            {/* 表头：左上角空 + 4 个阶段名 */}
            <div />
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                className="rounded-xl p-3 text-center transition-all duration-500"
                style={{
                  backgroundColor: `rgba(251, 122, 74, ${0.06 + i * 0.02})`,
                  borderColor: `rgba(251, 122, 74, ${0.15 + i * 0.05})`,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs text-white shadow-sm">
                  {i + 1}
                </span>
                <h3 className="mt-1.5 text-sm font-bold text-[#1d1d1f]">{stage.title}</h3>
                <p className="text-[10px] text-apple-gray">{stage.subtitle}</p>
              </div>
            ))}

            {/* 数据行：每行一个层级 */}
            {layers.map((layer) => (
              <div key={layer} className="contents">
                {/* 层级标签 */}
                <div className="flex items-center gap-2 pr-2">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${layerStyle[layer].dot}`} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-apple-gray">
                    {layer}
                  </span>
                </div>

                {/* 4 个阶段对应的单元格 */}
                {stages.map((stage) => {
                  const cell = stage.cells[layer];
                  return (
                    <div
                      key={stage.title + layer}
                      className={`group rounded-xl border p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${layerStyle[layer].bg} ${layerStyle[layer].border}`}
                    >
                      <p className="text-xs leading-relaxed text-apple-gray transition-colors group-hover:text-[#1d1d1f]">
                        {cell.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ===== Mobile: 纵向步骤 ===== */}
        <div className="space-y-6 md:hidden">
          {stages.map((stage, i) => (
            <div key={stage.title} className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm text-white shadow-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#1d1d1f]">{stage.title}</h3>
                  <p className="text-xs text-apple-gray">{stage.subtitle}</p>
                </div>
              </div>

              <div className="ml-4 space-y-2 border-l-2 border-apple-border/20 pl-4">
                {layers.map((layer) => {
                  const cell = stage.cells[layer];
                  return (
                    <div
                      key={layer}
                      className={`rounded-xl border p-3 shadow-sm ${layerStyle[layer].bg} ${layerStyle[layer].border}`}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-apple-gray">
                        {cell.icon} {layer}
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-apple-gray">{cell.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
