import * as React from 'react';
import { useRouter } from 'next/router';
import { parseQueryToGlobalConfig } from '~/modules/parser';
import { GlobalOverlaySettings } from '~/types/overlay';

export function useOverlayConfig(): GlobalOverlaySettings {
  const router = useRouter();
  const overlayConfig = React.useMemo(() => parseQueryToGlobalConfig(router.query), [router.query]);

  return overlayConfig;
}
