import * as React from 'react';
import clsx from 'clsx';
import { clamp, lerpInverse } from '@resir014/lerp';

import { useTelemetryInputStyle } from '../utils/use-telemetry-input-style';
import { useOverlayConfig } from '../utils/use-overlay-config';
import { normalizeAxisValue, normalizeSteeringDpadValue } from '../utils/normalize-gamepad-values';
import { useCurrentController } from '../utils/use-current-controller';

import styles from './telemetry-steering.module.css';

interface TelemetrySteeringProps {
  className?: string;
  style?: React.CSSProperties;
  direction: 'left' | 'right';
}

function useSteeringValue() {
  const { config } = useOverlayConfig();
  const currentController = useCurrentController();

  const deadzone = Number(config.steeringDeadzone) || 0;
  const value =
    normalizeSteeringDpadValue(currentController, config.steeringLeftButton, 'left') ||
    normalizeSteeringDpadValue(currentController, config.steeringRightButton, 'right') ||
    normalizeAxisValue(currentController, config.steeringAxis);

  if (value) {
    return {
      left: clamp(1 - lerpInverse(value, -1, -deadzone), 0, 1) * 100,
      right: clamp(lerpInverse(value, deadzone, 1), 0, 1) * 100,
    } as const;
  }

  return { left: 0, right: 0 } as const;
}

function useSteeringProperties() {
  const { appearance } = useOverlayConfig();

  return {
    hide: appearance.disableSteering,
    color: appearance.steeringColor,
  } as const;
}

const TelemetrySteering: React.FC<TelemetrySteeringProps> = ({ className, style, direction }) => {
  const currentController = useCurrentController();
  const { hide, color } = useSteeringProperties();
  const backgroundColor = useTelemetryInputStyle(color, typeof currentController !== 'undefined');
  const value = useSteeringValue();

  return (
    <div
      className={clsx(
        styles.root,
        hide && styles.isHidden,
        direction === 'left' ? styles.isLeft : styles.isRight,
        className,
      )}
      style={{
        backgroundColor,
        ...style,
      }}
    >
      <div
        className={styles.axis}
        style={{
          backgroundColor: color,
          width: `${direction === 'left' ? value.left : value.right}%`,
        }}
      />
    </div>
  );
};

export default TelemetrySteering;
