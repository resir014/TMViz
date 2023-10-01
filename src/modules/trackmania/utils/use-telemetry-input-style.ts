import * as React from 'react';
import { hsl, parseToHsl, transparentize } from 'polished';
import isValidHex from '~/utils/is-valid-hex';
import theme from '~/utils/theme';

const defaultColor = theme.colors.gray[500];

export interface UseTelemetryInputStyleProps {
  color?: string;
  isConnected?: boolean;
  disableTransparency?: boolean;
}

function getColorHsl(color: unknown) {
  // Find the proper HSL lightness based on max-val/min-val percentage:
  // (maxVal - minVal) * percentage + minVal
  if (typeof color === 'string' && isValidHex(color)) {
    const colorHsl = parseToHsl(color);

    return hsl(colorHsl.hue, colorHsl.saturation, colorHsl.lightness * ((0.75 - 0.25) * 0 + 0.25));
  }

  return undefined;
}

export function useTelemetryInputStyle({
  color = defaultColor,
  isConnected,
  disableTransparency,
}: UseTelemetryInputStyleProps) {
  const backgroundColor = React.useMemo(() => {
    if (isConnected && color && isValidHex(color)) {
      return disableTransparency ? getColorHsl(color) : transparentize(0.75, color);
    }

    return disableTransparency ? getColorHsl(defaultColor) : transparentize(0.75, defaultColor);
  }, [color, isConnected, disableTransparency]);

  return backgroundColor;
}
