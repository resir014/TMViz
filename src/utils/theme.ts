/* eslint-disable no-underscore-dangle */
import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import { transparentize } from 'polished';

export const customColors = {
  white: '#ffffff',
  black: '#121220',
  gray: {
    '50': '#f1f1f3',
    '100': '#e3e3e7',
    '200': '#c7c7d0',
    '300': '#acacb8',
    '400': '#9191a2',
    '500': '#78788c',
    '600': '#5f5f76',
    '700': '#474862',
    '800': '#2f324d',
    '900': '#181d3a',
  },
  red: {
    '50': '#fde7e7',
    '100': '#fab7b7',
    '200': '#f78787',
    '300': '#f45858',
    '400': '#f12828',
    '500': '#ee0000',
    '600': '#b60000',
    '700': '#860000',
    '800': '#550000',
    '900': '#250000',
  },
  orange: {
    '50': '#faf5e8',
    '100': '#faedca',
    '200': '#f8e094',
    '300': '#f4ca51',
    '400': '#f0a81e',
    '500': '#f48432',
    '600': '#e15f08',
    '700': '#c1470d',
    '800': '#9e3813',
    '900': '#822e14',
  },
  cyan: {
    '50': '#f1fafb',
    '100': '#daf7f9',
    '200': '#aceff3',
    '300': '#74e1ee',
    '400': '#2fc7e6',
    '500': '#1db9e7',
    '600': '#0d86c6',
    '700': '#116aa0',
    '800': '#125176',
    '900': '#11415b',
  },
  blue: {
    50: '#ebf8ff',
    100: '#bee3f8',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce',
    600: '#2b6cb0',
    700: '#2c5282',
    800: '#2a4365',
    900: '#1a365d',
  },
  green: {
    '50': '#e9f8f6',
    '100': '#cbf7ef',
    '200': '#98f3db',
    '300': '#57eac3',
    '400': '#44f2a8',
    '500': '#06c975',
    '600': '#06b15b',
    '700': '#0c934f',
    '800': '#107445',
    '900': '#105e3b',
  },
};

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  styles: {
    global: ({ colorMode }: any) => ({
      body: {
        bg: 'transparent',
        color: colorMode === 'dark' ? 'gray.50' : 'gray.900',
      },
      a: {
        color: colorMode === 'dark' ? 'turquoise.500' : 'blue.600',
      },
    }),
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
  },
  colors: customColors,
  components: {
    Button: {
      baseStyle: ({ colorMode }: any) => ({
        ...defaultTheme.components.Button.baseStyle,
        _focus: {
          boxShadow: `0 0 0 3px ${transparentize(
            0.4,
            colorMode === 'dark' ? customColors.green[400] : customColors.blue[500],
          )}`,
        },
      }),
    },
    Heading: {
      baseStyle: {
        fontWeight: 600,
      },
    },
    Link: {
      baseStyle: ({ colorMode }: any) => ({
        color: colorMode === 'dark' ? 'green.400' : 'blue.500',
        _hover: {
          textDecoration: 'underline',
        },
        _focus: {
          boxShadow: `0 0 0 3px ${transparentize(
            0.4,
            colorMode === 'dark' ? customColors.green[400] : customColors.blue[500],
          )}`,
        },
      }),
    },
    Popover: {
      baseStyle: ({ colorMode }: any) => ({
        content: {
          _focus: {
            boxShadow: `0 0 0 3px ${transparentize(
              0.4,
              colorMode === 'dark' ? customColors.green[400] : customColors.blue[500],
            )}`,
          },
        },
      }),
    },
  },
});

export default theme;
