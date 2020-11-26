import { Stack, Text, Heading } from '@chakra-ui/core'
import * as React from 'react'

interface FormSectionSubheaderProps {
  title: string
  subtitle?: React.ReactNode
}

const FormSectionSubheader: React.FC<FormSectionSubheaderProps> = ({ title, subtitle }) => {
  const renderSubtitle = () => {
    if (typeof subtitle !== 'string') {
      return subtitle
    }

    if (subtitle) {
      return <Text>{subtitle}</Text>
    }

    return null
  }

  return (
    <Stack spacing={2}>
      <Heading as="h2" size="lg">
        {title}
      </Heading>
      {renderSubtitle()}
    </Stack>
  )
}

export default FormSectionSubheader
