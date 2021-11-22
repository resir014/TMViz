import { NextSeo } from 'next-seo';
import * as React from 'react';

import { OverlayLayout } from '~/layouts/overlay-layout';
import { ControllerTelemetry } from '~/modules/trackmania';
import { createNextPage } from '~/utils/create-next-page';

function OverlayPage() {
  return (
    <>
      <NextSeo title="Overlay" />
      <ControllerTelemetry />
    </>
  );
}

export default createNextPage(OverlayPage, {
  layout: page => <OverlayLayout>{page}</OverlayLayout>,
});
