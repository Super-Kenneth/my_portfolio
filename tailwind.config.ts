import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dancingScript: ["Dancing Script", "cursive"],
        HelveticaNeue: ["Helvetica Neue", "sans-serif"],
      },
      animation: {
        typing: "typing 3s steps(30, end), blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
