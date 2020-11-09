import { Flex, Link, Text } from '@chakra-ui/core'
import * as React from 'react'

const Navigation: React.FC = () => (
  <Flex as="footer" flexDirection="column" px={6} py={3}>
    <Text fontSize="sm">
      TMViz &copy; 2020{' '}
      <Link href="https://resir014.xyz/" isExternal>
        resir014
      </Link>
      . Released as{' '}
      <Link href="https://github.com/resir014/TMViz" isExternal>
        open-source
      </Link>{' '}
      under the{' '}
      <Link href="https://github.com/resir014/TMViz/blob/trunk/LICENSE" isExternal>
        MIT license
      </Link>
      .
    </Text>
  </Flex>
)

export default Navigation
