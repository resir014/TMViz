import { ParsedUrlQuery } from 'querystring'
import { DEFAULT_ACCELERATE_BUTTON, DEFAULT_BRAKE_BUTTON, DEFAULT_STEERING_AXIS, DEFAULT_STEERING_DEADZONE } from '~/types/constants'
import { TrackmaniaOverlayConfig } from '~/types/overlay'

export default function parseOverlayConfig(
  { ...config }: Partial<ParsedUrlQuery> = {},
  version?: number
): Partial<TrackmaniaOverlayConfig> {
  if (version === 1) {
    return {
      accelerateButton: (config?.accelerateButton as string) || `${DEFAULT_ACCELERATE_BUTTON}`,
      brakeButton: (config?.brakeButton as string) || `${DEFAULT_BRAKE_BUTTON}`,
      steeringAxis: config?.steeringAxis as string,
      steeringDeadzone: (config?.steeringDeadzone as string) || `${DEFAULT_STEERING_DEADZONE}`,
      accelerateAxis: config?.accelerateAxis as string,
      steeringLeftButton: config?.steeringLeftButton as string,
      steeringRightButton: config?.steeringRightButton as string
    }
  }

  return {
    accelerateButton: (config?.accelerateButton as string) || `${DEFAULT_ACCELERATE_BUTTON}`,
    brakeButton: (config?.brakeButton as string) || `${DEFAULT_BRAKE_BUTTON}`,
    steeringAxis: config?.steeringAxis as string,
    steeringDeadzone: (config?.steeringDeadzone as string) || `${DEFAULT_STEERING_DEADZONE}`
  }
}
