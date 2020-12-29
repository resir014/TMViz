export interface GamepadsMap {
  [key: string]: Gamepad
}

export interface GamepadsContextValue {
  gamepads: GamepadsMap
  updateGamepads: (gamepad: GamepadsMap) => void
}
