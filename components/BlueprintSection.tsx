"use client";

import { useEffect, useRef, useState } from "react";

const layers = ["用户行为", "前台行为", "后台行为", "技术支持"] as const;

const stages = [
  {
    title: "家长存钱",
    subtitle: "零花钱存入",
    cells: {
      "用户行为": { content: "家长通过手机端 APP 向「财小喵」端存入孩子的零花钱" },
      "前台行为": { content: "提供安全的转账渠道" },
      "后台行为": { content: "与支付宝等第三方支付平台取得合作；保护用户财产安全" },
      "技术支持": { content: "TLS/SSL 加密传输协议；银行级数据加密存储；PCI DSS 合规管理", isTech: true },
    },
  },
  {
    title: "任务设置",
    subtitle: "任务与奖励机制",
    cells: {
      "用户行为": { content: "家长与孩子商定好任务与对应的奖励后，通过 APP 设定；孩子完成任务后领取奖励" },
      "前台行为": { content: "提供任务设定功能；在「财小喵」端显示任务；语音提醒孩子任务完成情况；任务结束时发放奖励" },
      "后台行为": { content: "财小喵端数据同步；任务合理性评估审核；记录孩子任务完成状态；区分孩子与家长的用户权限" },
      "技术支持": { content: "语音识别与合成（ASR/TTS）；实时数据同步引擎；行为分析机器学习模型", isTech: true },
    },
  },
  {
    title: "孩子取钱",
    subtitle: "取款与消费管控",
    cells: {
      "用户行为": { content: "孩子经过与财小喵交流后取出目标数额的零花钱；如果数额超过一定值，家长收到通知" },
      "前台行为": { content: "内置 AI 与儿童交互，询问取钱目的、提醒消费是否合理；数额超过一定值时向家长发送通知" },
      "后台行为": { content: "评估孩子消费的合理性；家长端信息同步；接入可对话 AI 的 API；孩子消费数据的记录与分析" },
      "技术支持": { content: "大语言模型（LLM）驱动的对话系统；智能风控引擎（实时交易监测与异常检测）", isTech: true },
    },
  },
  {
    title: "孩子攒钱",
    subtitle: "目标与进度管理",
    cells: {
      "用户行为": { content: "孩子自行设定攒钱目标，在财小喵的帮助下开始攒钱" },
      "前台行为": { content: "提供目标制定功能；显示攒钱进度，并定时提醒孩子；攒钱完成后允许孩子取钱" },
      "后台行为": { content: "存储信息；及时总计分析用户的消费状况，给予反馈" },
      "技术支持": { content: "移动端跨平台架构（React Native）；实时数据可视化看板；定时任务调度与推送服务", isTech: true },
    },
  },
];

const layerColors = ["#FF6B8A", "#FF8FA3", "#FFB3C1", "#FFD1DC"];

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
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#b0b0b0] mb-3">
            Service Blueprint
          </p>
          <p className="text-sm leading-relaxed text-[#8a8a8a]">
            从家长存钱到孩子攒钱的全链路服务逻辑
          </p>
        </div>

        {/* 图例 */}
        <div className="mb-5 flex flex-wrap justify-center gap-4 text-xs">
          {layers.map((layer, i) => (
            <div key={layer} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5" style={{ backgroundColor: layerColors[i] }} />
              <span className="text-[#8a8a8a]">{layer}</span>
            </div>
          ))}
        </div>

        {/* ===== Desktop: 对齐网格 ===== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[80px_repeat(4,1fr)] gap-2">
            {/* 表头 */}
            <div />
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                className="border p-3 text-center transition-all duration-500"
                style={{ borderColor: "#FFD1DC", transitionDelay: `${i * 100}ms` }}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center text-xs text-white" style={{ backgroundColor: "#FFB74D" }}>
                  {i + 1}
                </span>
                <h3 className="mt-1.5 text-sm font-bold text-[#1a1a1a]">{stage.title}</h3>
                <p className="text-[10px] text-[#8a8a8a]">{stage.subtitle}</p>
              </div>
            ))}

            {/* 数据行 */}
            {layers.map((layer, li) => (
              <div key={layer} className="contents">
                <div className="flex items-center gap-2 pr-2">
                  <span className="h-2 w-2 shrink-0" style={{ backgroundColor: layerColors[li] }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8a8a8a]">
                    {layer}
                  </span>
                </div>

                {stages.map((stage) => {
                  const cell = stage.cells[layer];
                  return (
                    <div
                      key={stage.title + layer}
                      className="border p-3 transition-all duration-200 hover:bg-[#FFF0F3]"
                      style={{ borderColor: "#FFD1DC" }}
                    >
                      <p className="text-xs leading-relaxed text-[#8a8a8a]">
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
                <span className="flex h-8 w-8 items-center justify-center text-sm text-white" style={{ backgroundColor: "#FFB74D" }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#1a1a1a]">{stage.title}</h3>
                  <p className="text-xs text-[#8a8a8a]">{stage.subtitle}</p>
                </div>
              </div>

              <div className="ml-4 space-y-2 border-l-2 pl-4" style={{ borderColor: "#FFD1DC" }}>
                {layers.map((layer) => {
                  const cell = stage.cells[layer];
                  return (
                    <div key={layer} className="border p-3" style={{ borderColor: "#FFD1DC" }}>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8a8a8a]">
                        {layer}
                      </span>
                      <p className="mt-1 text-xs leading-relaxed text-[#8a8a8a]">{cell.content}</p>
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
