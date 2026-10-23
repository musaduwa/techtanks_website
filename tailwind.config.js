/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Logo orange (#F15F24 = 500). 600+ are darkened for WCAG AA text/button contrast.
        brand: {
          50: "#FFF6F1",
          100: "#FEE8DC",
          200: "#FCCDB5",
          300: "#F9A983",
          400: "#F5814F",
          500: "#F15F24",
          600: "#C4470F",
          700: "#A63A0C",
          800: "#82300F",
          900: "#682810",
        },
        // Logo navy (#0D262D = 900).
        ink: {
          50: "#F3F6F7",
          100: "#E0E9EC",
          200: "#C2D3D8",
          300: "#93B1BA",
          400: "#5E8794",
          500: "#3F6A77",
          600: "#2E5361",
          700: "#20404B",
          800: "#16323B",
          900: "#0D262D",
          950: "#07171C",
        },
      },
      maxWidth: { content: "1200px" },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(13, 38, 45, 0.16)",
        glow: "0 24px 70px -18px rgba(241, 95, 36, 0.35)",
      },
    },
  },
  plugins: [],
};
