import { NextPage } from 'next';
import * as React from 'react';
import { OverlayRoot, TelemetryError } from '~/modules/trackmania';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = () => {
  return (
    <OverlayRoot>
      <TelemetryError />
    </OverlayRoot>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default Error;
