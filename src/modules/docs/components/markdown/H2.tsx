import { Heading } from '@chakra-ui/react'
import * as React from 'react'

const H2: React.FC<JSX.IntrinsicElements['h2']> = ({ children, ...rest }) => (
  <Heading as="h2" size="md" {...rest}>
    {children}
  </Heading>
)

export default H2
