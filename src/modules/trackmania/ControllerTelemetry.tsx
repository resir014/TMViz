import * as React from 'react'
import clsx from 'clsx'

import styles from './ControllerTelemetry.module.css'

import { useGamepad } from '../gamepad'
import { DEFAULT_STEERING_DEADZONE } from './utils/gamepadConfigDefaults'
import useOverlayConfig from './utils/useOverlayConfig'
import { TelemetrySteering, TelemetryButton } from './telemetry'

interface ControllerTelemetryProps {
  className?: string
  style?: React.CSSProperties
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({ className, style }) => {
  const { config, appearance } = useOverlayConfig()
  const { globalGamepads } = useGamepad()

  const currentGamepad = globalGamepads[0]

  return (
    <div className={clsx(styles.root, className)} style={style}>
      <div className={styles.telemetryWrapper}>
        <TelemetrySteering
          direction="left"
          steeringDeadzone={Number(config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE)}
          color={appearance?.steeringColor}
          value={currentGamepad && currentGamepad.axes[Number(config?.steeringAxis || 0)]}
        />
        <TelemetryButton
          className={styles.isThrottle}
          value={currentGamepad && currentGamepad.buttons[Number(config?.accelerateButton || 0)].value}
          color={appearance?.accelerateColor}
        />
        <TelemetryButton
          className={styles.isBrake}
          value={currentGamepad && currentGamepad.buttons[Number(config?.brakeButton || 0)].value}
          color={appearance?.brakeColor}
        />
        <TelemetrySteering
          direction="right"
          steeringDeadzone={Number(config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE)}
          color={appearance?.steeringColor}
          value={currentGamepad && currentGamepad.axes[Number(config?.steeringAxis || 0)]}
        />
      </div>
    </div>
  )
}

export default ControllerTelemetry
