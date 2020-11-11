import * as React from 'react'
import clsx from 'clsx'

import useTrackmaniaTelemetry from './utils/useTrackmaniaTelemetry'
import useOverlayConfig from './utils/useOverlayConfig'
import { TelemetrySteering, TelemetryButton } from './telemetry'

import styles from './ControllerTelemetry.module.css'

interface ControllerTelemetryProps {
  className?: string
  style?: React.CSSProperties
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({ className, style }) => {
  const { appearance } = useOverlayConfig()
  const currentGamepad = useTrackmaniaTelemetry(0)

  return (
    <div className={clsx(styles.root, className)} style={style}>
      <div className={styles.telemetryWrapper}>
        <TelemetrySteering
          direction="left"
          steeringDeadzone={currentGamepad.steeringDeadzone}
          color={appearance?.steeringColor}
          value={currentGamepad.steering}
        />
        <TelemetryButton className={styles.isThrottle} value={currentGamepad.accelerate} color={appearance?.accelerateColor} />
        <TelemetryButton className={styles.isBrake} value={currentGamepad.brake} color={appearance?.brakeColor} />
        <TelemetrySteering
          direction="right"
          steeringDeadzone={currentGamepad.steeringDeadzone}
          color={appearance?.steeringColor}
          value={currentGamepad.steering}
        />
      </div>
    </div>
  )
}

export default ControllerTelemetry
