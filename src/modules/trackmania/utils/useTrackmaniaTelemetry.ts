import { useGamepad } from '~/modules/gamepad'
import { ControllerTelemetry } from '~/types/overlay'
import useOverlayConfig from './useOverlayConfig'

function determineSteeringDpadValue(gamepad: Gamepad, config?: string, direction: 'left' | 'right' = 'right'): number {
  const button = gamepad.buttons[Number(config)]

  if (button?.value) {
    if (direction === 'left') {
      return -button.value
    }

    return button.value
  }

  return 0
}

function useTrackmaniaTelemetry(): ControllerTelemetry {
  const { appearance, config } = useOverlayConfig()
  const { gamepads } = useGamepad()
  const currentGamepad = gamepads[parseInt(config.controllerIndex || '0', 10)]

  if (currentGamepad) {
    return {
      isConnected: true,
      appearance,
      data: {
        accelerate: currentGamepad.buttons[Number(config.accelerateButton)].value,
        brake: currentGamepad.buttons[Number(config.brakeButton)].value,
        steering:
          determineSteeringDpadValue(currentGamepad, config.steeringLeftButton, 'left') ||
          determineSteeringDpadValue(currentGamepad, config.steeringRightButton, 'right') ||
          currentGamepad.axes[Number(config.steeringAxis)],
        steeringDeadzone: Number(config.steeringDeadzone)
      }
    }
  }

  return { isConnected: false, data: {} }
}

export default useTrackmaniaTelemetry
