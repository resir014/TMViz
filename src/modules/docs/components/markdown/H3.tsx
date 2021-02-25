import { Heading } from '@chakra-ui/react'
import * as React from 'react'

const H3: React.FC<JSX.IntrinsicElements['h3']> = ({ children, ...rest }) => (
  <Heading as="h3" size="sm" {...rest}>
    {children}
  </Heading>
)

export default H3
