import * as React from 'react';
import clsx from 'clsx';

import { useTelemetryInputStyle } from '../utils/use-telemetry-input-style';
import styles from './TelemetryButton.module.css';

interface TelemetryButtonProps {
  className?: string;
  style?: React.CSSProperties;
  isConnected?: boolean;
  hide?: boolean;
  value?: number;
  color?: string;
}

const TelemetryButton: React.FC<TelemetryButtonProps> = ({
  className,
  style,
  isConnected,
  hide,
  value,
  color,
}) => {
  const backgroundColor = useTelemetryInputStyle(color, isConnected);

  return (
    <div
      className={clsx(styles.root, hide && styles.isHidden, className)}
      style={{
        backgroundColor,
        ...style,
      }}
    >
      <div className={styles.button} style={{ backgroundColor: color, opacity: value ?? 0 }} />
    </div>
  );
};

export default TelemetryButton;
