import { DEFAULT_ACCELERATE_BUTTON, DEFAULT_BRAKE_BUTTON, DEFAULT_STEERING_AXIS, DEFAULT_STEERING_DEADZONE } from '~/types/constants'
import { TrackmaniaOverlayConfig } from '~/types/overlay'

function gamepadConfigDefaults(config?: Partial<TrackmaniaOverlayConfig>): TrackmaniaOverlayConfig {
  return {
    accelerateButton: config?.accelerateButton || `${DEFAULT_ACCELERATE_BUTTON}`,
    brakeButton: config?.brakeButton || `${DEFAULT_BRAKE_BUTTON}`,
    steeringAxis: config?.steeringAxis || `${DEFAULT_STEERING_AXIS}`,
    steeringDeadzone: config?.steeringDeadzone || `${DEFAULT_STEERING_DEADZONE}`
  }
}

export default gamepadConfigDefaults
