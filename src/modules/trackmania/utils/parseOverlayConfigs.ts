import { GlobalOverlaySettings } from '~/types/gamepad'
import gamepadConfigDefaults from './gamepadConfigDefaults'

function parseOverlayConfigs(query?: Partial<Record<string, string>>): Partial<GlobalOverlaySettings> {
  if (query) {
    const { accelerateColor, brakeColor, steeringColor, ...rest } = query

    return {
      appearance: {
        accelerateColor: accelerateColor || undefined,
        brakeColor: brakeColor || undefined,
        steeringColor: steeringColor || undefined
      },
      config: gamepadConfigDefaults(rest)
    }
  }

  return {
    config: gamepadConfigDefaults()
  }
}

export default parseOverlayConfigs
