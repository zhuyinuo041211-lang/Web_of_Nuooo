export default function Hero() {
  return (
    <section className="container-apple pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full glass px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
          工业设计 &amp; 服务设计
        </span>
        <h1 className="mt-8 text-hero md:text-hero-md text-balance leading-[1.05] tracking-[-0.03em] text-[#1d1d1f]">
          设计 AI 时代
          <br />
          人与世界的交互方式
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-apple-gray md:text-lg">
          关注 AI 产品、用户体验与服务设计。
          <br />
          通过结构化思考，将技术能力转化为可感知的产品体验。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex min-w-36 items-center justify-center rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#2d2d2f] hover:shadow-elevated active:scale-[0.97]"
          >
            查看项目
          </a>
          <a
            href="#about"
            className="inline-flex min-w-36 items-center justify-center rounded-full glass px-7 py-3 text-sm font-medium text-[#1d1d1f] transition-all hover:shadow-card-hover active:scale-[0.97]"
          >
            关于我
          </a>
        </div>
      </div>
    </section>
  );
}
