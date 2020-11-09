import * as React from 'react'
import { Flex } from '@chakra-ui/core'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { OverlayRoot } from '~/components/layout'
import { parseOverlayConfigs } from '~/modules/trackmania'

const ControllerTelemetry = dynamic(() => import('~/modules/trackmania'))

const OverlayPage: NextPage = () => {
  const router = useRouter()

  const parsedConfig = React.useMemo(() => parseOverlayConfigs(router.query), [router.query])

  return (
    <OverlayRoot>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" flex="1 1 auto">
        <ControllerTelemetry appearance={parsedConfig.appearance} config={parsedConfig.config} />
      </Flex>
    </OverlayRoot>
  )
}

export default OverlayPage
