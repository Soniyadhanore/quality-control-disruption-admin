/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow:{100:"#FFEFD3", 200:"#F9BE00"},
        white: { A700: "#ffffff" },
        green: { 50: "#EDFFDF", 200: "#2E8900" ,300:"#176B53"},
        gray : {150:"#a2a2a2", 200:"#808080", 250:"#E5E7EB", 300:"#F7F5F2"},
        red: { 700: "#BA1A1A", 100:"#DE372F",200:"#FFEDEA"},
        // black: { 900: "#000000", "900_66": "#00000066", "900_7e": "#0000007e" },
        // light_blue: { 800: "#006fcf", 900: "#006491", "800_01": "#007fb6" },
        // blue_gray: { "900_01": "#323232", "800_01": "#383f4f" },
        // light_green: { 900: "#2f8900", "900_66": "#2f890066" },
        // blue: { 50: "#e5f2ff", 100: "#c9e6ff", 900: "#1434cb" },
        // deep_orange: { 50: "#ffe1e0", "50_01": "#ffe2e0" },
        // deep_purple: { 500: "#7745af" },
        // amber: { 500: "#fdc40e" },
      },
    },
  },
  plugins: [],
};
