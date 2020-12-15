import { parseAppearance, parseOverlayConfig } from '~/modules/parser/utils'
import { GlobalOverlaySettings } from '~/types/overlay'

const defaultConfig: GlobalOverlaySettings = {
  appearance: parseAppearance(),
  config: parseOverlayConfig()
}

export default defaultConfig
