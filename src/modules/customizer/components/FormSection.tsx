import { BoxProps, Flex, useColorMode } from '@chakra-ui/react'
import * as React from 'react'

type FormSectionProps = BoxProps

const FormSection: React.FC<FormSectionProps> = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      flexDirection="column"
      backgroundColor={colorMode === 'light' ? 'white' : 'black'}
      borderTopLeftRadius="2xl"
      borderBottomRightRadius="2xl"
      boxShadow="base"
      overflow="hidden"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default FormSection
