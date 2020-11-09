import { hsl, parseToHsl, transparentize } from 'polished'
import * as React from 'react'
import isValidHex from '~/utils/isValidHex'
import theme from '~/utils/theme'

function useTelemetryInputStyle(value = 0, color: string = theme.colors.orange[500]) {
  // Find the proper HSL lightness based on max-val/min-val percentage:
  // (maxVal - minVal) * percentage + minVal
  const telemetryStyle = React.useMemo(() => {
    if (color) {
      if (isValidHex(color)) {
        const colorHsl = parseToHsl(color)

        return hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * ((0.75 - 0.25) * (value || 0 * 100) + 0.25))
      }

      return transparentize(Math.abs((value || 1) - 1), color)
    }

    return color
  }, [value, color])

  return telemetryStyle
}

export default useTelemetryInputStyle
