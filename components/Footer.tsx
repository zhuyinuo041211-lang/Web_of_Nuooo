export default function Footer() {
  return (
    <footer id="footer" className="border-t-2" style={{ borderColor: "var(--border)" }}>
      <div className="container-apple py-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              欢迎联系我！
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="mailto:3240544514@qq.com"
                className="inline-flex items-center gap-2 text-base text-[#8a8a8a] underline underline-offset-4 transition-all hover:text-[#1a1a1a]"
              >
                3240544514@qq.com
                <span className="w-4 h-px bg-[#8a8a8a]" />
              </a>
              <a
                href="tel:18894189420"
                className="inline-flex items-center gap-2 text-base text-[#8a8a8a] underline underline-offset-4 transition-all hover:text-[#1a1a1a]"
              >
                18894189420
                <span className="w-4 h-px bg-[#8a8a8a]" />
              </a>
            </div>
          </div>
          <p className="text-xs tracking-wider text-[#b0b0b0]">© 2026 朱一诺</p>
        </div>
      </div>
    </footer>
  );
}
