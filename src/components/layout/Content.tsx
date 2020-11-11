import { Flex, FlexProps } from '@chakra-ui/core'
import * as React from 'react'

export type ContentProps = FlexProps

const Content: React.FC<ContentProps> = ({ children, ...rest }) => {
  return (
    <Flex as="main" flexDirection="column" flex="1 1 auto" {...rest}>
      {children}
    </Flex>
  )
}

export default Content
