import * as React from 'react';
import clsx from 'clsx';

import { useTelemetryInputStyle } from '../utils/use-telemetry-input-style';
import { normalizeAxisValue, normalizeButtonValue } from '../utils/normalize-gamepad-values';
import { useOverlayConfig } from '../utils/use-overlay-config';
import { useCurrentController } from '../utils/use-current-controller';

import styles from './telemetry-button.module.css';

type TelemetryButtonVariants = 'accelerate' | 'brake';

interface TelemetryButtonProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'accelerate' | 'brake';
}

function useAxisValue(variant: TelemetryButtonVariants) {
  const { config } = useOverlayConfig();
  const currentController = useCurrentController();

  const currentAxis = variant === 'brake' ? undefined : config.accelerateAxis;
  const currentButton = variant === 'brake' ? config.brakeButton : config.accelerateButton;

  return (
    normalizeAxisValue(currentController, currentAxis) ||
    normalizeButtonValue(currentController, currentButton)
  );
}

function useButtonProperties(variant: TelemetryButtonVariants) {
  const { appearance } = useOverlayConfig();

  return {
    hide: variant === 'brake' ? appearance.disableBrake : appearance.disableAccelerate,
    color: variant === 'brake' ? appearance.brakeColor : appearance.accelerateColor,
  } as const;
}

const TelemetryButton: React.FC<TelemetryButtonProps> = ({
  className,
  style,
  variant = 'accelerate',
}) => {
  const currentController = useCurrentController();
  const { hide, color } = useButtonProperties(variant);
  const backgroundColor = useTelemetryInputStyle(color, typeof currentController !== 'undefined');
  const value = useAxisValue(variant);

  return (
    <div
      className={clsx(
        styles.root,
        hide && styles.isHidden,
        variant === 'accelerate' && styles.isAccelerate,
        variant === 'brake' && styles.isBrake,
        className,
      )}
      style={{
        backgroundColor,
        ...style,
      }}
    >
      <div className={styles.button} style={{ backgroundColor: color, opacity: value }} />
    </div>
  );
};

export default TelemetryButton;
