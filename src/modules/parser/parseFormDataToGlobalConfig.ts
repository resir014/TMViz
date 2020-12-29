import { CustomizerFormSettings, GlobalOverlaySettings } from '~/types/overlay'

export default function parseFormDataToGlobalConfig(values: CustomizerFormSettings): GlobalOverlaySettings {
  const keybinds: GlobalOverlaySettings['config'] = {}

  if (values.keybinds) {
    values.keybinds.forEach(keybind => {
      keybinds[keybind.action] = keybind.button
    })
  }

  return {
    version: 1,
    appearance: values.appearance,
    config: {
      ...(keybinds || {}),
      steeringDeadzone: values.config.steeringDeadzone,
      controllerIndex: values.config.controllerIndex
    }
  }
}
