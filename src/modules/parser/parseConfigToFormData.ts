import { DEFAULT_ACCELERATE_BUTTON, DEFAULT_BRAKE_BUTTON, DEFAULT_STEERING_AXIS, DEFAULT_STEERING_DEADZONE } from '~/types/constants'
import { CustomizerFormSettings, GlobalOverlaySettings, ControllerActions } from '~/types/overlay'
import theme from '~/utils/theme'

function parseKeybinds(globalConfig?: GlobalOverlaySettings): CustomizerFormSettings['keybinds'] {
  if (globalConfig) {
    const keybinds = (Object.keys(globalConfig.config).filter(
      keys => !['steeringDeadzone', 'controllerIndex'].includes(keys)
    ) as ControllerActions[]).map(keys => ({
      action: keys,
      button: `${globalConfig.config[keys]}`
    }))
    return keybinds
  }

  return []
}

export default function parseConfigToFormData(globalConfig?: GlobalOverlaySettings): CustomizerFormSettings {
  if (globalConfig) {
    return {
      version: globalConfig.version || 1,
      appearance: {
        ...globalConfig.appearance
      },
      keybinds: parseKeybinds(globalConfig),
      config: {
        steeringDeadzone: globalConfig.config.steeringDeadzone,
        controllerIndex: globalConfig.config.controllerIndex
      }
    }
  }

  return {
    version: 1,
    appearance: {
      accelerateColor: theme.colors.green[500],
      brakeColor: theme.colors.red[500],
      steeringColor: theme.colors.orange[500]
    },
    keybinds: [
      {
        action: 'accelerateButton',
        button: `${DEFAULT_ACCELERATE_BUTTON}`
      },
      {
        action: 'brakeButton',
        button: `${DEFAULT_BRAKE_BUTTON}`
      },
      {
        action: 'steeringAxis',
        button: `${DEFAULT_STEERING_AXIS}`
      }
    ],
    config: {
      steeringDeadzone: `${DEFAULT_STEERING_DEADZONE}`,
      controllerIndex: '0'
    }
  }
}
