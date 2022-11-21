/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: '#FFF8F4',
                    70: 'rgba(253, 228, 211, 0.5)',
                },
                
            },
            fontFamily:{
                abc: ["Raleway", "sans-serif"]
            }
        },
    },
    plugins: [],
}
