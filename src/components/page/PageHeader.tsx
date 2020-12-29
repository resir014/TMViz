import { Heading } from '@chakra-ui/react'
import * as React from 'react'
import { Container, ContainerProps } from '../layout'

export interface PageHeaderProps extends ContainerProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, ...rest }) => {
  return (
    <Container as="header" pb={4} {...rest}>
      <Heading as="h1" size="2xl">
        {title}
      </Heading>
    </Container>
  )
}

export default PageHeader
