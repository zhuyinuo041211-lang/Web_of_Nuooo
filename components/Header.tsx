const navItems = [
  { label: "项目", href: "#projects" },
  { label: "简介", href: "#about" },
  { label: "联系", href: "#footer" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-apple-border/40 glass">
      <div className="container-apple flex h-12 items-center justify-between md:h-14">
        <a href="/" className="text-sm font-semibold tracking-tight text-[#1d1d1f]">
          朱一诺
        </a>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-apple-gray transition-colors hover:text-[#1d1d1f]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
