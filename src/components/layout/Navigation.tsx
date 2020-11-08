import { Flex, Box, Link as ChakraLink, useColorMode } from '@chakra-ui/core'
import * as React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const Navigation: React.FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Flex as="header" flexDirection="row" px={6} py={3}>
      <Box mr={6} userSelect="none">
        <Logo mode={colorMode} height={24} />
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
