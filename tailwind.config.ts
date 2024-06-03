import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { vazir: ["Vazir", "sans"] },
      colors: {
        primary: {
          base: "#197265",
          20: "#145B51",
          30: "#115047",
          40: "#0F443D",
          50: "#0C3933",
        },
        secondary: {
          base: "#46BFB4",
          20: "#389990",
          30: "#5E9C93",
          50: "#8CB8B2",
          75: "#D4ECEA",
        },
        black: "#0C0C0C",
        background: "#FBFBFB",
        gray: {
          1: "#2D2D2D",
          2: "#444444",
          3: "#505050",
          4: "#717171",
        },
        light: {
          1: "#777778",
          2: "#C7C6C6",
          3: "#e7e7e7",
          4: "#f5f5f5",
        },
        success: "#198754",
        "success-light": "#D1F7E5",
        error: "#C91433",
        "error-light": "#FAE7EB",
      },
      boxShadow: {
        "custom-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        shadow1: "-2px 2px 10px 0px rgba(140,144,149,.12)",
        shadow2: "-20px 20px 15px 0px rgba(140,144,149,1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
