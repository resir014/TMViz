import {
  Button,
  Grid,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { useField } from 'formik';
import * as React from 'react';
import { HexColorPicker } from 'react-colorful';
import isValidHex from '~/utils/isValidHex';

import 'react-colorful/dist/index.css';
import styles from './ColorInputField.module.css';
import ErrorMessage from './ErrorMessage';

interface ColorInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hideLabel?: boolean;
  hideErrors?: boolean;
  name: string;
}

const ColorInputField: React.FC<ColorInputFieldProps> = ({
  label,
  hideLabel,
  hideErrors,
  name,
  ...props
}) => {
  const [field, meta, helpers] = useField({ name, ...props });

  const buttonColor = isValidHex(meta.value) ? meta.value : undefined;

  const renderLabel = () => {
    if (hideLabel) {
      return <VisuallyHidden as="span">{label}</VisuallyHidden>;
    }

    return (
      <Text as="span" fontSize="sm" userSelect="none">
        {label}
      </Text>
    );
  };

  return (
    <Stack as="label" htmlFor={name} spacing={hideLabel ? 0 : 2}>
      {label && renderLabel()}
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
            <HexColorPicker
              className={styles.root}
              color={meta.value}
              onChange={color => helpers.setValue(color)}
            />
          </PopoverContent>
        </Popover>
      </Grid>
      {!hideErrors && <ErrorMessage name={name} />}
    </Stack>
  );
};

export default ColorInputField;
