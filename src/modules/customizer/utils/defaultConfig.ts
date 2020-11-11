import { gamepadConfigDefaults } from '~/modules/trackmania'
import { GlobalOverlaySettings } from '~/types/gamepad'
import { customColors } from '~/utils/theme'

const defaultConfig: GlobalOverlaySettings = {
  appearance: {
    accelerateColor: customColors.green[500],
    brakeColor: customColors.red[500],
    steeringColor: customColors.orange[500]
  },
  config: gamepadConfigDefaults()
}

export default defaultConfig
