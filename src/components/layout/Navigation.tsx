import { Flex, Box, Link as ChakraLink, FlexProps, IconButton, useColorMode, Tooltip } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import * as React from 'react'
import Link from 'next/link'
import Logo from './Logo'

export type NavigationProps = FlexProps

const Navigation: React.FC<NavigationProps> = ({ className, style, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const toggleText = `Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`

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
        <Link href="/changelog" passHref>
          <ChakraLink mr={6} color="inherit">
            Changelog
          </ChakraLink>
        </Link>
      </Box>
      <Box ml={6}>
        <Tooltip label={toggleText} placement="bottom-end">
          <IconButton
            variant="ghost"
            aria-label={toggleText}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Box>
    </Flex>
  )
}

export default Navigation
