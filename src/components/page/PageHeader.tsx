import { Box, BoxProps, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { Container, ContainerProps } from '../layout'

export interface PageHeaderProps extends BoxProps {
  title: string
  _containerProps?: ContainerProps
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, _containerProps, ...rest }) => {
  return (
    <Box as="header" pt={8} px={6} pb={4} {...rest}>
      <Container {..._containerProps}>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
      </Container>
    </Box>
  )
}

export default PageHeader
