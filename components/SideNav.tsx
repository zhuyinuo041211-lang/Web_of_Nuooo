"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

export default function SideNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block">
      <ul className="sticky top-24 w-44 space-y-0">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block border-l-2 py-2 pl-4 text-xs leading-relaxed transition-all duration-200 ${
                activeId === item.id
                  ? "border-[#1a1a1a] font-medium text-[#1a1a1a]"
                  : "border-transparent text-[#b0b0b0] hover:border-[#d4d4d4] hover:text-[#8a8a8a]"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
