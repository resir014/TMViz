import { dequal } from 'dequal';
import * as React from 'react';
import { useGamepadStore } from '.';

export function useGamepad() {
  const gamepads = useGamepadStore(
    state => state,
    (prevState, newState) => dequal(prevState, newState),
  );
  return gamepads;
}

export function useIsGamepadActive(index: number) {
  const current = useGamepadStore(
    React.useCallback(state => state[index], [index]),
    (prevState, newState) => dequal(prevState, newState),
  );
  return !!current;
}
