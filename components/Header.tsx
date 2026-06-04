const navItems = [
  { label: "项目", href: "#projects" },
  { label: "简介", href: "#about" },
  { label: "联系", href: "#footer" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b hairline" style={{ borderColor: "var(--border)" }}>
      <div className="container-apple flex h-14 items-center justify-between md:h-16">
        <a href="/" className="text-sm font-semibold tracking-tight text-[#1a1a1a]">
          ZHU YINUO
        </a>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-wider text-[#8a8a8a] transition-colors hover:text-[#1a1a1a]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
