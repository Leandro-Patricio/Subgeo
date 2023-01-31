/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main_text: "#666666",
        lines_breaks: "#ECECEC",
        title: "#003399",
        subTitle: "#596543",
        titleServicos: "#222222",
        initialGradientBtn: "#47A5B1",
        finalGradientBtn: "#0A8797",
        bg_footer: "#151515",
        almost_white: "#ebebeb",
      },
      fontSize: {
        xxs: "0.65rem",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xxs: "400px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      // addVariant('child-hover', '& > *:hover');
    },
  ],
};
