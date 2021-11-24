import {
  Box,
  CloseButton,
  Flex,
  Grid,
  Select,
  Stack,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import * as React from 'react';
import controllerActions from '../utils/controller-actions';
import { NumericField } from '~/components/form';

interface KeybindFieldProps {
  index: number;
  name: string;
  onRemove: () => void;
}

const KeybindField: React.FC<KeybindFieldProps> = ({ index, name, onRemove }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      px={6}
      py={4}
      _notLast={{
        borderBottom: '1px solid',
        borderBottomColor: colorMode === 'dark' ? 'gray.800' : 'gray.100',
      }}
    >
      <Grid gridTemplateColumns="1fr 40px" gridGap={4}>
        <Grid gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)']} gridGap={4}>
          <Box>
            <Field name={`${name}.${index}.action`}>
              {({ field }: FieldProps<string>) => (
                <Stack as="label" htmlFor={`${name}.${index}.action`} spacing={0}>
                  <VisuallyHidden as="span">Action</VisuallyHidden>
                  <Select placeholder="Unassigned" {...field}>
                    {controllerActions.map(action => (
                      <option key={action.value} value={action.value}>
                        {action.label}
                      </option>
                    ))}
                  </Select>
                </Stack>
              )}
            </Field>
          </Box>
          <Box>
            <NumericField
              label="Button/axis number"
              hideLabel
              placeholder="Button/axis number"
              name={`${name}.${index}.button`}
              autoComplete="off"
            />
          </Box>
        </Grid>
        <Flex alignItems="flex-start">
          <CloseButton type="button" size="lg" aria-label="Remove" onClick={onRemove} />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default KeybindField;
