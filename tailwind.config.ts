import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#fb7a4a",
        "accent-hover": "#e8653a",
        "apple-gray": "#86868b",
        "apple-light": "#f5f5f7",
        "apple-border": "#d2d2d7",
        "glass-bg": "rgba(255, 255, 255, 0.72)",
        "glass-border": "rgba(255, 255, 255, 0.6)"
      },
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont", "SF Pro Display",
          "SF Pro Text", "Helvetica Neue", "Arial", "sans-serif"
        ]
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "hero-md": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "section": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "card-title": ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }]
      },
      maxWidth: {
        "apple": "980px"
      },
      boxShadow: {
        "glass": "0 4px 24px rgba(0, 0, 0, 0.04)",
        "card": "0 2px 12px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.1)",
        "elevated": "0 12px 48px rgba(0, 0, 0, 0.08)"
      },
      backdropBlur: {
        "glass": "20px"
      }
    }
  },
  plugins: []
};

export default config;
