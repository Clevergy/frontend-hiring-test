import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './**/*.{ts,tsx,svg,mdx}',
    '../../apps/**/*.{ts,tsx,svg,mdx}',
    '../../packages/**/*.{ts,tsx,svg,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--clevergy-font-family, "Inter")',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        clevergy: {
          // Core design tokens
          'primary': 'var(--clevergy-color-primary, #0d9488)',
          'secondary': 'var(--clevergy-color-secondary, #FEC639)',
          'text': 'var(--clevergy-color-text, #171717)',
          'subtext': 'var(--clevergy-color-subtext, #737373)',
          'unselected': 'var(--clevergy-color-unselected, #a3a3a3)',
          'border': 'var(--clevergy-color-border, #d4d4d4)',
        },
      },
    },
  },
};

export default config;
