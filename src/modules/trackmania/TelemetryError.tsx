import { Text } from '@chakra-ui/react'
import clsx from 'clsx'
import { transparentize } from 'polished'
import * as React from 'react'
import theme from '~/utils/theme'

import styles from './ControllerTelemetry.module.css'
import errorStyles from './TelemetryError.module.css'

const TelemetryError: React.FC = () => {
  return (
    <div className={clsx(styles.root, errorStyles.root)}>
      <div className={styles.telemetryWrapper}>
        <div className={styles.isThrottle} style={{ backgroundColor: transparentize(0.75, theme.colors.red[500]) }} />
        <div className={styles.isBrake} style={{ backgroundColor: transparentize(0.75, theme.colors.red[500]) }} />
        <div style={{ gridArea: 'left', width: 96, height: 140, backgroundColor: transparentize(0.75, theme.colors.red[500]) }} />
        <div style={{ gridArea: 'right', width: 96, height: 140, backgroundColor: transparentize(0.75, theme.colors.red[500]) }} />
      </div>
      <div className={errorStyles.inner}>
        <Text
          fontSize="2xl"
          textTransform="uppercase"
          letterSpacing="0.2em"
          color="white"
          fontWeight={600}
          textShadow={`0px 0px 4px ${theme.colors.black}`}
        >
          Error
        </Text>
      </div>
    </div>
  )
}

export default TelemetryError
