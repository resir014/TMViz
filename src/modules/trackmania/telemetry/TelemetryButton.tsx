import * as React from 'react'
import clsx from 'clsx'

import useTelemetryInputStyle from '../utils/useTelemetryInputStyle'
import styles from './TelemetryButton.module.css'

interface TelemetryButtonProps {
  className?: string
  style?: React.CSSProperties
  isConnected?: boolean
  value?: number
  color?: string
}

const TelemetryButton: React.FC<TelemetryButtonProps> = ({ className, style, isConnected, value, color }) => {
  const backgroundColor = useTelemetryInputStyle(color, isConnected)

  return (
    <div
      className={clsx(styles.root, className)}
      style={{
        backgroundColor,
        ...style
      }}
    >
      <div className={styles.button} style={{ backgroundColor: color, opacity: value || 0 }} />
    </div>
  )
}

export default TelemetryButton
