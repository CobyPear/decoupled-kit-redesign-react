import daisyui from "daisyui";
import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      max: "1920px",
    },
    gridTemplateColumns: {
      16: "repeat(16, minmax(0, 1fr))",
      ...defaultTheme.gridTemplateColumns,
    },
  },
  plugins: [daisyui],
} satisfies Config;
