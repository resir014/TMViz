import { Stack, Text, Box, Grid, Link, useToast } from '@chakra-ui/core'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { useLocalStorage } from 'react-use'
import { ColorInputField, NumericField } from '~/components/form'
import { GlobalOverlaySettings } from '~/types/overlay'
import isValidHex from '~/utils/isValidHex'
import useHasMounted from '~/utils/useHasMounted'
import defaultConfig from './utils/defaultConfig'
import { FormSectionHeader, FormSectionSubheader } from './components'
import CustomizerClipboard from './CustomizerClipboard'
import CustomizerSave from './CustomizerSave'

const CustomizerPreview = dynamic(() => import('./CustomizerPreview'), { ssr: false })

const CustomizerForm: React.FC = () => {
  const toast = useToast()
  const hasMounted = useHasMounted()
  const [settings, setSettings] = useLocalStorage('tmviz-settings', defaultConfig)

  const formInitialValues = React.useMemo(() => settings || defaultConfig, [settings, defaultConfig])

  if (!hasMounted) {
    return null
  }

  const handleSubmit = (values: GlobalOverlaySettings) => {
    setSettings(values)
    toast({
      description: 'Overlay settings saved.',
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }

  const validationSchema = yup.object().shape({
    appearance: yup.object().shape<GlobalOverlaySettings['appearance']>({
      accelerateColor: yup.string().test('valid-color', 'Must be a valid color hex', isValidHex).required('Required field'),
      brakeColor: yup.string().test('valid-color', 'Must be a valid color hex', isValidHex).required('Required field'),
      steeringColor: yup.string().test('valid-color', 'Must be a valid color hex', isValidHex).required('Required field')
    }),
    config: yup.object().shape<GlobalOverlaySettings['config']>({
      accelerateButton: yup.string().matches(/^\d+$/, 'Numbers only').required('Required field'),
      brakeButton: yup.string().matches(/^\d+$/, 'Numbers only').required('Required field'),
      steeringAxis: yup.string().matches(/^\d+$/, 'Numbers only').required('Required field'),
      steeringDeadzone: yup
        .string()
        .matches(/^[0-9]\d*(\.\d+)?$/, 'Numbers only')
        .required('Required field')
    })
  })

  return (
    <Box as="section" flex="1 1 auto" px={6} pt={8} pb={12}>
      <Formik enableReinitialize validationSchema={validationSchema} initialValues={formInitialValues} onSubmit={handleSubmit}>
        {() => {
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
                            Customise the button configuration based on your TrackMania keybinds. Use{' '}
                            <Link href="https://gamepad-tester.com/" isExternal>
                              Gamepad Tester
                            </Link>{' '}
                            to find the values that correspond to the button you&apos;re using.
                          </Text>
                        }
                      />
                      <Grid gridTemplateColumns={['1fr', null, null, 'repeat(3, 1fr)']} gridGap={4}>
                        <NumericField label="Accelerate button" name="config.accelerateButton" autoComplete="off" />
                        <NumericField label="Brake button" name="config.brakeButton" autoComplete="off" />
                        <NumericField label="Steering axis" name="config.steeringAxis" autoComplete="off" />
                        <NumericField label="Steering deadzone (advanced)" name="config.steeringDeadzone" autoComplete="off" />
                      </Grid>
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
