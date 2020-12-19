import { Grid, Box, Link as ChakraLink, FlexProps, IconButton, useColorMode, Tooltip, VisuallyHidden, Stack } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'

export type NavigationProps = FlexProps

const Navigation: React.FC<NavigationProps> = ({ className, style, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()

  const toggleText = `Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`

  return (
    <Grid
      as="header"
      className={className}
      style={style}
      gridTemplateColumns="auto 1fr auto"
      gridGap={4}
      px={6}
      py={3}
      backgroundColor={colorMode === 'dark' ? 'black' : 'white'}
      {...rest}
    >
      <Box display="flex" alignItems="center" userSelect="none">
        <Link href="/" passHref>
          <ChakraLink>
            <VisuallyHidden>TMViz</VisuallyHidden>
            <Logo height={24} aria-hidden />
          </ChakraLink>
        </Link>
      </Box>
      <Box as="nav" display="flex" alignItems="center">
        <Stack as="ul" direction="row" spacing={4} listStyleType="none">
          <Box as="li">
            <Link href="/about" passHref>
              <ChakraLink
                color="inherit"
                fontWeight={router.asPath === '/about' ? 600 : 400}
                textDecoration={router.asPath === '/about' ? 'underline' : 'none'}
              >
                About
              </ChakraLink>
            </Link>
          </Box>
          <Box as="li">
            <Link href="/changelog" passHref>
              <ChakraLink
                color="inherit"
                fontWeight={router.asPath === '/changelog' ? 600 : 400}
                textDecoration={router.asPath === '/changelog' ? 'underline' : 'none'}
              >
                Changelog
              </ChakraLink>
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Tooltip label={toggleText} placement="bottom-end">
          <IconButton
            variant="ghost"
            aria-label={toggleText}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Box>
    </Grid>
  )
}

export default Navigation
