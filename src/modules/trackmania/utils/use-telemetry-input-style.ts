import * as React from 'react';
import { transparentize } from 'polished';
import isValidHex from '~/utils/is-valid-hex';
import theme from '~/utils/theme';

const defaultColor = theme.colors.gray[500];

export function useTelemetryInputStyle(color: string = defaultColor, isConnected?: boolean) {
  const backgroundColor = React.useMemo(() => {
    // Find the proper HSL lightness based on max-val/min-val percentage:
    // (maxVal - minVal) * percentage + minVal
    if (isConnected && color && isValidHex(color)) {
      return transparentize(0.75, color);
    }

    return transparentize(0.75, defaultColor);
  }, [color, isConnected]);

  return backgroundColor;
}
