/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAFA',
        dark: '#151414',
        lightGrey: "#F5F5F5",
        darkGrey: '#E5E5E5',
        veryDarkGrey: "#747474",
      },
      fontFamily: {
        satoshi: ['Satoshi-Regular', 'Satoshi-Medium', 'Satoshi-Bold', 'sans-serif'],
        neue: ['NeueRegrade-Regular', 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        'title':'6rem', /** 96px */
        'subtitle':'3.75rem', /** 60px */
        'marque':'1.5rem', /** 24px */
        'link':'1.5rem', /** 16px */
        'p':'1.5rem', /** 14px */
        'author':'1.5rem', /** 12px */
      },
    },
  },
  plugins: [],
}