import * as React from 'react';
import clsx from 'clsx';

import useTrackmaniaTelemetry from './utils/useTrackmaniaTelemetry';
import { TelemetrySteering, TelemetryButton } from './telemetry';
import styles from './ControllerTelemetry.module.css';
import { GamepadAppearanceSettings, TrackmaniaOverlayConfig } from '~/types/overlay';

interface ControllerTelemetryProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: GamepadAppearanceSettings;
  config: Partial<TrackmaniaOverlayConfig>;
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({
  className,
  style,
  appearance,
  config,
}) => {
  const { isConnected, data } = useTrackmaniaTelemetry(config);

  return (
    <div className={clsx(styles.root, className)} style={style}>
      <div className={styles.telemetryWrapper}>
        <TelemetrySteering
          direction="left"
          isConnected={isConnected}
          steeringDeadzone={data.steeringDeadzone}
          hide={appearance?.disableSteering}
          color={appearance?.steeringColor}
          value={data.steering}
        />
        <TelemetryButton
          className={styles.isThrottle}
          isConnected={isConnected}
          hide={appearance?.disableAccelerate}
          value={data.accelerate}
          color={appearance?.accelerateColor}
        />
        <TelemetryButton
          className={styles.isBrake}
          isConnected={isConnected}
          hide={appearance?.disableBrake}
          value={data.brake}
          color={appearance?.brakeColor}
        />
        <TelemetrySteering
          direction="right"
          isConnected={isConnected}
          steeringDeadzone={data.steeringDeadzone}
          hide={appearance?.disableSteering}
          color={appearance?.steeringColor}
          value={data.steering}
        />
      </div>
    </div>
  );
};

export default ControllerTelemetry;
