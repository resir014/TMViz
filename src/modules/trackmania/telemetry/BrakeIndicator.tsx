import * as React from 'react'
import { Box } from '@chakra-ui/core'

import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'

interface BrakeIndicatorProps {
  value?: number
  color?: string
}

const BrakeIndicator: React.FC<BrakeIndicatorProps> = ({ value, color }) => {
  const backgroundColor = useTelemetryInputStyle(value, color)

  return <Box gridArea="brake" backgroundColor={backgroundColor} width="100%" height="100%" />
}

export default BrakeIndicator
