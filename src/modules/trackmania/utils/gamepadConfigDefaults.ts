import { UseGamepadConfig } from '~/types/gamepad'

export const DEFAULT_FRAMERATE = 60
export const DEFAULT_ACCELERATE_BUTTON = 7
export const DEFAULT_BRAKE_BUTTON = 6
export const DEFAULT_STEERING_AXIS = 0
export const DEFAULT_STEERING_DEADZONE = 0.01

function gamepadConfigDefaults(config?: Partial<Record<string, any>>): UseGamepadConfig {
  return {
    accelerateButton: config?.accelerateButton || DEFAULT_ACCELERATE_BUTTON,
    brakeButton: config?.brakeButton || DEFAULT_BRAKE_BUTTON,
    framerate: config?.framerate || DEFAULT_FRAMERATE,
    steeringAxis: config?.steeringAxis || DEFAULT_STEERING_AXIS,
    steeringDeadzone: config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE
  }
}

export default gamepadConfigDefaults
