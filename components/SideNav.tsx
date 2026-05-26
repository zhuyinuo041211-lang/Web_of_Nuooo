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
      <ul className="sticky top-24 w-44 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block rounded-lg px-3 py-2 text-xs leading-relaxed transition-all duration-200 ${
                activeId === item.id
                  ? "bg-accent/10 font-medium text-accent"
                  : "text-apple-gray hover:bg-accent/5 hover:text-[#1d1d1f]"
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
