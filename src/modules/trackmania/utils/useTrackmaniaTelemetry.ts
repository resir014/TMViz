import { useGamepad } from '~/modules/gamepad'
import { ControllerTelemetry } from '~/types/overlay'
import useOverlayConfig from './useOverlayConfig'

function useTrackmaniaTelemetry(controllerIndex = 0): ControllerTelemetry {
  const { config } = useOverlayConfig()
  const { globalGamepads } = useGamepad()
  const currentGamepad = globalGamepads[controllerIndex]

  if (currentGamepad) {
    return {
      isConnected: true,
      data: {
        accelerate: currentGamepad.buttons[Number(config.accelerateButton)].value,
        brake: currentGamepad.buttons[Number(config.brakeButton)].value,
        steering: currentGamepad.axes[Number(config.steeringAxis)],
        steeringDeadzone: Number(config.steeringDeadzone)
      }
    }
  }

  return { isConnected: false, data: {} }
}

export default useTrackmaniaTelemetry
