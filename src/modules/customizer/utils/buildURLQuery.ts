import queryString from 'query-string'
import { GlobalOverlaySettings } from '~/types/gamepad'

function buildURLQuery(settings: GlobalOverlaySettings) {
  const query = { ...settings.appearance, ...settings.config }

  return queryString.stringify(query)
}

export default buildURLQuery
