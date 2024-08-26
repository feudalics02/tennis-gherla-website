/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            textUnderlineOffset: {
                14: '14px',
            }
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
