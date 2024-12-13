import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': '#f7f7f7',
        'accent-tertiary': '#B5539F',  // assuming these are already defined
        'accent-quaternary': '#03BAAF',
      },
    },
  },
  plugins: [],
} satisfies Config;
