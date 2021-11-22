import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react';
import { dequal } from 'dequal/lite';
import { useFormikContext } from 'formik';
import * as React from 'react';
import { FormSection, FormSectionHeader } from '../components';
import { CustomizerFormSettings } from '~/types/overlay';

const CustomizerSave: React.FC = () => {
  const { values, initialValues, isValid } = useFormikContext<CustomizerFormSettings>();

  const isValuesChanged = React.useMemo(
    () => !dequal(values, initialValues),
    [values, initialValues],
  );

  return (
    <FormSection>
      <FormSectionHeader title="Save" />
      <Stack spacing={4} p={6} flex="1 1 auto">
        <Stack spacing={2}>
          <Button type="submit" isFullWidth size="lg" disabled={!isValid} colorScheme="blue">
            Save settings
          </Button>
          {isValuesChanged && (
            <Box textAlign="center">
              <Text color="red.500" fontSize="sm">
                Changes detected.
              </Text>
            </Box>
          )}
        </Stack>
        <Alert
          status="info"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          borderTopLeftRadius="2xl"
          borderBottomRightRadius="2xl"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} mr={0} fontSize="lg">
            Settings are saved locally
          </AlertTitle>
          <AlertDescription>
            Clearing your browser history will reset your settings.
          </AlertDescription>
        </Alert>
      </Stack>
    </FormSection>
  );
};

export default CustomizerSave;
