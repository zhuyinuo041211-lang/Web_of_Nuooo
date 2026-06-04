import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#1a1a1a",
        "accent-hover": "#4a4a4a",
        "apple-gray": "#8a8a8a",
        "apple-light": "#f5f5f5",
        "apple-border": "#e5e5e5",
      },
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont", "SF Pro Display",
          "SF Pro Text", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"
        ]
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }],
        "hero-md": ["5rem", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "700" }],
        "section": ["1.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "card-title": ["1.125rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }]
      },
      maxWidth: {
        "apple": "1120px"
      },
    }
  },
  plugins: []
};

export default config;
