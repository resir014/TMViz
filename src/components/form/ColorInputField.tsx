import {
  Button,
  Grid,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { useField } from 'formik';
import * as React from 'react';
import { HexColorPicker } from 'react-colorful';

import ErrorMessage from './ErrorMessage';
import isValidHex from '~/utils/is-valid-hex';

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
  const [field, meta, helpers] = useField<string>({ name, ...props });

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
          <PopoverContent borderRadius={8}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Pick a color.</PopoverHeader>
            <PopoverBody
              display="flex"
              justifyContent="center"
              sx={{ '> .react-colorful': { width: '100%' } }}
            >
              <HexColorPicker color={meta.value} onChange={color => helpers.setValue(color)} />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Grid>
      {!hideErrors && <ErrorMessage name={name} />}
    </Stack>
  );
};

export default ColorInputField;
