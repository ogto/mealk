// tailwind.config.mjs
console.log("TAILWIND CONFIG LOADED ✅");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Pretendard', sans-serif],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
