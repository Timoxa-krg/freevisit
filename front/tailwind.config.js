/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Убедитесь, что пути совпадают с вашей структурой
    './src/pages/**/*.{js,ts,jsx,tsx}', // Для страниц (если используются)
    './src/components/**/*.{js,ts,jsx,tsx}', // Путь к файлам с использованием Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
