/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customTextBlack: {
          DEFAULT: "#42403D",
        },
        customBgWhite: {
          DEFAULT: "#ffffff",
        },
        customTextWhite: {
          DEFAULT: "#ffffff",
        },
        customBtn: {
          DEFAULT: "#EA4C60",
          hover: "#792818",
        },
        customGray: {
          DEFAULT: "#F7F7F7",
          200: "#626C66",
        },
        customWhite: {
          DEFAULT: "#ffffff",
        },
        customBalck: {
          DEFAULT: "#43413E",
        },
        customRed: {
          DEFAULT: "#EA4C60",
        },
        customGreen: {
          DEFAULT: "#6B8631",
          100: "#626C66",
        },
        customCategory: {
          DEFAULT: "#638025",
        },
        customBgImg: {
          DEFAULT: "#EEF0EF",
        },
        customCream: {
          DEFAULT: "#638025",
        },
      },
    },
  },
  plugins: [],
};
