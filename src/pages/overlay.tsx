import * as React from 'react'
import { NextPage } from 'next'

import { ControllerTelemetry, OverlayRoot } from '~/modules/trackmania'

const OverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <ControllerTelemetry />
    </OverlayRoot>
  )
}

export default OverlayPage
