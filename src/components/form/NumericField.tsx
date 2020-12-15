import { Input, Stack, Text } from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import ErrorMessage from './ErrorMessage'

interface NumericFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  name: string
}

const NumericField: React.FC<NumericFieldProps> = ({ label, name, ...props }) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <Stack as="label" htmlFor={name} spacing={2}>
      {label && (
        <Text as="span" fontSize="sm" userSelect="none">
          {label}
        </Text>
      )}
      <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} {...props} />
      <ErrorMessage name={name} />
    </Stack>
  )
}

export default NumericField
