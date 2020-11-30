import { Stack, Divider, Heading } from '@chakra-ui/react'
import * as React from 'react'

interface FormSectionHeaderProps {
  title: string
}

const FormSectionHeader: React.FC<FormSectionHeaderProps> = ({ title }) => {
  return (
    <Stack spacing={2}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <Divider />
    </Stack>
  )
}

export default FormSectionHeader
