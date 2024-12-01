import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

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
    },
  },
} satisfies Config;
