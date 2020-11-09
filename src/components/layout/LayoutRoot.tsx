import { Flex, useColorMode } from '@chakra-ui/core'
import * as React from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import Footer from './Footer'

interface PageProps extends Omit<NextSeoProps, 'title'> {
  pageTitle?: string
  isDashboard?: boolean
}

const LayoutRoot: React.FC<PageProps> = ({ children, pageTitle, ...rest }) => {
  const { colorMode } = useColorMode()

  const backgroundColor = React.useMemo(() => {
    if (colorMode === 'dark') {
      return 'black'
    }

    return 'white'
  }, [colorMode])

  return (
    <Flex flexDirection="column" minHeight="100vh" overflowX="hidden" backgroundColor={backgroundColor}>
      <NextSeo title={pageTitle || ''} {...rest} />
      {children}
      <Footer />
    </Flex>
  )
}

export default LayoutRoot
