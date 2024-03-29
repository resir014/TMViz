import { Checkbox, Stack } from '@chakra-ui/react';
import { useField } from 'formik';
import * as React from 'react';
import { ErrorMessage } from './error-message';

export interface CheckboxFieldProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'aria-invalid'> {
  label?: string;
  hideLabel?: boolean;
  hideErrors?: boolean;
  name: string;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  hideErrors,
  name,
  ...props
}) => {
  const [field, meta] = useField({ name, ...props });

  return (
    <Stack as="label" htmlFor={name} spacing={2}>
      <Checkbox isInvalid={meta.touched && !!meta.error} {...field} {...props}>
        {label}
      </Checkbox>
      {!hideErrors && <ErrorMessage name={name} />}
    </Stack>
  );
};
