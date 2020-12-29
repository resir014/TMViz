import { Stack } from '@chakra-ui/react'
import * as React from 'react'
import convert from 'htmr'
import htmrTransform from '~/utils/htmrTransform'
import { Container, ContainerProps } from '../layout'

interface PageBodyProps extends ContainerProps {
  content?: string
}

const PageBody: React.FC<PageBodyProps> = ({ children, content, ...rest }) => {
  if (content) {
    return (
      <Container as="section" {...rest}>
        <Stack spacing={4}>{convert(content, { transform: htmrTransform })}</Stack>
      </Container>
    )
  }

  return (
    <Container as="section" {...rest}>
      {children}
    </Container>
  )
}

export default PageBody
