import * as React from 'react'
import { Grid, Flex } from '@chakra-ui/core'

import { useGamepad } from '../gamepad'
import { BrakeIndicator, SteeringIndicator, ThrottleIndicator } from './telemetry'
import { DEFAULT_STEERING_DEADZONE } from './utils/gamepadConfigDefaults'
import useOverlayConfig from './utils/useOverlayConfig'

const ControllerTelemetry: React.FC = () => {
  const { config, appearance } = useOverlayConfig()
  const { globalGamepads } = useGamepad()

  const currentGamepad = globalGamepads[0]

  return (
    <Flex>
      <Grid
        gridGap={2}
        gridTemplateColumns="1fr 48px 1fr"
        gridTemplateRows="1fr 1fr"
        gridTemplateAreas={`
      "left throttle right"
      "left brake right"
    `}
        overflow="hidden"
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      >
        <SteeringIndicator
          direction="left"
          steeringDeadzone={Number(config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE)}
          color={appearance?.steeringColor}
          value={currentGamepad && currentGamepad.axes[Number(config?.steeringAxis || 0)]}
        />
        <ThrottleIndicator
          value={currentGamepad && currentGamepad.buttons[Number(config?.accelerateButton || 0)].value}
          color={appearance?.accelerateColor}
        />
        <BrakeIndicator
          value={currentGamepad && currentGamepad.buttons[Number(config?.brakeButton || 0)].value}
          color={appearance?.brakeColor}
        />
        <SteeringIndicator
          direction="right"
          steeringDeadzone={Number(config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE)}
          color={appearance?.steeringColor}
          value={currentGamepad && currentGamepad.axes[Number(config?.steeringAxis || 0)]}
        />
      </Grid>
    </Flex>
  )
}

export default ControllerTelemetry
