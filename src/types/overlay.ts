export interface ControllerData {
  accelerate: number;
  brake: number;
  steering: number;
  steeringDeadzone: number;
}

export interface SteeringValues {
  left: number;
  right: number;
}

export interface GamepadAppearanceSettings {
  accelerateColor: string;
  brakeColor: string;
  steeringColor: string;
  disableSteering?: boolean;
  disableAccelerate?: boolean;
  disableBrake?: boolean;
}

export interface ControllerTelemetry {
  isConnected?: boolean;
  data: Partial<ControllerData>;
}

export interface TrackmaniaOverlayConfig {
  controllerIndex: string | string[];
  accelerateButton: string;
  brakeButton: string;
  accelerateAxis: string;
  steeringLeftButton: string;
  steeringRightButton: string;
  steeringAxis: string;
  steeringDeadzone: string;
}

export type ControllerActions = keyof Omit<
  TrackmaniaOverlayConfig,
  'controllerIndex' | 'steeringDeadzone'
>;

interface ControllerSettingsMap {
  action: ControllerActions;
  button: string;
}

export interface CustomizerFormSettings {
  version: number;
  appearance: GamepadAppearanceSettings;
  keybinds?: ControllerSettingsMap[];
  config: Partial<Pick<TrackmaniaOverlayConfig, 'controllerIndex' | 'steeringDeadzone'>>;
}

export interface GlobalOverlaySettings {
  version?: number;
  appearance: GamepadAppearanceSettings;
  config: Partial<TrackmaniaOverlayConfig>;
}
