import { Text, TextProps } from '@chakra-ui/react'
import { Field, FieldProps, getIn } from 'formik'
import * as React from 'react'

interface ErrorMessageProps extends TextProps {
  name: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name, ...rest }) => (
  <Field name={name}>
    {({ form }: FieldProps) => {
      const error = getIn(form.errors, name)
      const touched = getIn(form.touched, name)

      return touched && error && typeof error === 'string' ? (
        <Text color="red.500" fontSize="sm" {...rest}>
          {error}
        </Text>
      ) : null
    }}
  </Field>
)

export default ErrorMessage
