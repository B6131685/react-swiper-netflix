/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nf-red-500": "hsl(350, 100%,45.9%)",
        "nf-red-550": "hsl(8, 100%,50.9%)",
        "nf-black-150": "hsl(0 0% 9%)"
      },
      gridTemplateColumns: {
        'slid-layout':'40px minmax(0,1fr) 40px'
      }
    },
  },
  plugins: [],
};
