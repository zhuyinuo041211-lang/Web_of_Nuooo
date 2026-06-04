"use client";

import { useEffect, useRef, useState } from "react";

const merchItems = [
  { icon: "📖", label: "实体故事书", desc: "精装印刷，个性化封面与内容", image: "/merch_storybook.jpg" },
  { icon: "👜", label: "帆布袋", desc: "品牌 LOGO 联名帆布袋", image: "/merch_bag.jpg" },
  { icon: "🎨", label: "明信片", desc: "Imagineer 主题插画明信片套装", image: "/merch_postcard.jpg" },
  { icon: "🎁", label: "文创礼盒", desc: "IP 衍生礼盒套装", image: "/merch_giftbox.png" },
];

export default function ImagineerBrandExtension() {
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
    <div ref={ref} className="space-y-8">
      <div
        className="border p-6 md:p-7 transition-all duration-500"
        style={{
          borderColor: "#CDE3A1",
          opacity: visible ? 1 : 0,
          transitionDelay: "100ms",
        }}
      >
        <h3 className="text-base font-bold text-[#566B1F] md:text-lg">周边产品</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {merchItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center border p-5 transition-all duration-200 hover:bg-[#CDE3A1]" style={{ borderColor: "#CDE3A1" }}
            >
              {item.image ? (
                <div className="relative w-full aspect-square mb-3 overflow-hidden" style={{ backgroundColor: "#CDE3A1" }}>
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full aspect-square mb-3 border flex items-center justify-center" style={{ borderColor: "#CDE3A1" }}>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl" >{item.icon}</span>
                    <span className="text-[9px] text-[#91C88F] tracking-wide">图片占位</span>
                  </div>
                </div>
              )}
              <p className="text-sm font-semibold text-[#566B1F]">{item.label}</p>
              <p className="mt-1 text-[10px] text-center text-[#8a8a8a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
