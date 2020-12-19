import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { FormSection, FormSectionHeader } from '../components'
import { buildURLQuery, useOverlayGlobalConfig } from '../utils'

const CustomizerPreview: React.FC = () => {
  const values = useOverlayGlobalConfig()
  const config = React.useMemo(() => buildURLQuery(values), [values])

  return (
    <FormSection>
      <FormSectionHeader title="Preview" py={3} px={6} />
      <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto" p={6}>
        <iframe title="Customizer Preview" src={`/overlay?${config}`} width={256} height={140} />
      </Box>
    </FormSection>
  )
}

export default CustomizerPreview
