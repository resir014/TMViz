import { parseAppearance } from '~/modules/parser/utils'
import { DEFAULT_ACCELERATE_BUTTON, DEFAULT_BRAKE_BUTTON, DEFAULT_STEERING_AXIS, DEFAULT_STEERING_DEADZONE } from '~/types/constants'
import { GlobalOverlaySettings } from '~/types/overlay'

const defaultConfig: GlobalOverlaySettings = {
  appearance: parseAppearance(),
  config: {
    accelerateButton: `${DEFAULT_ACCELERATE_BUTTON}`,
    brakeButton: `${DEFAULT_BRAKE_BUTTON}`,
    steeringAxis: `${DEFAULT_STEERING_AXIS}`,
    steeringDeadzone: `${DEFAULT_STEERING_DEADZONE}`,
    controllerIndex: '0'
  }
}

export default defaultConfig
