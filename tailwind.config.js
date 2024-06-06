/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "32px",
          lg: "64px",
          xl: "86px",
        },
      },
      opacity: {
        50: "0.5", // Menambahkan nilai opacity 50
      },
      blur: {
        sm: "4px", // Menambahkan efek blur kecil
      },
      screens: {
        lg: "1280px",
        xl: "1440px",
      },

      colors: {
        primary: "#272626",
        secondary: "#0079FE",
      },
    },
  },
  plugins: [],
};
