import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:"class",
  content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
          },
        },
      },
    safelist: [
        { pattern: /^gap-/ },
        { pattern: /^w-/ },
        { pattern: /^h-/ },
        { pattern: /^text-/ },
        { pattern: /^bg-/ },
    ],
    plugins: [],
};
module.exports = config;
