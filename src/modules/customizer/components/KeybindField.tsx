import { CloseIcon } from '@chakra-ui/icons'
import { Box, Fade, Flex, Grid, IconButton, Select, Stack, Text, useColorMode } from '@chakra-ui/react'
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
  const [isOpen, setIsOpen] = React.useState(false)
  const { colorMode } = useColorMode()

  return (
    <Box
      position="relative"
      pt={4}
      pb={6}
      borderBottom="1px solid"
      borderBottomColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
      transition="background-color 0.2s ease-in-out"
      _hover={{ backgroundColor: colorMode === 'dark' ? 'gray.900' : 'gray.100' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
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
      <Fade in={isOpen}>
        <Flex className="remove-button" alignItems="flex-end" position="absolute" top={-4} right={-4}>
          <IconButton type="button" size="sm" colorScheme="red" aria-label="Remove" icon={<CloseIcon />} onClick={onRemove} />
        </Flex>
      </Fade>
    </Box>
  )
}

export default KeybindField
