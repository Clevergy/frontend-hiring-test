import sharedConfig from '@clevergy/shared/tailwind.config';
import { heroui } from '@heroui/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...sharedConfig.theme?.extend,
    },
  },
  plugins: [
    heroui({
      addCommonColors: true,
      layout: {
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        fontSize: {
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem', // text-large
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem', // text-large
        },
        radius: {
          small: '4px', // rounded-small
          medium: '6px', // rounded-medium
          large: '8px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium (default)
          large: '2px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            background: '#fafafa', // or DEFAULT
            foreground: '#060a17', // or 50 to 900 DEFAULT
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#111728',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};

export default config;
