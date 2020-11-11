import * as React from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { GlobalOverlaySettings } from '~/types/overlay'
import gamepadConfigDefaults from './gamepadConfigDefaults'

function parseOverlayConfigs(query?: ParsedUrlQuery): GlobalOverlaySettings {
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
    appearance: {},
    config: gamepadConfigDefaults()
  }
}

function useOverlayConfig(): GlobalOverlaySettings {
  const router = useRouter()
  const overlayConfig = React.useMemo(() => parseOverlayConfigs(router.query), [router.query])

  return overlayConfig
}

export default useOverlayConfig
