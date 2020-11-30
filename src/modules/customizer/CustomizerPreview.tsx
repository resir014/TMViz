import { Box, Heading, Stack, Divider, useColorMode } from '@chakra-ui/react'
import { useFormikContext } from 'formik'
import * as React from 'react'
import { GlobalOverlaySettings } from '~/types/overlay'
import buildURLQuery from './utils/buildURLQuery'

const CustomizerPreview: React.FC = () => {
  const { colorMode } = useColorMode()
  const { values } = useFormikContext<GlobalOverlaySettings>()

  const config = React.useMemo(() => buildURLQuery(values), [values])

  return (
    <Stack spacing={6}>
      <Box>
        <Heading as="h1" mb={2}>
          Preview
        </Heading>
        <Divider />
      </Box>
      <Box>
        <Box display="inline-block" p={6} backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.800'} borderRadius="lg">
          <iframe title="Customizer Preview" src={`/overlay?${config}`} width={256} height={140} />
        </Box>
      </Box>
    </Stack>
  )
}

export default CustomizerPreview
