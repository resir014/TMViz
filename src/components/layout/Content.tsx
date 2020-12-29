import { Flex, FlexProps } from '@chakra-ui/react'
import * as React from 'react'

export type ContentProps = FlexProps

const Content: React.FC<ContentProps> = ({ children, ...rest }) => {
  return (
    <Flex flexDirection="column" flex="1 1 auto" px={6} pt={8} pb={12} {...rest}>
      {children}
    </Flex>
  )
}

export default Content
