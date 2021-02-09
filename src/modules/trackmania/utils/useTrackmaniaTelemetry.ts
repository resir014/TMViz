import { useGamepad } from '~/modules/gamepad'
import { ControllerTelemetry, TrackmaniaOverlayConfig } from '~/types/overlay'

function normalizeSteeringDpadValue(gamepad: Gamepad, config?: string, direction: 'left' | 'right' = 'right'): number {
  if (config) {
    const button = gamepad.buttons[Number(config)]

    if (button?.value) {
      if (direction === 'left') {
        return -button.value
      }

      return button.value
    }
  }

  return 0
}

function normalizeButtonValue(gamepad: Gamepad, config?: string) {
  if (config) {
    const button = gamepad.buttons[Number(config)]

    if (button) {
      return button.value
    }
  }

  return 0
}

function normalizeAxisValue(gamepad: Gamepad, config?: string) {
  if (config) {
    const axis = gamepad.axes[Number(config)]

    return axis || 0
  }

  return 0
}

function useTrackmaniaTelemetry(config: Partial<TrackmaniaOverlayConfig>): ControllerTelemetry {
  const { gamepads } = useGamepad()
  const currentGamepad = gamepads[parseInt(config.controllerIndex || '0', 10)]

  if (currentGamepad) {
    return {
      isConnected: true,
      data: {
        accelerate: normalizeButtonValue(currentGamepad, config.accelerateButton),
        brake: normalizeButtonValue(currentGamepad, config.brakeButton),
        steering:
          normalizeSteeringDpadValue(currentGamepad, config.steeringLeftButton, 'left') ||
          normalizeSteeringDpadValue(currentGamepad, config.steeringRightButton, 'right') ||
          normalizeAxisValue(currentGamepad, config.steeringAxis),
        steeringDeadzone: Number(config.steeringDeadzone)
      }
    }
  }

  return { isConnected: false, data: {} }
}

export default useTrackmaniaTelemetry
