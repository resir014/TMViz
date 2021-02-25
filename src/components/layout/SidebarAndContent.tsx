import { Flex, FlexProps } from '@chakra-ui/react'
import * as React from 'react'

export type SidebarAndContentProps = FlexProps

const SidebarAndContent: React.FC<SidebarAndContentProps> = ({ children, ...rest }) => {
  return (
    <Flex flex="1 1 auto" pt="64px" {...rest}>
      {children}
    </Flex>
  )
}

export default SidebarAndContent
