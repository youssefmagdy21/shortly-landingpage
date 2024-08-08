/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        cyan: "hsl(180, 66%, 49%)",
        lightCyan: "hsl(179, 56%, 75%)",
        darkViolet: "hsl(257, 27%, 26%)",
      },
      secondary: {
        red: "hsl(0, 87%, 67%)",
      },
      neutral: {
        gray: "hsl(0, 0%, 75%)",
        lightGray: "hsl(230, 25%, 95%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        darkBlue: "hsl(255, 11%, 22%)",
        darkViolet: "hsl(260, 8%, 14%)",
      },
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    extend: {
      backgroundImage: {
        "boost-desktop": "url('src/assets/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('src/assets/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
