/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                heading: ['Playfair Display', 'serif'],
            },
            textUnderlineOffset: {
                14: '14px',
            },
            colors: {
                'primary': '#0c4a6e',
                'secondary': '#0369a1',
                'accent': '#f59e0b',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeIn 0.8s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.unselected-button': {
                    '@apply relative cursor-pointer hover:text-sky-900 transition-all ease-in-out px-0 py-2': {},
                    '&::before, &::after': {
                        '@apply transition-[width] ease-in-out duration-500 absolute bg-sky-900 origin-center h-[2px] w-0 bottom-0': {},
                        content: '""',
                    },
                    '&::before': {
                        '@apply left-[50%] hover:w-[100%]': {},
                        transform: 'translateX(-50%)',
                    },
                    '&::after': {
                        '@apply right-[50%] hover:w-[50%]': {},
                        transform: 'translateX(50%)',
                    },
                },
                '.selected-button': {
                    '@apply relative cursor-pointer text-sky-900 transition-all ease-in-out px-0 py-2': {},
                    '&::before, &::after': {
                        '@apply transition-[width] ease-in-out duration-500 absolute bg-sky-900 origin-center h-[2px] w-0 bottom-0': {},
                        content: '""',
                    },
                    '&::before': {
                        '@apply left-[50%] w-[100%]': {},
                        transform: 'translateX(-50%)',
                    },
                    '&::after': {
                        '@apply right-[50%] w-[50%]': {},
                        transform: 'translateX(50%)',
                    },
                }
            };

            addUtilities(newUtilities);
        }
    ],
}
