import { Box } from '@chakra-ui/core'
import * as React from 'react'

const TelemetryGridItem: React.FC = ({ children }) => {
  return (
    <Box width="100%" borderRadius={8} overflow="hidden">
      {children}
    </Box>
  )
}

export default TelemetryGridItem
