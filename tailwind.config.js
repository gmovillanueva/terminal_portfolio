/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        color_01: 'var(--color-color_01)',
        color_02: 'var(--color-color_02)',
        color_03: 'var(--color-color_03)',
        color_04: 'var(--color-color_04)',
        color_05: 'var(--color-color_05)',
        color_06: 'var(--color-color_06)',
        color_07: 'var(--color-color_07)',
        color_08: 'var(--color-color_08)',
        color_09: 'var(--color-color_09)',
        color_10: 'var(--color-color_10)',
        color_11: 'var(--color-color_11)',
        color_12: 'var(--color-color_12)',
        color_13: 'var(--color-color_13)',
        color_14: 'var(--color-color_14)',
        color_15: 'var(--color-color_15)',
        color_16: 'var(--color-color_16)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      textShadow: {
        medium: '0px 0px 4px var(--tw-shadow-color)',
        DEFAULT: '0px 0px 5px var(--tw-shadow-color)',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({ textShadow: value }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
