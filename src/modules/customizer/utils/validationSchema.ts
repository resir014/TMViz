import * as yup from 'yup'
import isValidHex from '~/utils/isValidHex'

const keybindsSchema = yup.object().shape({
  action: yup.string().required('Required field'),
  button: yup
    .string()
    .matches(/^[0-9]\d*(\.\d+)?$/, 'Numbers only')
    .required('Required field')
})

const validationSchema = yup.object().shape({
  version: yup.number(),
  appearance: yup.object().shape({
    accelerateColor: yup.string().test('valid-color', 'Must be a valid color hex', isValidHex).required('Required field'),
    brakeColor: yup.string().test('valid-color', 'Must be a valid color hex', isValidHex).required('Required field'),
    steeringColor: yup.string().test('valid-color', 'Must be a valid color hex', isValidHex).required('Required field')
  }),
  keybinds: yup.array().of(keybindsSchema).required('Must have at least one keybind'),
  config: yup.object().shape({
    steeringDeadzone: yup
      .string()
      .matches(/^[0-9]\d*(\.\d+)?$/, 'Numbers only')
      .required('Required field')
  })
})

export default validationSchema
