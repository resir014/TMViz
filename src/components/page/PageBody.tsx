import { Box } from '@chakra-ui/core'
import * as React from 'react'
import { Container } from '../layout'

const PageBody: React.FC = ({ children }) => {
  return (
    <Box as="section" px={6} pt={0} pb={12}>
      <Container>{children}</Container>
    </Box>
  )
}

export default PageBody
