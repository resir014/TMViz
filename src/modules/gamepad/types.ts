export interface GamepadValue {
  id: string
  axes: Gamepad['axes']
  buttons: Gamepad['buttons']
}

export interface GamepadsContextValue {
  gamepads: Record<string, GamepadValue>
  updateGlobalGamepads: (gamepad: Record<string, GamepadValue>) => void
}
