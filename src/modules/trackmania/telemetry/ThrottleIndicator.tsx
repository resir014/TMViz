import * as React from 'react'
import { Box } from '@chakra-ui/core'

import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'

interface ThrottleIndicatorProps {
  value?: number
  color?: string
}

const ThrottleIndicator: React.FC<ThrottleIndicatorProps> = ({ value, color }) => {
  const backgroundColor = useTelemetryInputStyle(value, color)

  return <Box gridArea="throttle" width="100%" height="100%" style={{ backgroundColor }} />
}

export default ThrottleIndicator
