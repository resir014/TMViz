import { Flex, Box, Link as ChakraLink, FlexProps } from '@chakra-ui/core'
import * as React from 'react'
import Link from 'next/link'
import Logo from './Logo'

export type NavigationProps = FlexProps

const Navigation: React.FC<NavigationProps> = ({ className, style, ...rest }) => {
  return (
    <Flex as="header" className={className} style={style} flexDirection="row" px={6} py={3} {...rest}>
      <Box mr={6} userSelect="none">
        <Logo height={24} />
      </Box>
      <Box as="nav" flex="1 1 auto">
        <Link href="/" passHref>
          <ChakraLink mr={6} color="inherit">
            Home
          </ChakraLink>
        </Link>
        <Link href="/about" passHref>
          <ChakraLink mr={6} color="inherit">
            About
          </ChakraLink>
        </Link>
      </Box>
    </Flex>
  )
}

export default Navigation
