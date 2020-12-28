export interface GamepadsMap {
  [key: number]: Gamepad
}

export interface GamepadsContextValue {
  gamepads: GamepadsMap
  updateGlobalGamepads: (gamepad: GamepadsMap) => void
}
