import { Stack } from '@chakra-ui/react'
import * as React from 'react'
import convert from 'htmr'
import htmrTransform from '~/utils/htmrTransform'
import { Container, ContainerProps } from '../layout'

interface PageBodyProps extends ContainerProps {
  content?: string
}

const PageBody: React.FC<PageBodyProps> = ({ children, content, ...rest }) => {
  const renderContent = () => {
    if (content) {
      return <Stack spacing={4}>{convert(content, { transform: htmrTransform })}</Stack>
    }

    if (children) {
      return <Stack spacing={4}>{children}</Stack>
    }

    return null
  }

  return (
    <Container as="section" {...rest}>
      {renderContent()}
    </Container>
  )
}

export default PageBody
