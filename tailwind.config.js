/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Yeseva One", "serif"],
                sans: ["Source Sans Pro", "sans-serif"],
            },
            colors: {
                shilo: {
                    50: '#fbf5f5',
                    100: '#f8e8e9',
                    200: '#f2d6d7',
                    300: '#e3a6a9', // Default
                    400: '#da8f93',
                    500: '#c96a6f',
                    600: '#b44e53',
                    700: '#963f43',
                    800: '#7d373a',
                    900: '#693336',
                    950: '#381719',
                },
                eternity: {
                    50: '#f8f7ee',
                    100: '#eeedd3',
                    200: '#dfd9a9',
                    300: '#ccc178',
                    400: '#bdaa52',
                    500: '#ad9745',
                    600: '#957939',
                    700: '#785d30',
                    800: '#654c2e',
                    900: '#58412b', // Default
                    950: '#2b1e13',
                },
            },
        },
    },
    plugins: [],
};
