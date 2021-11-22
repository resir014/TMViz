import * as React from 'react';
import clsx from 'clsx';

import { useTelemetryInputStyle } from '../utils/use-telemetry-input-style';
import { normalizeAxisValue, normalizeButtonValue } from '../utils/normalize-gamepad-values';
import { useOverlayConfig } from '../utils/use-overlay-config';
import styles from './telemetry-button.module.css';
import { useGamepad, useIsGamepadActive } from '~/modules/gamepad';
import { parseNumber } from '~/utils/query-parser';

interface TelemetryButtonProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'accelerate' | 'brake';
}

const TelemetryButton: React.FC<TelemetryButtonProps> = ({
  className,
  style,
  variant = 'accelerate',
}) => {
  const { appearance, config } = useOverlayConfig();
  const gamepads = useGamepad();

  const currentController = parseNumber(config.controllerIndex) ?? 0;
  const currentAxis = variant === 'brake' ? undefined : config.accelerateAxis;
  const currentButton = variant === 'brake' ? config.brakeButton : config.accelerateButton;
  const hide = variant === 'brake' ? appearance.disableBrake : appearance.disableAccelerate;
  const color = variant === 'brake' ? appearance.brakeColor : appearance.accelerateColor;

  const axisValue =
    normalizeAxisValue(gamepads[currentController], currentAxis) ||
    normalizeButtonValue(gamepads[currentController], currentButton);

  const isConnected = useIsGamepadActive(currentController);
  const backgroundColor = useTelemetryInputStyle(color, isConnected);

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
      <div className={styles.button} style={{ backgroundColor: color, opacity: axisValue }} />
    </div>
  );
};

export default TelemetryButton;
