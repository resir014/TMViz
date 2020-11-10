import * as React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { SteeringValues } from '~/types/gamepad'
import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'

interface ThrottleIndicatorProps {
  direction: 'left' | 'right'
  value?: number
  color?: string
  steeringDeadzone?: number
}

const SteeringIndicator: React.FC<ThrottleIndicatorProps> = ({ direction, value, color, steeringDeadzone = 0 }) => {
  const backgroundColor = useTelemetryInputStyle(color)

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
      backgroundColor={backgroundColor}
      overflow="hidden"
    >
      <Box
        backgroundColor={color}
        height="100%"
        style={{
          width: `${direction === 'left' ? steerWidths.left : steerWidths.right}%`
        }}
      />
    </Flex>
  )
}

export default SteeringIndicator
