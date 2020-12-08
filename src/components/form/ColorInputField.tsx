import { Button, Grid, Input, Popover, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import { HexColorPicker } from 'react-colorful'
import isValidHex from '~/utils/isValidHex'

import 'react-colorful/dist/index.css'
import styles from './ColorInputField.module.css'
import ErrorMessage from './ErrorMessage'

interface ColorInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  name: string
}

const ColorInputField: React.FC<ColorInputFieldProps> = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField({ name, ...props })

  const buttonColor = isValidHex(meta.value) ? meta.value : undefined

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
            <Button
              type="button"
              aria-label="Pick color"
              backgroundColor={buttonColor}
              borderRadius="md"
              _hover={{ backgroundColor: buttonColor }}
              _focus={{ backgroundColor: buttonColor }}
              _active={{ backgroundColor: buttonColor }}
            />
          </PopoverTrigger>
          <PopoverContent
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="none"
            backgroundColor="transparent"
            borderRadius={8}
          >
            <HexColorPicker className={styles.root} color={meta.value} onChange={color => helpers.setValue(color)} />
          </PopoverContent>
        </Popover>
      </Grid>
      <ErrorMessage name={name} />
    </Stack>
  )
}

export default ColorInputField
