import * as React from 'react'
import { Box } from '@chakra-ui/core'
import theme from '~/utils/theme'

import telemetryStyles from '../utils/telemetryStyles'
import isValidHex from '../utils/isValidHex'

interface ThrottleIndicatorProps {
  value?: number
  color?: string
}

const ThrottleIndicator: React.FC<ThrottleIndicatorProps> = ({ value, color }) => {
  return (
    <Box
      gridArea="throttle"
      css={telemetryStyles(value, color && isValidHex(color) ? color : theme.colors.green[500])}
      width="100%"
      height="100%"
    />
  )
}

export default ThrottleIndicator
