import { hsl, parseToHsl } from 'polished'
import * as React from 'react'
import isValidHex from '~/utils/isValidHex'

function useTelemetryInputStyle(value = 0, color?: string) {
  // Find the proper HSL lightness based on max-val/min-val percentage:
  // (maxVal - minVal) * percentage + minVal
  const telemetryStyle = React.useMemo(() => {
    if (color && isValidHex(color)) {
      const colorHsl = parseToHsl(color)

      return hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * ((0.75 - 0.25) * (value || 0 * 100) + 0.25))
    }

    return undefined
  }, [value, color])

  return telemetryStyle
}

export default useTelemetryInputStyle
