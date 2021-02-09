import * as React from 'react'
import { NextPage } from 'next'

import { ControllerTelemetry, OverlayRoot } from '~/modules/trackmania'
import useOverlayConfig from '~/modules/trackmania/utils/useOverlayConfig'

const OverlayPage: NextPage = () => {
  const { appearance, config } = useOverlayConfig()

  return (
    <OverlayRoot>
      <ControllerTelemetry appearance={appearance} config={config} />
    </OverlayRoot>
  )
}

export default OverlayPage
