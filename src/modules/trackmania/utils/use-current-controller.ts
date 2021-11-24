import * as React from 'react';
import { dequal } from 'dequal';
import { useOverlayConfig } from './use-overlay-config';
import { useGamepadStore } from '~/modules/gamepad';
import { parseNumber } from '~/utils/query-parser';

export function useCurrentController() {
  const { config } = useOverlayConfig();
  return useGamepadStore(
    React.useCallback(
      state => state[parseNumber(config.controllerIndex) ?? 0],
      [config.controllerIndex],
    ),
    (prevState, newState) => dequal(prevState, newState),
  );
}
