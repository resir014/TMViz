import { Box, Grid, Input, Popover, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import { HexColorPicker } from 'react-colorful'
import isValidHex from '~/utils/isValidHex'

import 'react-colorful/dist/index.css'
import styles from './ColorInputField.module.css'

interface ColorInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  name: string
}

const ColorInputField: React.FC<ColorInputFieldProps> = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField({ name, ...props })

  return (
    <Stack as="label" htmlFor={name} spacing={2}>
      {label && (
        <Text as="span" fontSize="sm">
          {label}
        </Text>
      )}
      <Grid gridTemplateColumns="1fr 64px" gridGap={4}>
        <Input isInvalid={meta.touched && !!meta.error} {...field} {...props} />
        <Popover>
          <PopoverTrigger>
            <Box
              as="button"
              type="button"
              aria-label="Pick color"
              backgroundColor={isValidHex(meta.value) ? meta.value : undefined}
              borderRadius="md"
            />
          </PopoverTrigger>
          <PopoverContent display="flex" alignItems="center" justifyContent="center" overflow="hidden">
            <HexColorPicker className={styles.root} color={meta.value} onChange={color => helpers.setValue(color)} />
          </PopoverContent>
        </Popover>
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
