import { useOverlayConfig } from './use-overlay-config';
import { useGamepadStore } from '~/modules/gamepad';
import { parseNumber } from '~/utils/query-parser';

export function useCurrentController() {
  const { config } = useOverlayConfig();
  const currentController = parseNumber(config.controllerIndex) ?? 0;
  return useGamepadStore(state => state[currentController]);
}
