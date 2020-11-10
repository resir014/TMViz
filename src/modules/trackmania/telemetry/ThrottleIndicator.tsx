import * as React from 'react'
import { Box } from '@chakra-ui/core'

import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'

interface ThrottleIndicatorProps {
  value?: number
  color?: string
}

const ThrottleIndicator: React.FC<ThrottleIndicatorProps> = ({ value, color }) => {
  const backgroundColor = useTelemetryInputStyle(color)

  return (
    <Box gridArea="throttle" position="relative" width="100%" height="100%" backgroundColor={backgroundColor}>
      <Box position="absolute" top={0} bottom={0} left={0} right={0} backgroundColor={color} style={{ opacity: value }} />
    </Box>
  )
}

export default ThrottleIndicator
