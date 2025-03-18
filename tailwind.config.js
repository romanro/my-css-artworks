/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
                icons: ['var(--font-icons)'],
            },
        },
    },
    plugins: [],
    purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
};
