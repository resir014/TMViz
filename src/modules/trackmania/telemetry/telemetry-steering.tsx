import * as React from 'react';
import clsx from 'clsx';
import { clamp, lerpInverse } from '@resir014/lerp';

import { useTelemetryInputStyle } from '../utils/use-telemetry-input-style';
import { useOverlayConfig } from '../utils/use-overlay-config';
import { normalizeAxisValue, normalizeSteeringDpadValue } from '../utils/normalize-gamepad-values';
import styles from './telemetry-steering.module.css';
import { SteeringValues } from '~/types/overlay';
import { parseNumber } from '~/utils/query-parser';
import { useGamepad, useIsGamepadActive } from '~/modules/gamepad';

interface TelemetrySteeringProps {
  className?: string;
  style?: React.CSSProperties;
  direction: 'left' | 'right';
}

const TelemetrySteering: React.FC<TelemetrySteeringProps> = ({ className, style, direction }) => {
  const { appearance, config } = useOverlayConfig();
  const gamepads = useGamepad();

  const currentController = parseNumber(config.controllerIndex) ?? 0;
  const hide = appearance.disableSteering;
  const color = appearance.steeringColor;
  const steeringDeadzone = Number(config.steeringDeadzone) || 0;

  const value =
    normalizeSteeringDpadValue(gamepads[currentController], config.steeringLeftButton, 'left') ||
    normalizeSteeringDpadValue(gamepads[currentController], config.steeringRightButton, 'right') ||
    normalizeAxisValue(gamepads[currentController], config.steeringAxis);

  const isConnected = useIsGamepadActive(currentController);
  const backgroundColor = useTelemetryInputStyle(color, isConnected);

  const steerWidths = React.useMemo<SteeringValues>(() => {
    if (value) {
      return {
        left: clamp(1 - lerpInverse(value, -1, -steeringDeadzone), 0, 1) * 100,
        right: clamp(lerpInverse(value, steeringDeadzone, 1), 0, 1) * 100,
      };
    }

    return { left: 0, right: 0 };
  }, [value, steeringDeadzone]);

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
          width: `${direction === 'left' ? steerWidths.left : steerWidths.right}%`,
        }}
      />
    </div>
  );
};

export default TelemetrySteering;
