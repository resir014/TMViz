import { gamepadConfigDefaults } from '~/modules/parser'
import { GlobalOverlaySettings } from '~/types/overlay'
import theme from '~/utils/theme'

const defaultConfig: GlobalOverlaySettings = {
  appearance: {
    accelerateColor: theme.colors.green[500],
    brakeColor: theme.colors.red[500],
    steeringColor: theme.colors.orange[500]
  },
  config: gamepadConfigDefaults()
}

export default defaultConfig
