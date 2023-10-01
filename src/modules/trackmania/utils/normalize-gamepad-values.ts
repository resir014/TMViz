export function normalizeSteeringDpadValue(
  gamepad?: Gamepad,
  config?: string,
  direction: 'left' | 'right' = 'right',
): number {
  if (gamepad && config) {
    const button = gamepad.buttons[Number(config)];

    if (button?.value) {
      if (direction === 'left') {
        return -button.value;
      }

      return button.value;
    }
  }

  return 0;
}

export function normalizeButtonValue(gamepad?: Gamepad, config?: string) {
  if (gamepad && config) {
    const button = gamepad.buttons[Number(config)];

    if (button) {
      return button.value;
    }
  }

  return 0;
}

export function normalizeAxisValue(gamepad?: Gamepad, config?: string) {
  if (gamepad && config) {
    const axis = gamepad.axes[Number(config)];

    return axis || 0;
  }

  return 0;
}
