import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E14",
        surface: "#11161F",
        surface2: "#161D28",
        line: "#222B38",
        ink: "#E6EDF3",
        muted: "#7C8898",
        accent: "#00FF94",
        accent2: "#FFB454",
        danger: "#FF5C5C",
      },
      fontWeight: {
        "600": "600",
        "700": "700",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, #1a212c 1px, transparent 1px), linear-gradient(to bottom, #1a212c 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
