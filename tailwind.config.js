/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Yeseva One', 'serif'],
            },
            colors: {
                whiskey: {
                    50: '#fbf7f1',
                    100: '#f6edde',
                    200: '#ebd7bd',
                    300: '#debb93',
                    400: '#d4a173', // default
                    500: '#c67f49',
                    600: '#b86b3e',
                    700: '#995435',
                    800: '#7c4530',
                    900: '#643a2a',
                    950: '#361d14',
                },
                'roman-coffee': {
                    50: '#f6f4f0',
                    100: '#e9e1d8',
                    200: '#d4c4b4',
                    300: '#bba189',
                    400: '#a78468',
                    500: '#997159',
                    600: '#7b5747', // default
                    700: '#69483f',
                    800: '#5a3e39',
                    900: '#4f3734',
                    950: '#2c1d1c',
                },
                'battleship-gray': {
                    50: '#f3f5f0',
                    100: '#e5e8df',
                    200: '#cfd4c2',
                    300: '#b0b99d',
                    400: '#8f9b78', // default
                    500: '#768260',
                    600: '#5b664a',
                    700: '#48503b',
                    800: '#3c4232',
                    900: '#343a2d',
                    950: '#1a1d16',
                },
                piper: {
                    50: '#fdf6ef',
                    100: '#fbe9d9',
                    200: '#f5d0b3',
                    300: '#efaf82',
                    400: '#e78550',
                    500: '#e2652d',
                    600: '#c84a21', // default
                    700: '#af3b1f',
                    800: '#8c3120',
                    900: '#712a1d',
                    950: '#3d120d',
                },
                'mine-shaft': {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d',
                    950: '#2b2b2b', // default
                },
            },
        },
    },
    plugins: [],
};
