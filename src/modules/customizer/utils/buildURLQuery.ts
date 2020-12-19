import queryString from 'query-string'
import { GlobalOverlaySettings } from '~/types/overlay'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tmviz.vercel.app'

function buildURLQuery(settings: GlobalOverlaySettings, baseUrl: string = BASE_URL) {
  const query = { version: settings.version, ...settings.appearance, ...settings.config }

  return queryString.stringifyUrl({
    url: `${baseUrl}/overlay`,
    query
  })
}

export default buildURLQuery
