/* eslint-disable react/no-array-index-key */
import { AddIcon } from '@chakra-ui/icons'
import { Stack, Text, Box, Grid, Link, useToast, Button } from '@chakra-ui/react'
import { FieldArray, Form, Formik } from 'formik'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { useLocalStorage } from 'react-use'
import { ColorInputField, NumericField } from '~/components/form'
import { CustomizerFormSettings } from '~/types/overlay'
import useHasMounted from '~/utils/useHasMounted'
import defaultConfig from './utils/defaultConfig'
import { parseConfigToFormData, parseFormDataToGlobalConfig } from '../parser'
import { FormSectionSubheader, KeybindField } from './components'
import CustomizerClipboard from './CustomizerClipboard'
import CustomizerSave from './CustomizerSave'
import validationSchema from './utils/validationSchema'

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
    <Box as="section" flex="1 1 auto" px={6} py={6}>
      <Formik enableReinitialize validationSchema={validationSchema} initialValues={formInitialValues} onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form>
              <Grid gridTemplateColumns={['1fr', null, null, '1fr 1fr']} gridGap={12}>
                <Stack spacing={10}>
                  <Stack spacing={4}>
                    <FormSectionSubheader title="Appearance" subtitle="Tweak the look and feel of your overlay." />
                    <Grid gridTemplateColumns={['1fr', null, null, 'repeat(3, 1fr)']} gridGap={4}>
                      <ColorInputField label="Accelerator color" name="appearance.accelerateColor" autoComplete="off" />
                      <ColorInputField label="Brake color" name="appearance.brakeColor" autoComplete="off" />
                      <ColorInputField label="Steering color" name="appearance.steeringColor" autoComplete="off" />
                    </Grid>
                  </Stack>
                  <FieldArray name="keybinds">
                    {arrayHelpers => (
                      <Stack spacing={4}>
                        <FormSectionSubheader
                          title="Controller settings"
                          subtitle={
                            <Text fontSize="md">
                              Use{' '}
                              <Link href="https://gamepad-tester.com/" isExternal>
                                Gamepad Tester
                              </Link>{' '}
                              to find the values that correspond to the button you&apos;re using.
                            </Text>
                          }
                          rightElement={
                            <Button type="button" leftIcon={<AddIcon />} onClick={() => arrayHelpers.push({ action: '', button: '' })}>
                              Add Keybind
                            </Button>
                          }
                        />
                        <Box>
                          {values.keybinds && values.keybinds.length > 0
                            ? values.keybinds.map((_, index) => (
                                <KeybindField key={index} name="keybinds" index={index} onRemove={() => arrayHelpers.remove(index)} />
                              ))
                            : null}
                        </Box>
                        {!values.keybinds.length && (
                          <Text color="red.500" fontSize="sm">
                            Must have at least one keybind
                          </Text>
                        )}
                      </Stack>
                    )}
                  </FieldArray>
                  <Stack spacing={4}>
                    <FormSectionSubheader title="Advanced" />
                    <NumericField label="Steering deadzone" name="config.steeringDeadzone" autoComplete="off" />
                  </Stack>
                </Stack>
                <Stack spacing={10}>
                  <Stack spacing={4}>
                    <FormSectionSubheader
                      title="Overlay URL"
                      subtitle={
                        <Text fontSize="md">
                          Once you&apos;ve finished configuring your widget, copy the following URL, width, and height into a{' '}
                          <strong>browser source</strong>:
                        </Text>
                      }
                    />
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
