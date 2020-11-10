import { transparentize } from 'polished'
import * as React from 'react'
import isValidHex from '~/utils/isValidHex'
import theme from '~/utils/theme'

const defaultColor = theme.colors.gray[500]

function useTelemetryInputStyle(color: string = defaultColor) {
  // Find the proper HSL lightness based on max-val/min-val percentage:
  // (maxVal - minVal) * percentage + minVal
  const telemetryStyle = React.useMemo(() => {
    if (color && isValidHex(color)) {
      return transparentize(0.75, color)
    }

    return transparentize(0.75, defaultColor)
  }, [color])

  return telemetryStyle
}

export default useTelemetryInputStyle
