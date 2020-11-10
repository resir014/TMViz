/* eslint-disable no-plusplus */
import * as React from 'react'
import { GamepadsContext } from '~/modules/gamepad/GamepadsContext'
import { GamepadValue } from '~/modules/gamepad/types'
import useInterval from '~/utils/useInterval'

export default function useGamepad() {
  const requestRef = React.useRef<number>()
  const [gamepads, setGamepads] = React.useState<Record<string, GamepadValue>>({})
  const { gamepads: globalGamepads, updateGlobalGamepads } = React.useContext(GamepadsContext)

  const addGamepad = (gamepad: Gamepad | null) => {
    if (gamepad) {
      updateGlobalGamepads({
        ...gamepads,
        [gamepad.index]: {
          buttons: gamepad.buttons,
          id: gamepad.id,
          axes: gamepad.axes
        }
      })

      setGamepads({
        ...gamepads,
        [gamepad.index]: {
          buttons: gamepad.buttons,
          id: gamepad.id,
          axes: gamepad.axes
        }
      })
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

  const scanGamepads = () => {
    const activeGamepads = navigator.getGamepads()

    if (activeGamepads) {
      for (let i = 0; i < activeGamepads.length; i++) {
        if (activeGamepads[i]) {
          addGamepad(activeGamepads[i])
        }
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener<any>('gamepadconnected', handleGamepadConnected)

    return () => {
      window.removeEventListener<any>('gamepadconnected', handleGamepadConnected)
    }
  }, [])

  const animate = (_: number) => {
    if ('getGamepads' in navigator) scanGamepads()
    requestRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  })

  useInterval(() => {
    if ('getGamepads' in navigator) scanGamepads()
  }, 1000)

  return { globalGamepads }
}
