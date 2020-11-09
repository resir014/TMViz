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
  Code
} from '@chakra-ui/core'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import { toClipboard } from 'copee'
import * as React from 'react'
import { ColorInputField, NumericField } from '~/components/form'
import { GlobalOverlaySettings } from '~/types/gamepad'
import isValidHex from '~/utils/isValidHex'
import defaultConfig from './utils/defaultConfig'
import buildURLQuery from './utils/buildURLQuery'
import CustomizerPreview from './CustomizerPreview'

const CustomizerForm: React.FC = () => {
  const toast = useToast()

  const handleSubmit = (values: GlobalOverlaySettings) => {
    console.log(values)
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
      <Formik validationSchema={validationSchema} initialValues={defaultConfig} onSubmit={handleSubmit}>
        {({ values }) => (
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
                      <NumericField label="Framerate (fps)" name="config.framerate" autoComplete="off" />
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
                </Stack>
                <Stack spacing={6}>
                  <Box>
                    <Heading as="h1" mb={2}>
                      Preview
                    </Heading>
                    <Divider />
                  </Box>
                  <Box>
                    <CustomizerPreview values={values} />
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default CustomizerForm
