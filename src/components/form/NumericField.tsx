import { Input, Stack, Text } from '@chakra-ui/core'
import { useField } from 'formik'
import * as React from 'react'

interface NumericFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  name: string
}

const NumericField: React.FC<NumericFieldProps> = ({ label, name, ...props }) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <Stack as="label" htmlFor={name} spacing={2}>
      {label && (
        <Text as="span" fontSize="sm">
          {label}
        </Text>
      )}
      <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} {...props} />
      {meta.touched && !!meta.error && (
        <Text color="red.500" fontSize="sm">
          {meta.error}
        </Text>
      )}
    </Stack>
  )
}

export default NumericField
