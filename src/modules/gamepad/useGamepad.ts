/* eslint-disable no-plusplus */
import * as React from 'react'
import { GamepadsContext } from '~/modules/gamepad/GamepadsContext'
import { GamepadsMap } from './types'

export default function useGamepad() {
  const raf = React.useRef<number>()
  const gamepads = React.useRef<GamepadsMap>({})
  const { gamepads: globalGamepads, updateGlobalGamepads } = React.useContext(GamepadsContext)

  const addGamepad = (gamepad: Gamepad | null) => {
    if (gamepad) {
      gamepads.current = {
        ...gamepads.current,
        [gamepad.index]: gamepad
      }

      updateGlobalGamepads(gamepads.current)
    }
  }

  const handleGamepadConnected = (e: GamepadEvent) => {
    // eslint-disable-next-line no-console
    console.log(
      'Gamepad connected at index %d: %s. %d buttons, %d axes.',
      e.gamepad.index,
      e.gamepad.id,
      e.gamepad.buttons.length,
      e.gamepad.axes.length
    )
    addGamepad(e.gamepad)
  }

  const handleGamepadDisconnected = (e: GamepadEvent) => {
    // eslint-disable-next-line no-console
    console.log('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id)
  }

  React.useEffect(() => {
    window.addEventListener<any>('gamepadconnected', handleGamepadConnected)
    window.addEventListener<any>('gamepaddisconnected', handleGamepadDisconnected)

    return () => {
      window.removeEventListener<any>('gamepadconnected', handleGamepadConnected)
      window.removeEventListener<any>('gamepaddisconnected', handleGamepadDisconnected)
    }
  }, [])

  const scanGamepads = () => {
    if ('getGamepads' in navigator) {
      const activeGamepads = navigator.getGamepads()

      if (activeGamepads) {
        for (let i = 0; i < activeGamepads.length; i++) {
          if (activeGamepads[i]) {
            addGamepad(activeGamepads[i])
          }
        }
      }
    }

    raf.current = requestAnimationFrame(scanGamepads)
  }

  React.useEffect(() => {
    raf.current = requestAnimationFrame(scanGamepads)

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [])

  return { globalGamepads }
}
