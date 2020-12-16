import { Stack, Text, Heading, Flex, Box, FlexProps, useColorMode } from '@chakra-ui/react'
import * as React from 'react'

interface FormSectionSubheaderProps extends FlexProps {
  title: string
  subtitle?: React.ReactNode
  rightElement?: React.ReactNode
}

const FormSectionSubheader: React.FC<FormSectionSubheaderProps> = ({ title, subtitle, rightElement, alignItems = 'center', ...rest }) => {
  const { colorMode } = useColorMode()

  const renderSubtitle = () => {
    if (typeof subtitle !== 'string') {
      return subtitle
    }

    if (subtitle) {
      return <Text fontSize="sm">{subtitle}</Text>
    }

    return null
  }

  return (
    <Flex
      flexDirection="row"
      alignItems={alignItems}
      pb={2}
      borderBottom="1px solid"
      borderBottomColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
      {...rest}
    >
      <Stack spacing={1} flex="1 1 auto">
        <Heading as="h2" size="md">
          {title}
        </Heading>
        {renderSubtitle()}
      </Stack>
      {rightElement && <Box ml={4}>{rightElement}</Box>}
    </Flex>
  )
}

export default FormSectionSubheader
