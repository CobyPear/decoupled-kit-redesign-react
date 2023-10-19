import daisyui from "daisyui";
import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [daisyui],
} satisfies Config;
