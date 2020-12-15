import { useGamepad } from '~/modules/gamepad'
import { ControllerTelemetry } from '~/types/overlay'
import useOverlayConfig from './useOverlayConfig'

function determineSteeringValue(value = 0, direction: 'left' | 'right' = 'right'): number {
  if (direction === 'left') {
    return -value
  }

  return value
}

function normaliseSteering(): number {
  return 0
}

function useTrackmaniaTelemetry(controllerIndex = 0): ControllerTelemetry {
  const { appearance, config } = useOverlayConfig()
  const { globalGamepads } = useGamepad()
  const currentGamepad = globalGamepads[controllerIndex]

  if (currentGamepad) {
    return {
      isConnected: true,
      appearance,
      data: {
        accelerate: currentGamepad.buttons[Number(config.accelerateButton)].value,
        brake: currentGamepad.buttons[Number(config.brakeButton)].value,
        steering:
          determineSteeringValue(
            config.steeringLeftButton ? currentGamepad.buttons[Number(config.steeringLeftButton)].value : undefined,
            'left'
          ) ||
          determineSteeringValue(
            config.steeringRightButton ? currentGamepad.buttons[Number(config.steeringRightButton)].value : undefined,
            'right'
          ) ||
          currentGamepad.axes[Number(config.steeringAxis)],
        steeringDeadzone: Number(config.steeringDeadzone)
      }
    }
  }

  return { isConnected: false, data: {} }
}

export default useTrackmaniaTelemetry
