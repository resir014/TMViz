import * as React from 'react'
import { css } from '@emotion/core'
import { Grid, Flex } from '@chakra-ui/core'
import { GlobalOverlaySettings } from '~/types/gamepad'

import useGamepad, { DEFAULT_STEERING_DEADZONE } from './utils/useGamepad'
import { BrakeIndicator, SteeringIndicator, ThrottleIndicator } from './telemetry'

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
        css={css`
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        `}
      >
        <SteeringIndicator
          direction="left"
          steeringDeadzone={config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE}
          color={appearance?.steeringColor}
          value={controllerData?.steering}
        />
        <ThrottleIndicator value={controllerData?.accelerate} color={appearance?.accelerateColor} />
        <BrakeIndicator value={controllerData?.brake} color={appearance?.brakeColor} />
        <SteeringIndicator
          direction="right"
          steeringDeadzone={config?.steeringDeadzone || DEFAULT_STEERING_DEADZONE}
          color={appearance?.steeringColor}
          value={controllerData?.steering}
        />
      </Grid>
    </Flex>
  )
}

export default ControllerTelemetry
