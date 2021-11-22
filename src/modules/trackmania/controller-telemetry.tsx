import * as React from 'react';
import clsx from 'clsx';

import { TelemetrySteering, TelemetryButton } from './telemetry';
import styles from './controller-telemetry.module.css';

interface ControllerTelemetryProps {
  className?: string;
  style?: React.CSSProperties;
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({ className, style }) => {
  return (
    <div className={clsx(styles.root, className)} style={style}>
      <div className={styles.telemetryWrapper}>
        <TelemetrySteering direction="left" />
        <TelemetryButton variant="accelerate" />
        <TelemetryButton variant="brake" />
        <TelemetrySteering direction="right" />
      </div>
    </div>
  );
};

export default ControllerTelemetry;
