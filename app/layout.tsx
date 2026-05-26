import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "朱一诺 | 作品集",
  description: "AI 产品与体验设计作品集"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="noise">{children}</body>
    </html>
  );
}
