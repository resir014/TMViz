import { ParsedUrlQuery } from 'querystring'
import { GlobalOverlaySettings } from '~/types/overlay'
import theme from '~/utils/theme'

function parseIfDefined(text?: string | string[], defaultValue?: any) {
  return text ? JSON.parse(Array.isArray(text) ? text[0] : text) : defaultValue
}

export default function parseAppearance({
  accelerateColor,
  brakeColor,
  steeringColor,
  disableAccelerate,
  disableBrake,
  disableSteering
}: Partial<ParsedUrlQuery> = {}): GlobalOverlaySettings['appearance'] {
  return {
    accelerateColor: Array.isArray(accelerateColor) ? accelerateColor[0] : accelerateColor || theme.colors.green[500],
    brakeColor: Array.isArray(brakeColor) ? brakeColor[0] : brakeColor || theme.colors.red[500],
    steeringColor: Array.isArray(steeringColor) ? steeringColor[0] : steeringColor || theme.colors.orange[500],
    disableAccelerate: parseIfDefined(disableAccelerate, false),
    disableBrake: parseIfDefined(disableBrake, false),
    disableSteering: parseIfDefined(disableSteering, false)
  }
}
