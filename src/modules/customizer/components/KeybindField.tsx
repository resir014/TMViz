import { Box, CloseButton, Flex, Grid, Select, Stack, Text, useColorMode, VisuallyHidden } from '@chakra-ui/react'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { NumericField } from '~/components/form'
import controllerActions from '../utils/controllerActions'

interface KeybindFieldProps {
  index: number
  name: string
  onRemove: () => void
}

const KeybindField: React.FC<KeybindFieldProps> = ({ index, name, onRemove }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      flexDirection="column"
      borderRadius="md"
      transition="background-color 0.2s ease-in-out"
      backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
      boxShadow="base"
    >
      <Flex
        className="remove-button"
        alignItems="center"
        justifyContent="space-between"
        py={1}
        px={4}
        borderBottom="1px solid"
        borderBottomColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
      >
        <Text fontSize="md" fontWeight={600}>
          Keybind
        </Text>
        <CloseButton type="button" aria-label="Remove" onClick={onRemove} />
      </Flex>
      <Grid gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)']} gridGap={4} p={4}>
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
            hideErrors
            placeholder="Button/axis number"
            name={`${name}.${index}.button`}
            autoComplete="off"
          />
        </Box>
      </Grid>
    </Flex>
  )
}

export default KeybindField
