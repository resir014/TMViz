import { Box, Heading, Stack, Divider, useColorMode } from '@chakra-ui/react'
import * as React from 'react'
import buildURLQuery from './utils/buildURLQuery'
import useOverlayGlobalConfig from './utils/useOverlayGlobalConfig'

const CustomizerPreview: React.FC = () => {
  const { colorMode } = useColorMode()
  const values = useOverlayGlobalConfig()
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
        <Box display="inline-block" p={6} backgroundColor={colorMode === 'light' ? 'gray.50' : 'gray.900'} borderRadius="lg">
          <iframe title="Customizer Preview" src={`/overlay?${config}`} width={256} height={140} />
        </Box>
      </Box>
    </Stack>
  )
}

export default CustomizerPreview
