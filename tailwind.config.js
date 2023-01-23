/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.html", "./blinkEye/*.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                solit: ["Solitreo", "cursive"],
            },
        },
    },
    plugins: [],
};
