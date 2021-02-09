import * as React from 'react'
import { useGamepad } from '~/modules/gamepad'
import { ControllerTelemetry, TrackmaniaOverlayConfig } from '~/types/overlay'

function normalizeSteeringDpadValue(gamepad?: Gamepad, config?: string, direction: 'left' | 'right' = 'right'): number {
  if (gamepad && config) {
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

function normalizeButtonValue(gamepad?: Gamepad, config?: string) {
  if (gamepad && config) {
    const button = gamepad.buttons[Number(config)]

    if (button) {
      return button.value
    }
  }

  return 0
}

function normalizeAxisValue(gamepad?: Gamepad, config?: string) {
  if (gamepad && config) {
    const axis = gamepad.axes[Number(config)]

    return axis || 0
  }

  return 0
}

function useTrackmaniaTelemetry(config: Partial<TrackmaniaOverlayConfig>): ControllerTelemetry {
  const { gamepads } = useGamepad()

  const currentGamepad = React.useMemo(() => {
    if (typeof config.controllerIndex === 'string') {
      return Number(config.controllerIndex || '0')
    }

    return Number(config.controllerIndex?.[0] || '0')
  }, [config.controllerIndex])

  if (gamepads[currentGamepad]) {
    return {
      isConnected: true,
      data: {
        accelerate: normalizeButtonValue(gamepads[currentGamepad], config.accelerateButton),
        brake: normalizeButtonValue(gamepads[currentGamepad], config.brakeButton),
        steering:
          normalizeSteeringDpadValue(gamepads[currentGamepad], config.steeringLeftButton, 'left') ||
          normalizeSteeringDpadValue(gamepads[currentGamepad], config.steeringRightButton, 'right') ||
          normalizeAxisValue(gamepads[currentGamepad], config.steeringAxis),
        steeringDeadzone: Number(config.steeringDeadzone)
      }
    }
  }

  return { isConnected: false, data: {} }
}

export default useTrackmaniaTelemetry
