import * as React from 'react'
import { Box } from '@chakra-ui/core'

import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'

interface BrakeIndicatorProps {
  value?: number
  color?: string
}

const BrakeIndicator: React.FC<BrakeIndicatorProps> = ({ value, color }) => {
  const backgroundColor = useTelemetryInputStyle(color)

  return (
    <Box gridArea="brake" position="relative" width="100%" height="100%" backgroundColor={backgroundColor}>
      <Box position="absolute" top={0} bottom={0} left={0} right={0} backgroundColor={color} style={{ opacity: value || 0 }} />
    </Box>
  )
}

export default BrakeIndicator
