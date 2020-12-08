import * as React from 'react'
import clsx from 'clsx'
import { SteeringValues } from '~/types/overlay'
import { clamp, lerpInverse } from '~/utils/lerp'

import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'
import styles from './TelemetrySteering.module.css'

interface TelemetrySteeringProps {
  className?: string
  style?: React.CSSProperties
  direction: 'left' | 'right'
  isConnected?: boolean
  value?: number
  color?: string
  steeringDeadzone?: number
}

const TelemetrySteering: React.FC<TelemetrySteeringProps> = ({
  className,
  style,
  direction,
  isConnected,
  value,
  color,
  steeringDeadzone = 0
}) => {
  const backgroundColor = useTelemetryInputStyle(color, isConnected)

  const steerWidths = React.useMemo<SteeringValues>(() => {
    if (value) {
      return {
        left: clamp(1 - lerpInverse(value, -1, -steeringDeadzone), 0, 1) * 100,
        right: clamp(lerpInverse(value, steeringDeadzone, 1), 0, 1) * 100
      }
    }

    return { left: 0, right: 0 }
  }, [value])

  return (
    <div
      className={clsx(styles.root, direction === 'left' ? styles.isLeft : styles.isRight, className)}
      style={{
        backgroundColor,
        ...style
      }}
    >
      <div
        className={styles.axis}
        style={{
          backgroundColor: color,
          width: `${direction === 'left' ? steerWidths.left : steerWidths.right}%`
        }}
      />
    </div>
  )
}

export default TelemetrySteering
