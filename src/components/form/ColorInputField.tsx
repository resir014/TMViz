import { Box, Grid, Input, Stack, Text } from '@chakra-ui/core'
import { useField } from 'formik'
import * as React from 'react'
import isValidHex from '~/utils/isValidHex'

interface ColorInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  name: string
}

const ColorInputField: React.FC<ColorInputFieldProps> = ({ label, name, ...props }) => {
  const [field, meta] = useField({ name, ...props })

  return (
    <Stack as="label" htmlFor={name} spacing={2}>
      {label && (
        <Text as="span" fontSize="sm">
          {label}
        </Text>
      )}
      <Grid gridTemplateColumns="1fr 64px" gridGap={4}>
        <Input isInvalid={meta.touched && !!meta.error} {...field} {...props} />
        <Box backgroundColor={isValidHex(meta.value) ? meta.value : undefined} borderRadius="md" />
      </Grid>
      {meta.touched && !!meta.error && (
        <Text color="red.500" fontSize="sm">
          {meta.error}
        </Text>
      )}
    </Stack>
  )
}

export default ColorInputField
