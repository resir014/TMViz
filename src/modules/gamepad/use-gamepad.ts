/* eslint-disable no-plusplus */
import * as React from 'react'
import { GamepadsMap } from './types'

export default function useGamepad(callback?: (gamepads: GamepadsMap) => void) {
  const raf = React.useRef<number>()
  const gamepadsRef = React.useRef<GamepadsMap>({})

  const addGamepad = (gamepad: Gamepad | null) => {
    if (gamepad) {
      gamepadsRef.current = {
        ...gamepadsRef.current,
        [gamepad.index]: gamepad
      }

      if (callback) {
        callback(gamepadsRef.current)
      }
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
      const activeGamepads = navigator.getGamepads ? navigator.getGamepads() : []

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

  return gamepadsRef.current
}
