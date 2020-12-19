import * as React from 'react'
import clsx from 'clsx'

import useTrackmaniaTelemetry from './utils/useTrackmaniaTelemetry'
import { TelemetrySteering, TelemetryButton } from './telemetry'

import styles from './ControllerTelemetry.module.css'

interface ControllerTelemetryProps {
  className?: string
  style?: React.CSSProperties
}

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({ className, style }) => {
  const { isConnected, appearance, data } = useTrackmaniaTelemetry(0)

  return (
    <div className={clsx(styles.root, className)} style={style}>
      <div className={styles.telemetryWrapper}>
        <TelemetrySteering
          direction="left"
          isConnected={isConnected}
          steeringDeadzone={data.steeringDeadzone}
          color={appearance?.steeringColor}
          value={data.steering}
        />
        <TelemetryButton
          className={styles.isThrottle}
          isConnected={isConnected}
          value={data.accelerate}
          color={appearance?.accelerateColor}
        />
        <TelemetryButton className={styles.isBrake} isConnected={isConnected} value={data.brake} color={appearance?.brakeColor} />
        <TelemetrySteering
          direction="right"
          isConnected={isConnected}
          steeringDeadzone={data.steeringDeadzone}
          color={appearance?.steeringColor}
          value={data.steering}
        />
      </div>
    </div>
  )
}

export default ControllerTelemetry
