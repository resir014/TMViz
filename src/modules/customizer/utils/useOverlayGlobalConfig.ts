import { useFormikContext } from 'formik'
import * as React from 'react'
import { parseFormDataToGlobalConfig } from '~/modules/parser'
import { CustomizerFormSettings } from '~/types/overlay'

export default function useOverlayGlobalConfig() {
  const { values } = useFormikContext<CustomizerFormSettings>()
  return React.useMemo(() => parseFormDataToGlobalConfig(values), [values])
}
