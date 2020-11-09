import * as React from 'react'
import { parseToHsl, hsl } from 'polished'
import { Box, Flex } from '@chakra-ui/core'
import { SteeringValues } from '~/types/gamepad'
import theme from '~/utils/theme'
import isValidHex from '../../../utils/isValidHex'

interface ThrottleIndicatorProps {
  direction: 'left' | 'right'
  value?: number
  color?: string
  steeringDeadzone?: number
}

const SteeringIndicator: React.FC<ThrottleIndicatorProps> = ({ direction, value, color, steeringDeadzone = 0 }) => {
  const colorHsl = React.useMemo(() => parseToHsl(color && isValidHex(color) ? color : theme.colors.orange[400]), [color])

  const steerWidths = React.useMemo<SteeringValues>(() => {
    if (value) {
      return {
        left: value <= steeringDeadzone ? Math.abs(value * 100) : 0,
        right: value >= steeringDeadzone ? Math.abs(value * 100) : 0
      }
    }

    return { left: 0, right: 0 }
  }, [value])

  return (
    <Flex
      gridArea={direction}
      alignItems="center"
      justifyContent={direction === 'left' ? 'flex-end' : 'flex-start'}
      width="96px"
      height="140px"
      backgroundColor={hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * 0.25)}
      overflow="hidden"
    >
      <Box
        backgroundColor={hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * 0.75)}
        height="100%"
        style={{
          width: `${direction === 'left' ? steerWidths.left : steerWidths.right}%`
        }}
      />
    </Flex>
  )
}

export default SteeringIndicator
