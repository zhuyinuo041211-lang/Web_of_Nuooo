export default function Footer() {
  return (
    <footer id="footer" className="border-t border-apple-border/20 glass">
      <div className="container-apple py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Let&apos;s build the future together.
            </h2>
            <a
              href="mailto:3240544514@qq.com"
              className="mt-5 inline-block text-base text-accent underline decoration-accent/30 underline-offset-4 transition-all hover:decoration-accent"
            >
              3240544514@qq.com
            </a>
          </div>
          <p className="text-xs tracking-wider text-apple-gray">© 2026 朱一诺</p>
        </div>
      </div>
    </footer>
  );
}
