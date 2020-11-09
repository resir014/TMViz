import { Flex } from '@chakra-ui/core'
import Head from 'next/head'
import * as React from 'react'

const OverlayRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" minHeight="100vh" overflow="hidden">
      <Head>
        <title>Overlay &middot; TMViz</title>
      </Head>
      {children}
    </Flex>
  )
}

export default OverlayRoot
