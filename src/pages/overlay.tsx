import { NextSeo } from 'next-seo';
import * as React from 'react';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { ControllerTelemetry } from '~/modules/trackmania';
import useOverlayConfig from '~/modules/trackmania/utils/useOverlayConfig';
import { createNextPage } from '~/utils/create-next-page';

function OverlayPage() {
  const { appearance, config } = useOverlayConfig();

  return (
    <>
      <NextSeo title="Overlay" />
      <ControllerTelemetry appearance={appearance} config={config} />
    </>
  );
}

export default createNextPage(OverlayPage, {
  layout: page => <OverlayLayout>{page}</OverlayLayout>,
});
