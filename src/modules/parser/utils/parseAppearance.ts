import { ParsedUrlQuery } from 'querystring'
import theme from '~/utils/theme'

export default function parseAppearance({ accelerateColor, brakeColor, steeringColor }: Partial<ParsedUrlQuery> = {}) {
  return {
    accelerateColor: Array.isArray(accelerateColor) ? accelerateColor[0] : accelerateColor || theme.colors.green[500],
    brakeColor: Array.isArray(brakeColor) ? brakeColor[0] : brakeColor || theme.colors.red[500],
    steeringColor: Array.isArray(steeringColor) ? steeringColor[0] : steeringColor || theme.colors.orange[500]
  }
}
