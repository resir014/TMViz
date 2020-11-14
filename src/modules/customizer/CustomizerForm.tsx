import {
  Stack,
  Input,
  Text,
  Box,
  Grid,
  Heading,
  Divider,
  Link,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  Code,
  Flex,
  Alert,
  AlertIcon,
  AlertDescription
} from '@chakra-ui/core'
import { dequal } from 'dequal/lite'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { toClipboard } from 'copee'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { useLocalStorage } from 'react-use'
import { ColorInputField, NumericField } from '~/components/form'
import { GlobalOverlaySettings } from '~/types/overlay'
import isValidHex from '~/utils/isValidHex'
import defaultConfig from './utils/defaultConfig'
import buildURLQuery from './utils/buildURLQuery'

const CustomizerPreview = dynamic(() => import('./CustomizerPreview'), { ssr: false })

const CustomizerForm: React.FC = () => {
  const toast = useToast()
  const [settings, setSettings] = useLocalStorage('tmviz-settings', defaultConfig)

  const formInitialValues = settings || defaultConfig

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
      framerate: yup.string().matches(/^\d+$/, 'Numbers only').required('Required field'),
      steeringAxis: yup.string().matches(/^\d+$/, 'Numbers only').required('Required field'),
      steeringDeadzone: yup
        .string()
        .matches(/^[0-9]\d*(\.\d+)?$/, 'Numbers only')
        .required('Required field')
    })
  })

  const buildURL = (values: GlobalOverlaySettings) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/overlay?${buildURLQuery(values)}`
  }

  const handleCopy = (values: GlobalOverlaySettings) => () => {
    const success = toClipboard(buildURL(values))

    if (success) {
      toast({
        description: 'Successfully copied to clipboard.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
    }
  }

  return (
    <Box as="section" flex="1 1 auto" px={6} pt={8} pb={24}>
      <Formik enableReinitialize validationSchema={validationSchema} initialValues={formInitialValues} onSubmit={handleSubmit}>
        {({ values, initialValues }) => {
          return (
            <Form>
              <Grid gridTemplateColumns={['1fr', null, null, '1fr 1fr']} gridGap={12}>
                <Stack spacing={8}>
                  <Box>
                    <Heading as="h1" mb={2}>
                      Customizer
                    </Heading>
                    <Divider />
                  </Box>
                  <Stack spacing={6}>
                    <Stack spacing={2}>
                      <Heading as="h2" size="lg">
                        Appearance
                      </Heading>
                      <Text>Tweak the look and feel of your overlay.</Text>
                    </Stack>
                    <Stack spacing={4}>
                      <ColorInputField label="Accelerator color" name="appearance.accelerateColor" autoComplete="off" />
                      <ColorInputField label="Brake color" name="appearance.brakeColor" autoComplete="off" />
                      <ColorInputField label="Steering color" name="appearance.steeringColor" autoComplete="off" />
                    </Stack>
                    <Stack spacing={6}>
                      <Stack spacing={2}>
                        <Heading as="h2" size="lg">
                          Controller settings
                        </Heading>
                        <Text>
                          Customise the button configuration based on your TrackMania keybinds. Use{' '}
                          <Link href="https://gamepad-tester.com/" isExternal>
                            Gamepad Tester
                          </Link>{' '}
                          to find the values that correspond to the button you&apos;re using.
                        </Text>
                      </Stack>
                      <Grid gridTemplateColumns={['1fr', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gridGap={4}>
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
                    <Box>
                      <Heading as="h1" mb={2}>
                        Overlay URL
                      </Heading>
                      <Divider />
                    </Box>
                    <Stack spacing={4}>
                      <Text>
                        Once you&apos;ve finished configuring your widget, copy the following URL, width, and height into a{' '}
                        <strong>browser source</strong>:
                      </Text>
                      <InputGroup>
                        <Input readOnly value={`${process.env.NEXT_PUBLIC_BASE_URL}/overlay?${buildURLQuery(values)}`} pr="5rem" />
                        <InputRightElement width="4.5rem" p={0}>
                          <Button type="button" size="sm" textTransform="uppercase" borderRadius="sm" onClick={handleCopy(values)}>
                            Copy
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Text>
                        width: <Code>256</Code>px, height: <Code>140</Code>px
                      </Text>
                    </Stack>
                    <Stack spacing={4}>
                      <Flex alignItems="center">
                        <Button type="submit">Save settings</Button>
                        {!dequal(values, initialValues) && (
                          <Text ml={4} color="red.500" fontSize="sm">
                            Changes detected.
                          </Text>
                        )}
                      </Flex>
                      <Alert status="info">
                        <AlertIcon />
                        <AlertDescription>
                          Settings are saved locally. Clearing your browser history will reset your settings.
                        </AlertDescription>
                      </Alert>
                    </Stack>
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
