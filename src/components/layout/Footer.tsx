import { Flex, Text } from '@chakra-ui/core'
import * as React from 'react'

const Navigation: React.FC = () => (
  <Flex as="footer" flexDirection="column" px={6} py={3}>
    <Text fontSize="sm">TMViz &copy; 2020 resir014. Released as open-source under the MIT license.</Text>
  </Flex>
)

export default Navigation
