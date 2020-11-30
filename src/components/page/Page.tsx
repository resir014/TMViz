import { Box } from '@chakra-ui/react'
import * as React from 'react'

const Page: React.FC = ({ children }) => {
  return (
    <Box as="article" flex="1 1 auto">
      {children}
    </Box>
  )
}

export default Page
