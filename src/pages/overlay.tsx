import * as React from 'react'
import { NextPage } from 'next'

import { ControllerTelemetry, OverlayRoot } from '~/modules/trackmania'
import { GamepadsProvider } from '~/modules/gamepad'

const OverlayPage: NextPage = () => {
  return (
    <GamepadsProvider>
      <OverlayRoot>
        <ControllerTelemetry />
      </OverlayRoot>
    </GamepadsProvider>
  )
}

export default OverlayPage
