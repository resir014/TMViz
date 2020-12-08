import queryString from 'query-string'
import { GlobalOverlaySettings } from '~/types/overlay'

function buildURLQuery(settings: GlobalOverlaySettings) {
  const query = { version: settings.version, ...settings.appearance, ...settings.config }

  return queryString.stringify(query)
}

export default buildURLQuery
