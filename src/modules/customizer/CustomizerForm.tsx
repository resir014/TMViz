/* eslint-disable react/no-array-index-key */
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Stack, Text, Box, Grid, Link, useToast, Select, IconButton, Flex } from '@chakra-ui/react'
import { Field, FieldArray, FieldProps, Form, Formik } from 'formik'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { useLocalStorage } from 'react-use'
import { ColorInputField, NumericField } from '~/components/form'
import { CustomizerFormSettings } from '~/types/overlay'
import useHasMounted from '~/utils/useHasMounted'
import defaultConfig from './utils/defaultConfig'
import { parseConfigToFormData, parseFormDataToGlobalConfig } from '../parser'
import { FormSectionHeader, FormSectionSubheader } from './components'
import CustomizerClipboard from './CustomizerClipboard'
import CustomizerSave from './CustomizerSave'
import controllerActions from './utils/controllerActions'
import validationSchema from './utils/validationSchema'
import ErrorMessage from '~/components/form/ErrorMessage'

const CustomizerPreview = dynamic(() => import('./CustomizerPreview'), { ssr: false })

const CustomizerForm: React.FC = () => {
  const toast = useToast()
  const hasMounted = useHasMounted()
  const [settings, setSettings] = useLocalStorage('tmviz-settings', defaultConfig)

  const formInitialValues = React.useMemo(() => parseConfigToFormData(settings), [settings])

  if (!hasMounted) {
    return null
  }

  const handleSubmit = (values: CustomizerFormSettings) => {
    setSettings(parseFormDataToGlobalConfig(values))
    toast({
      description: 'Overlay settings saved.',
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }

  return (
    <Box as="section" flex="1 1 auto" px={6} pt={8} pb={12}>
      <Formik enableReinitialize validationSchema={validationSchema} initialValues={formInitialValues} onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form>
              <Grid gridTemplateColumns={['1fr', null, null, '1fr 1fr']} gridGap={12}>
                <Stack spacing={8}>
                  <FormSectionHeader title="Customizer" />
                  <Stack spacing={6}>
                    <FormSectionSubheader title="Appearance" subtitle="Tweak the look and feel of your overlay." />
                    <Grid gridTemplateColumns={['1fr', null, null, 'repeat(3, 1fr)']} gridGap={4}>
                      <ColorInputField label="Accelerator color" name="appearance.accelerateColor" autoComplete="off" />
                      <ColorInputField label="Brake color" name="appearance.brakeColor" autoComplete="off" />
                      <ColorInputField label="Steering color" name="appearance.steeringColor" autoComplete="off" />
                    </Grid>
                    <Stack spacing={6}>
                      <FormSectionSubheader
                        title="Controller settings"
                        subtitle={
                          <Text fontSize="sm">
                            Use{' '}
                            <Link href="https://gamepad-tester.com/" isExternal>
                              Gamepad Tester
                            </Link>{' '}
                            to find the values that correspond to the button you&apos;re using.
                          </Text>
                        }
                      />
                      <FieldArray name="keybinds">
                        {arrayHelpers => (
                          <Stack spacing={4}>
                            <Box>
                              <IconButton
                                type="button"
                                aria-label="Remove"
                                icon={<AddIcon />}
                                onClick={() => arrayHelpers.push({ action: '', button: '' })}
                              />
                            </Box>
                            {values.keybinds && values.keybinds.length > 0
                              ? values.keybinds.map((_, index) => (
                                  <Grid gridTemplateColumns="1fr 40px" gridGap={4} key={index}>
                                    <Grid gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)']} gridGap={4}>
                                      <Box>
                                        <Field name={`keybinds.${index}.action`}>
                                          {({ field }: FieldProps<string>) => (
                                            <Stack as="label" htmlFor="" spacing={2}>
                                              <Text as="span" fontSize="sm">
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
                                        <NumericField label="Button/Axis" name={`keybinds.${index}.button`} autoComplete="off" />
                                      </Box>
                                    </Grid>
                                    <Flex alignItems="flex-end">
                                      <IconButton
                                        type="button"
                                        aria-label="Remove"
                                        icon={<MinusIcon />}
                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                      />
                                    </Flex>
                                  </Grid>
                                ))
                              : null}
                            {!values.keybinds.length && (
                              <Text color="red.500" fontSize="sm">
                                Must have at least one keybind
                              </Text>
                            )}
                          </Stack>
                        )}
                      </FieldArray>
                      <Stack spacing={6}>
                        <FormSectionSubheader title="Advanced" />
                        <NumericField label="Steering deadzone" name="config.steeringDeadzone" autoComplete="off" />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack spacing={8}>
                  <Stack spacing={6}>
                    <FormSectionHeader title="Overlay URL" />
                    <CustomizerClipboard />
                    <CustomizerSave />
                  </Stack>
                  <CustomizerPreview />
                </Stack>
              </Grid>
            </Form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default CustomizerForm
