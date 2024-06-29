/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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