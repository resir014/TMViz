import { Box, Heading } from '@chakra-ui/core'
import * as React from 'react'
import { Container } from '../layout'

const PageHeader: React.FC = ({ children }) => {
  return (
    <Box as="header" pt={8} px={6} pb={4}>
      <Container>
        <Heading as="h1" size="2xl">
          {children}
        </Heading>
      </Container>
    </Box>
  )
}

export default PageHeader
