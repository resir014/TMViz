import { Box, Link as ChakraLink, useColorMode, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { transparentize } from 'polished'
import * as React from 'react'
import { useSidebarDisclosure } from '../../utils'

import sidebarData from '../../_data/sidebarData.json'

const DocsSidebar: React.FC = () => {
  const { colorMode } = useColorMode()
  const { isOpen } = useSidebarDisclosure()
  const theme = useTheme()
  const router = useRouter()

  const backgroundColor = React.useMemo(
    () => (colorMode === 'dark' ? transparentize(0.9, theme.colors.green[400]) : transparentize(0.9, theme.colors.blue[500])),
    [theme, colorMode]
  )

  return (
    <Box
      as="aside"
      width="100%"
      maxWidth={280}
      display={[isOpen ? 'flex' : 'none', null, 'flex']}
      flexDirection="column"
      backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
      position={['fixed', null, 'relative']}
      top={['64px', null, 0]}
      left={[0, null]}
      bottom={[0, null]}
      borderRight={[null, null, '1px solid']}
      borderRightColor={[null, null, colorMode === 'dark' ? 'gray.800' : 'gray.100']}
      boxShadow={[colorMode === 'dark' ? 'dark-lg' : 'lg', null, 'none']}
      zIndex="docked"
    >
      <Box p={4} flex="1 1 auto" position="fixed" width="100%" maxWidth={280}>
        {sidebarData.map(data => (
          <Link key={data.id} href={data.url} passHref>
            <ChakraLink
              display="block"
              px={4}
              py={2}
              aria-current={router.asPath === data.url ? 'page' : undefined}
              backgroundColor={router.asPath === data.url ? backgroundColor : undefined}
              borderRadius="base"
              _hover={{
                backgroundColor
              }}
            >
              {data.title}
            </ChakraLink>
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default DocsSidebar
