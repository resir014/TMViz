import { Button, Code, Input, InputGroup, InputRightElement, Stack, Text, useToast } from '@chakra-ui/react'
import { toClipboard } from 'copee'
import { useFormikContext } from 'formik'
import * as React from 'react'
import { GlobalOverlaySettings } from '~/types/overlay'
import buildURLQuery from './utils/buildURLQuery'

const CustomizerClipboard: React.FC = () => {
  const toast = useToast()
  const { values } = useFormikContext<GlobalOverlaySettings>()

  const overlayURL = React.useMemo(() => `${process.env.NEXT_PUBLIC_BASE_URL}/overlay?${buildURLQuery(values)}`, [values])

  const handleCopy = React.useCallback(() => {
    const success = toClipboard(overlayURL)

    if (success) {
      toast({
        description: 'Successfully copied to clipboard.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
    }
  }, [overlayURL])

  return (
    <Stack spacing={4}>
      <Text>
        Once you&apos;ve finished configuring your widget, copy the following URL, width, and height into a <strong>browser source</strong>:
      </Text>
      <InputGroup>
        <Input readOnly value={overlayURL} pr="5rem" />
        <InputRightElement width="4.5rem" p={0}>
          <Button type="button" size="sm" textTransform="uppercase" borderRadius="sm" onClick={handleCopy}>
            Copy
          </Button>
        </InputRightElement>
      </InputGroup>
      <Text>
        width: <Code>256</Code>px, height: <Code>140</Code>px
      </Text>
    </Stack>
  )
}

export default CustomizerClipboard