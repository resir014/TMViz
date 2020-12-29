export interface GamepadsMap {
  [key: number]: Gamepad
}

export interface GamepadsContextValue {
  gamepads: GamepadsMap
  updateGamepads: (gamepad: GamepadsMap) => void
}
