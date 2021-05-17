interface ControllerActionsOptions {
  label: string
  value: string
  description?: string
}

const controllerActions: ControllerActionsOptions[] = [
  {
    label: 'Accelerate button',
    value: 'accelerateButton'
  },
  {
    label: 'Accelerate axis',
    value: 'accelerateAxis'
  },
  {
    label: 'Brake button',
    value: 'brakeButton'
  },
  {
    label: 'Steering button (left)',
    value: 'steeringLeftButton'
  },
  {
    label: 'Steering button (right)',
    value: 'steeringRightButton'
  },
  {
    label: 'Steering axis',
    value: 'steeringAxis'
  }
]

export default controllerActions
