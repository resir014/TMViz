import { Input, Stack, Text, VisuallyHidden } from '@chakra-ui/react';
import { useField } from 'formik';
import * as React from 'react';
import ErrorMessage from './ErrorMessage';

interface NumericFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hideLabel?: boolean;
  hideErrors?: boolean;
  name: string;
}

const NumericField: React.FC<NumericFieldProps> = ({
  label,
  hideLabel,
  hideErrors,
  name,
  ...props
}) => {
  const [field, meta] = useField({ name, ...props });

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
      <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} {...props} />
      {!hideErrors && <ErrorMessage name={name} />}
    </Stack>
  );
};

export default NumericField;
