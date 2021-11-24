import { ParsedUrlQuery } from 'querystring';
import { normaliseVersionNumber, parseAppearance, parseOverlayConfig } from './utils';
import theme from '~/utils/theme';
import { GlobalOverlaySettings } from '~/types/overlay';

export function parseQueryToGlobalConfig(query?: ParsedUrlQuery): GlobalOverlaySettings {
  if (query) {
    const { version, ...rest } = query;

    const normalisedVersion = normaliseVersionNumber(version);
    switch (normalisedVersion) {
      case 1: {
        // v1 config
        return {
          appearance: parseAppearance(query),
          config: parseOverlayConfig(rest, normalisedVersion),
        };
      }
      default: {
        // legacy config
        return {
          appearance: parseAppearance(query),
          config: parseOverlayConfig(rest),
        };
      }
    }
  }

  return {
    appearance: {
      accelerateColor: theme.colors.green[500],
      brakeColor: theme.colors.red[500],
      steeringColor: theme.colors.orange[500],
    },
    config: parseOverlayConfig(),
  };
}
