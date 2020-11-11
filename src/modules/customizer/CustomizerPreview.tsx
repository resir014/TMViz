import { Box, useColorMode } from '@chakra-ui/core'
import * as React from 'react'
import { GlobalOverlaySettings } from '~/types/overlay'
import buildURLQuery from './utils/buildURLQuery'

interface CustomizerPreviewProps {
  values: GlobalOverlaySettings
}

const CustomizerPreview: React.FC<CustomizerPreviewProps> = ({ values }) => {
  const { colorMode } = useColorMode()

  return (
    <Box display="inline-block" p={6} backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.800'} borderRadius="lg">
      <iframe title="Customizer Preview" src={`/overlay?${buildURLQuery(values)}`} width={256} height={140} />
    </Box>
  )
}

export default CustomizerPreview
