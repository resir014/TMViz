import { useColorMode } from '@chakra-ui/react'
import * as React from 'react'
import theme from '~/utils/theme'

export type LogoProps = React.SVGProps<SVGSVGElement>

const Logo: React.FC<LogoProps> = ({ width, height, ...rest }) => {
  const { colorMode } = useColorMode()

  return (
    <svg width={width} height={height} viewBox="0 0 337 124" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M3.40909 39.3523V27.1818H60.75V39.3523H39.375V97H24.7841V39.3523H3.40909ZM70.1932 27.1818H88.3977L107.625 74.0909H108.443L127.67 27.1818H145.875V97H131.557V51.5568H130.977L112.909 96.6591H103.159L85.0909 51.3864H84.5114V97H70.1932V27.1818Z"
        fill={colorMode === 'light' ? theme.colors.black : theme.colors.white}
      />
      <rect width="169" height="124" transform="translate(168)" fill={colorMode === 'light' ? theme.colors.black : theme.colors.white} />
      <path
        d="M194.682 27.1818L211.557 80.2273H212.205L229.114 27.1818H245.477L221.409 97H202.386L178.284 27.1818H194.682ZM253.608 97V44.6364H268.131V97H253.608ZM260.903 37.8864C258.767 37.8864 256.926 37.1705 255.381 35.7386C253.835 34.2841 253.062 32.5455 253.062 30.5227C253.062 28.5 253.835 26.7727 255.381 25.3409C256.926 23.9091 258.767 23.1932 260.903 23.1932C263.063 23.1932 264.915 23.9091 266.46 25.3409C268.006 26.7727 268.778 28.5 268.778 30.5227C268.778 32.5455 268.006 34.2841 266.46 35.7386C264.915 37.1705 263.063 37.8864 260.903 37.8864ZM279.491 97V88.3409L305.128 56.6023V56.2273H280.378V44.6364H322.616V54.0795L298.548 85.0341V85.4091H323.503V97H279.491Z"
        fill={colorMode === 'light' ? theme.colors.white : theme.colors.black}
      />
    </svg>
  )
}

export default Logo
