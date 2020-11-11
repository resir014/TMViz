import { Flex, FlexProps, Link, Text } from '@chakra-ui/core'
import * as React from 'react'

export type FooterProps = FlexProps

const Footer: React.FC<FooterProps> = ({ className, style, ...rest }) => (
  <Flex as="footer" className={className} style={style} flexDirection="column" px={6} py={3} {...rest}>
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
    <Text fontSize="sm">
      This project is not affiliated with{' '}
      <Link href="https://trackmania.com/" isExternal>
        Trackmania
      </Link>{' '}
      or its developers,{' '}
      <Link href="https://nadeo.com/" isExternal>
        Ubisoft Nadeo
      </Link>
      . All trademarks used belong to their respective owners.
    </Text>
  </Flex>
)

export default Footer
