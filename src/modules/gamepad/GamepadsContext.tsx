import * as React from 'react'
import { GamepadsContextValue, GamepadsMap } from './types'

const initialState: GamepadsContextValue = {
  gamepads: {},
  updateGamepads: () => {
    //
  }
}

export const GamepadsContext = React.createContext(initialState)

export const GamepadsProvider: React.FC = ({ children }) => {
  const [state, updateState] = React.useState<GamepadsMap>(initialState.gamepads)

  return <GamepadsContext.Provider value={{ gamepads: state, updateGamepads: updateState }}>{children}</GamepadsContext.Provider>
}
