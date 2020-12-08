import { ParsedUrlQuery } from 'querystring'
import { GlobalOverlaySettings } from '~/types/overlay'
import theme from '~/utils/theme'
import gamepadConfigDefaults from './gamepadConfigDefaults'

export default function parseQueryToGlobalConfig(query?: ParsedUrlQuery): GlobalOverlaySettings {
  if (query) {
    const { accelerateColor, brakeColor, steeringColor, ...rest } = query

    return {
      appearance: {
        accelerateColor: Array.isArray(accelerateColor) ? accelerateColor[0] : accelerateColor || theme.colors.green[500],
        brakeColor: Array.isArray(brakeColor) ? brakeColor[0] : brakeColor || theme.colors.red[500],
        steeringColor: Array.isArray(steeringColor) ? steeringColor[0] : steeringColor || theme.colors.orange[500]
      },
      config: gamepadConfigDefaults(rest)
    }
  }

  return {
    appearance: {
      accelerateColor: theme.colors.green[500],
      brakeColor: theme.colors.red[500],
      steeringColor: theme.colors.orange[500]
    },
    config: gamepadConfigDefaults()
  }
}
