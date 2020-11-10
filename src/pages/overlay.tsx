import * as React from 'react'
import { Flex } from '@chakra-ui/core'
import { NextPage } from 'next'

import { OverlayRoot } from '~/components/layout'
import ControllerTelemetry from '~/modules/trackmania'

const OverlayPage: NextPage = () => {
  return (
    <OverlayRoot>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" flex="1 1 auto">
        <ControllerTelemetry />
      </Flex>
    </OverlayRoot>
  )
}

export default OverlayPage
