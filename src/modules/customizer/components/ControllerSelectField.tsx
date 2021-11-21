import { Alert, AlertDescription, AlertIcon, Select, Stack } from '@chakra-ui/react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import * as React from 'react';
import { GamepadsMap, useGamepad } from '~/modules/gamepad';

interface ControllerSelectFieldProps {
  name: string;
}

const ControllerSelectField: React.FC<ControllerSelectFieldProps> = ({ name }) => {
  const [gamepads, setGamepads] = React.useState<GamepadsMap>({});
  useGamepad(newGamepads => setGamepads(newGamepads));

  const gamepadKeys = Object.keys(gamepads);

  return (
    <Field name={name}>
      {({ field }: FieldProps<string>) => (
        <Stack spacing="4">
          <Stack spacing={2}>
            <Select placeholder="No controller selected" {...field}>
              {gamepadKeys.map(pad => (
                <option key={pad} value={pad}>
                  Index {pad}: {gamepads[pad].id}
                </option>
              ))}
            </Select>
            <ErrorMessage name={name} />
          </Stack>

          {gamepadKeys.length === 0 && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>
                Press any button in your controller to start detection.
              </AlertDescription>
            </Alert>
          )}
        </Stack>
      )}
    </Field>
  );
};

export default ControllerSelectField;
