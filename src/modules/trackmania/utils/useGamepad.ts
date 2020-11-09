import * as React from 'react'
import { ControllerData, UseGamepadConfig } from '~/types/gamepad'
import useInterval from '../../../utils/useInterval'
import gamepadConfigDefaults from './gamepadConfigDefaults'

export default function useGamepad(config?: Partial<UseGamepadConfig>) {
  const [isControllerConnected, setIsControllerConnected] = React.useState(false)
  const [controllerData, setControllerData] = React.useState<ControllerData | undefined>(undefined)

  const { framerate, accelerateButton, brakeButton } = gamepadConfigDefaults(config)

  const handleGamepadConnected = (e: GamepadEvent) => {
    // eslint-disable-next-line no-console
    console.log(
      'Gamepad connected at index %d: %s. %d buttons, %d axes.',
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length
    )
    setIsControllerConnected(true)
  }

  const handleGamepadDisconnected = (e: GamepadEvent) => {
    // eslint-disable-next-line no-console
    console.log('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id)
    // eslint-disable-next-line no-alert
    alert('Gamepad disconnected! Replug it to initate detection.')
    setIsControllerConnected(false)
    setControllerData(undefined)
  }

  React.useEffect(() => {
    window.addEventListener<any>('gamepadconnected', handleGamepadConnected)
    window.addEventListener<any>('gamepaddisconnected', handleGamepadDisconnected)

    return () => {
      window.removeEventListener<any>('gamepadconnected', handleGamepadConnected)
      window.removeEventListener<any>('gamepaddisconnected', handleGamepadDisconnected)
    }
  }, [])

  useInterval(() => {
    if ('getGamepads' in navigator) {
      const activeGamepad = navigator.getGamepads()[0]

      if (activeGamepad) {
        // eslint-disable-next-line no-console
        const accelerate = activeGamepad.buttons[accelerateButton].value
        const brake = activeGamepad.buttons[brakeButton].value
        const steering = activeGamepad.axes[0]
        setControllerData({ accelerate, brake, steering })
      }
    }
  }, 1000 / framerate)

  return { isControllerConnected, controllerData }
}
