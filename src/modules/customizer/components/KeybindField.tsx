import { Box, CloseButton, Flex, Grid, Select, Stack, Text, useColorMode } from '@chakra-ui/react'
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
      flexDirection="column-reverse"
      borderRadius="md"
      transition="background-color 0.2s ease-in-out"
      backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
      boxShadow="base"
    >
      <Grid gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)']} gridGap={4} p={4}>
        <Box>
          <Field name={`${name}.${index}.action`}>
            {({ field }: FieldProps<string>) => (
              <Stack as="label" htmlFor={`${name}.${index}.action`} spacing={2}>
                <Text as="span" fontSize="sm" userSelect="none">
                  Action
                </Text>
                <Select placeholder="Select option" {...field}>
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
          <NumericField label="Button/Axis" name={`${name}.${index}.button`} autoComplete="off" />
        </Box>
      </Grid>
      <Flex
        className="remove-button"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={4}
        borderBottom="1px solid"
        borderBottomColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
      >
        <Text fontSize="md" fontWeight={600}>
          Keybind
        </Text>
        <CloseButton type="button" aria-label="Remove" onClick={onRemove} />
      </Flex>
    </Flex>
  )
}

export default KeybindField
