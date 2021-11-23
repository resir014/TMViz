import { useGamepadStore } from '.';

export function useGamepad() {
  const gamepads = useGamepadStore(state => state);
  return gamepads;
}

export function useIsGamepadActive(currentController: number) {
  const current = useGamepadStore(state => state[currentController]);
  return !!current;
}
