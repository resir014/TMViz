import * as React from 'react'
import clsx from 'clsx'
import { SteeringValues } from '~/types/overlay'
import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'
import styles from './TelemetrySteering.module.css'

interface TelemetrySteeringProps {
  className?: string
  style?: React.CSSProperties
  direction: 'left' | 'right'
  value?: number
  color?: string
  steeringDeadzone?: number
}

const TelemetrySteering: React.FC<TelemetrySteeringProps> = ({ className, style, direction, value, color, steeringDeadzone = 0 }) => {
  const backgroundColor = useTelemetryInputStyle(color)

  const steerWidths = React.useMemo<SteeringValues>(() => {
    if (value) {
      return {
        left: value <= steeringDeadzone ? Math.abs(value * 100) : 0,
        right: value >= steeringDeadzone ? Math.abs(value * 100) : 0
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
