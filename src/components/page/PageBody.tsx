import { Box, BoxProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import convert from 'htmr'
import htmrTransform from '~/utils/htmrTransform'
import { Container, ContainerProps } from '../layout'

interface PageBodyProps extends BoxProps {
  content?: string
  _containerProps?: ContainerProps
}

const PageBody: React.FC<PageBodyProps> = ({ children, content, _containerProps, ...rest }) => {
  if (content) {
    return (
      <Box as="section" px={6} pt={0} pb={12} {...rest}>
        <Container {..._containerProps}>
          <Stack spacing={4}>{convert(content, { transform: htmrTransform })}</Stack>
        </Container>
      </Box>
    )
  }

  return (
    <Box as="section" px={6} pt={0} pb={12} {...rest}>
      <Container>{children}</Container>
    </Box>
  )
}

export default PageBody
