import { Text, TextProps } from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'
import * as React from 'react'

interface ErrorMessageProps extends TextProps {
  name: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ name, ...rest }) => (
  <Field name={name}>
    {({ meta }: FieldProps) => {
      return meta.touched && meta.error ? (
        <Text color="red.500" fontSize="sm" {...rest}>
          {meta.error}
        </Text>
      ) : null
    }}
  </Field>
)

export default ErrorMessage
