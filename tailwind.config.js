module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 30px 7px rgb(0,0,0,0.45)",
      },
      height: {
        "screen-dynamic": "calc(var(--vh) * 100)",
      },
    },
  },
  plugins: [],
};
