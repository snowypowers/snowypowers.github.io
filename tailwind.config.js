module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  separator: '_', // Pug doesnt support ':' so we swap it to '_'
  theme: {
    extend: {},
  },
  plugins: [],
};
