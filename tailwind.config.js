/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Context/**/*.{js,ts,jsx,tsx}",
    "./contracts/**/*.{js,ts,jsx,tsx}",
    "./scripts/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "",
  ],
  theme: {
    fontFamily: {
      Poetsen: ['"Poetsen One"', "serif"],
      Raleway: ["Raleway"],
      Poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
