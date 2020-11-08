import * as React from 'react'
import { Box } from '@chakra-ui/core'
import theme from '~/utils/theme'

import telemetryStyles from '../utils/telemetryStyles'
import isValidHex from '../utils/isValidHex'

interface BrakeIndicatorProps {
  value?: number
  color?: string
}

const BrakeIndicator: React.FC<BrakeIndicatorProps> = ({ value, color }) => {
  return (
    <Box
      gridArea="brake"
      css={telemetryStyles(value, color && isValidHex(color) ? color : theme.colors.red[500])}
      width="100%"
      height="100%"
    />
  )
}

export default BrakeIndicator
