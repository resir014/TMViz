import { useGamepad } from '~/modules/gamepad'
import { ControllerData } from '~/types/overlay'
import useOverlayConfig from './useOverlayConfig'

function useTrackmaniaTelemetry(controllerIndex = 0): Partial<ControllerData> {
  const { config } = useOverlayConfig()
  const { globalGamepads } = useGamepad()
  const currentGamepad = globalGamepads[controllerIndex]

  if (currentGamepad) {
    return {
      accelerate: currentGamepad.buttons[Number(config.accelerateButton)].value,
      brake: currentGamepad.buttons[Number(config.brakeButton)].value,
      steering: currentGamepad.axes[Number(config.steeringAxis)],
      steeringDeadzone: Number(config.steeringDeadzone)
    }
  }

  return {}
}

export default useTrackmaniaTelemetry
