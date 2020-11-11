export interface ControllerData {
  accelerate: number
  brake: number
  steering: number
  steeringDeadzone: number
}

export interface ControllerTelemetry {
  isConnected?: boolean
  data: Partial<ControllerData>
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

export interface TrackmaniaOverlayConfig {
  framerate: string
  accelerateButton: string
  brakeButton: string
  steeringAxis: string
  steeringDeadzone: string
}

export interface GlobalOverlaySettings {
  appearance: GamepadAppearanceSettings
  config: TrackmaniaOverlayConfig
}
