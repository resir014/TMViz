import create from 'zustand';
import { GamepadsMap } from '.';

export const useGamepadStore = create<GamepadsMap>(() => ({}));

const addGamepad = (gamepad: Gamepad | null) => {
  if (gamepad) {
    useGamepadStore.setState({
      [gamepad.index]: gamepad,
    });
  }
};

const handleGamepadConnected = (e: GamepadEvent) => {
  // eslint-disable-next-line no-console
  console.log(
    'Gamepad connected at index %d: %s. %d buttons, %d axes.',
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
  addGamepad(e.gamepad);
};

const handleGamepadDisconnected = (e: GamepadEvent) => {
  // eslint-disable-next-line no-console
  console.log('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id);
};

if (typeof window !== 'undefined') {
  window.addEventListener('gamepadconnected', handleGamepadConnected);
  window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

  const scanGamepads = () => {
    const activeGamepads = navigator.getGamepads ? navigator.getGamepads() : [];

    if (activeGamepads) {
      for (let i = 0; i < activeGamepads.length; i++) {
        if (activeGamepads[i]) {
          addGamepad(activeGamepads[i]);
        }
      }
    }

    requestAnimationFrame(scanGamepads);
  };

  requestAnimationFrame(scanGamepads);
}
