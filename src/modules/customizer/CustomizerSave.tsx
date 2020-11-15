import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Flex, Stack, Text } from '@chakra-ui/core'
import { dequal } from 'dequal/lite'
import { useFormikContext } from 'formik'
import * as React from 'react'
import { GlobalOverlaySettings } from '~/types/overlay'

const CustomizerSave: React.FC = () => {
  const { values, initialValues } = useFormikContext<GlobalOverlaySettings>()

  const isValuesChanged = React.useMemo(() => !dequal(values, initialValues), [values, initialValues])

  return (
    <Stack spacing={4}>
      <Flex alignItems="center">
        <Button type="submit">Save settings</Button>
        {isValuesChanged && (
          <Text ml={4} color="red.500" fontSize="sm">
            Changes detected.
          </Text>
        )}
      </Flex>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle mr={2}>Note:</AlertTitle>
        <AlertDescription>Settings are saved locally. Clearing your browser history will reset your settings.</AlertDescription>
      </Alert>
    </Stack>
  )
}

export default CustomizerSave
