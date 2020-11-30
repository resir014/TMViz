/* eslint-disable no-underscore-dangle */
import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import { transparentize } from 'polished'

export const customColors = {
  white: '#ffffff',
  black: '#16161d',
  gray: {
    '50': '#e7e7e8',
    '100': '#cfcfd1',
    '200': '#b8b8ba',
    '300': '#a1a1a5',
    '400': '#8b8b8f',
    '500': '#76757a',
    '600': '#616166',
    '700': '#4d4d53',
    '800': '#393940',
    '900': '#27272e'
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
    '900': '#250000'
  },
  orange: {
    '50': '#fef5e7',
    '100': '#fce2b6',
    '200': '#f9cf85',
    '300': '#f7bb54',
    '400': '#f5a623',
    '500': '#cb891d',
    '600': '#a16c17',
    '700': '#764f10',
    '800': '#4c320a',
    '900': '#211604'
  },
  green: {
    '50': '#ebfaf6',
    '100': '#c2f0e4',
    '200': '#99e5d1',
    '300': '#70dbbd',
    '400': '#48d1a8',
    '500': '#1fc791',
    '600': '#00bf80',
    '700': '#008456',
    '800': '#005437',
    '900': '#002517'
  },
  turquoise: {
    '50': '#e6fffc',
    '100': '#b3fff5',
    '200': '#80ffec',
    '300': '#4dffe2',
    '400': '#1affd6',
    '500': '#00ffcd',
    '600': '#00b690',
    '700': '#008668',
    '800': '#005641',
    '900': '#00251c'
  },
  blue: {
    '50': '#e7f3fe',
    '100': '#b6dcfc',
    '200': '#85c2f9',
    '300': '#55a5f7',
    '400': '#2488f5',
    '500': '#0070f3',
    '600': '#0050b6',
    '700': '#003986',
    '800': '#002255',
    '900': '#000e25'
  },
  ultramarine: {
    '50': '#eaeefa',
    '100': '#c0c9f1',
    '200': '#97a4e8',
    '300': '#6d7edf',
    '400': '#4355d5',
    '500': '#2234ce',
    '600': '#1a249c',
    '700': '#131973',
    '800': '#0c0f49',
    '900': '#050620'
  },
  purple: {
    '50': '#f4ebfa',
    '100': '#dec2f0',
    '200': '#c599e6',
    '300': '#ab70dc',
    '400': '#8f47d2',
    '500': '#7928ca',
    '600': '#581e98',
    '700': '#3f1670',
    '800': '#260e47',
    '900': '#10061f'
  },
  magenta: {
    '50': '#ffe6f6',
    '100': '#ffb3e3',
    '200': '#ff80cc',
    '300': '#ff4db2',
    '400': '#ff1493',
    '500': '#d71176',
    '600': '#aa0d58',
    '700': '#7d093d',
    '800': '#500625',
    '900': '#23020f'
  }
}

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark'
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: 'transparent',
        color: colorMode === 'dark' ? 'gray.50' : 'gray.900'
      },
      a: {
        color: colorMode === 'dark' ? 'turquoise.500' : 'blue.600'
      }
    })
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
  },
  colors: customColors,
  components: {
    Button: {
      baseStyle: ({ colorMode }: any) => ({
        ...defaultTheme.components.Button.baseStyle,
        _focus: {
          boxShadow: `0 0 0 3px ${transparentize(0.4, colorMode === 'dark' ? customColors.turquoise[500] : customColors.blue[500])}`
        }
      })
    },
    Heading: {
      baseStyle: {
        fontWeight: 600
      }
    },
    Link: {
      baseStyle: ({ colorMode }: any) => ({
        color: colorMode === 'dark' ? 'turquoise.500' : 'blue.500',
        _hover: {
          textDecoration: 'underline'
        },
        _focus: {
          boxShadow: `0 0 0 3px ${transparentize(0.4, colorMode === 'dark' ? customColors.turquoise[500] : customColors.blue[500])}`
        }
      })
    },
    Popover: {
      baseStyle: ({ colorMode }: any) => ({
        content: {
          _focus: {
            boxShadow: `0 0 0 3px ${transparentize(0.4, colorMode === 'dark' ? customColors.turquoise[500] : customColors.blue[500])}`
          }
        }
      })
    }
  }
})

export default theme
