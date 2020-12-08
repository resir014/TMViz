interface ControllerActionsOptions {
  label: string
  value: string
}

const controllerActions: ControllerActionsOptions[] = [
  {
    label: 'Accelerate button',
    value: 'accelerateButton'
  },
  {
    label: 'Brake button',
    value: 'brakeButton'
  },
  {
    label: 'Accelerate axis',
    value: 'accelerateAxis'
  },
  {
    label: 'Brake axis',
    value: 'brakeAxis'
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
