import { MinusIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, IconButton, Select, Stack, Text, useColorMode } from '@chakra-ui/react'
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
    <Grid
      pb={6}
      gridTemplateColumns="1fr 40px"
      gridGap={4}
      borderBottom="1px solid"
      borderBottomColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
      _notFirst={{ pt: 4 }}
    >
      <Grid gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)']} gridGap={4}>
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
      <Flex alignItems="flex-end">
        <IconButton type="button" aria-label="Remove" icon={<MinusIcon />} onClick={onRemove} />
      </Flex>
    </Grid>
  )
}

export default KeybindField
