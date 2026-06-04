export default function Hero() {
  return (
    <section className="container-apple relative aspect-[1358/866] pt-20 md:pt-24">
      {/* B&W background image */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.3] grayscale"
        style={{
          backgroundImage: "url(/hero-bg.png)",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      />
      {/* 底部渐隐 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 -z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />

      <div className="max-w-3xl ml-6 md:ml-12">
        {/* Thick editorial rule */}
        <div className="thick-rule mb-10" />

        <p className="text-xs tracking-[0.25em] uppercase text-[#8a8a8a] mb-8">
          <span className="text-[#1a1a1a] font-semibold">//</span> 工业设计 · 服务设计
        </p>
        <h1 className="text-5xl md:text-7xl text-balance tracking-[-0.04em] text-[#1a1a1a] font-bold" style={{ lineHeight: "1.2" }}>
          Hello，我是
          <br />
          朱一诺
        </h1>
        <div className="mt-5">
          <p className="text-sm tracking-[0.2em] uppercase text-[#8a8a8a]">
            — 欢迎来到我的个人网站
          </p>
        </div>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#8a8a8a] md:text-lg">
          关注 AI 产品、用户体验与服务设计。
          <br />
          希望通过结构化思考，将技术能力转化为可感知的产品体验。
        </p>

        <div className="mt-16 flex gap-4">
          <a
            href="#projects"
            className="inline-block border px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-all duration-200 hover:bg-[#1a1a1a] hover:text-white"
            style={{ borderColor: "#1a1a1a" }}
          >
            查看项目
          </a>
          <a
            href="#about"
            className="inline-block border px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-all duration-200 hover:bg-[#1a1a1a] hover:text-white"
            style={{ borderColor: "#1a1a1a" }}
          >
            关于我
          </a>
        </div>
      </div>
    </section>
  );
}
