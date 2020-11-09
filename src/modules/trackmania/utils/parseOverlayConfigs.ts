import { ParsedUrlQuery } from 'querystring'
import { GlobalOverlaySettings } from '~/types/gamepad'
import gamepadConfigDefaults from './gamepadConfigDefaults'

function parseOverlayConfigs(query?: ParsedUrlQuery): Partial<GlobalOverlaySettings> {
  if (query) {
    const { accelerateColor, brakeColor, steeringColor, ...rest } = query

    return {
      appearance: {
        accelerateColor: Array.isArray(accelerateColor) ? accelerateColor[0] : accelerateColor || undefined,
        brakeColor: Array.isArray(brakeColor) ? brakeColor[0] : brakeColor || undefined,
        steeringColor: Array.isArray(steeringColor) ? steeringColor[0] : steeringColor || undefined
      },
      config: gamepadConfigDefaults(rest)
    }
  }

  return {
    config: gamepadConfigDefaults()
  }
}

export default parseOverlayConfigs
