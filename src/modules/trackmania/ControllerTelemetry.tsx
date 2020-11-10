import * as React from 'react'
import { Grid, Flex } from '@chakra-ui/core'
import { GlobalOverlaySettings } from '~/types/gamepad'

import useGamepad from './utils/useGamepad'
import { BrakeIndicator, SteeringIndicator, ThrottleIndicator } from './telemetry'
import { DEFAULT_STEERING_DEADZONE } from './utils/gamepadConfigDefaults'

type ControllerTelemetryProps = Partial<GlobalOverlaySettings>

const ControllerTelemetry: React.FC<ControllerTelemetryProps> = ({ appearance, config }) => {
  const { controllerData } = useGamepad(config)

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
          value={controllerData?.steering}
        />
        <ThrottleIndicator value={controllerData?.accelerate} color={appearance?.accelerateColor} />
        <BrakeIndicator value={controllerData?.brake} color={appearance?.brakeColor} />
        <SteeringIndicator
          direction="right"
          steeringDeadzone={Number(config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE)}
          color={appearance?.steeringColor}
          value={controllerData?.steering}
        />
      </Grid>
    </Flex>
  )
}

export default ControllerTelemetry
