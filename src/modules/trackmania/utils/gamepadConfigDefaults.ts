import { UseGamepadConfig } from '~/types/gamepad'

export const DEFAULT_FRAMERATE = 60
export const DEFAULT_ACCELERATE_BUTTON = 7
export const DEFAULT_BRAKE_BUTTON = 6
export const DEFAULT_STEERING_AXIS = 0
export const DEFAULT_STEERING_DEADZONE = 0.01

function gamepadConfigDefaults(config?: Partial<Record<string, any>>): UseGamepadConfig {
  return {
    accelerateButton: parseInt(config?.accelerateButton || `${DEFAULT_ACCELERATE_BUTTON}`, 10),
    brakeButton: parseInt(config?.brakeButton || `${DEFAULT_BRAKE_BUTTON}`, 10),
    framerate: parseInt(config?.framerate || `${DEFAULT_FRAMERATE}`, 10),
    steeringAxis: parseInt(config?.steeringAxis || `${DEFAULT_STEERING_AXIS}`, 10),
    steeringDeadzone: parseInt(config?.steeringDeadzone || `${DEFAULT_STEERING_DEADZONE}`, 10)
  }
}

export default gamepadConfigDefaults
