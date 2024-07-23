/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        screens: {
            mobile: "320px",
            tablet: "640px",
            laptop: "1024px",
            desktop: "1280px",
            largeDesktop: "1536px",
        },
    },
    plugins: [],
};
