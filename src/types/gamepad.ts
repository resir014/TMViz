export interface ControllerData {
  accelerate: number
  brake: number
  steering: number
}

export interface SteeringValues {
  left: number
  right: number
}

export interface GamepadAppearanceSettings {
  accelerateColor?: string
  brakeColor?: string
  steeringColor?: string
}

export interface UseGamepadConfig {
  framerate: number
  accelerateButton: number
  brakeButton: number
  steeringAxis: number
  steeringDeadzone: number
}

export interface GlobalOverlaySettings {
  appearance: GamepadAppearanceSettings
  config: UseGamepadConfig
}
