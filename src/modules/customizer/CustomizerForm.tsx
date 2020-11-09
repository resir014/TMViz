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
  useColorMode
} from '@chakra-ui/core'
import * as yup from 'yup'
import { Field, FieldProps, Form, Formik } from 'formik'
import { toClipboard } from 'copee'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { GlobalOverlaySettings } from '~/types/gamepad'
import defaultConfig from './utils/defaultConfig'
import buildURLQuery from './utils/buildURLQuery'

const ControllerTelemetry = dynamic(() => import('~/modules/trackmania'))

const CustomizerForm: React.FC = () => {
  const toast = useToast()
  const { colorMode } = useColorMode()

  const handleSubmit = (values: GlobalOverlaySettings) => {
    console.log(values)
  }

  const validationSchema = yup.object().shape({
    appearance: yup.object().shape<GlobalOverlaySettings['appearance']>({
      accelerateColor: yup.string().required('Required field'),
      brakeColor: yup.string().required('Required field'),
      steeringColor: yup.string().required('Required field')
    }),
    config: yup.object().shape<GlobalOverlaySettings['config']>({
      accelerateButton: yup.number().required('Required field'),
      brakeButton: yup.number().required('Required field'),
      framerate: yup.number().required('Required field'),
      steeringAxis: yup.number().required('Required field'),
      steeringDeadzone: yup.number().required('Required field')
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
                    <Field name="appearance.accelerateColor">
                      {({ field, meta }: FieldProps<string>) => (
                        <Stack spacing={2}>
                          <Text as="label" htmlFor="appearance.accelerateColor" fontSize="sm">
                            Accelerator color
                          </Text>
                          <Grid gridTemplateColumns="1fr 64px" gridGap={4}>
                            <Input isInvalid={meta.touched && !!meta.error} {...field} />
                            <Box backgroundColor={meta.value} borderRadius="md" />
                          </Grid>
                          {meta.touched && !!meta.error && (
                            <Text color="red.500" fontSize="sm">
                              {meta.error}
                            </Text>
                          )}
                        </Stack>
                      )}
                    </Field>
                    <Field name="appearance.brakeColor">
                      {({ field, meta }: FieldProps<string>) => (
                        <Stack spacing={2}>
                          <Text as="label" htmlFor="appearance.brakeColor" fontSize="sm">
                            Brake color
                          </Text>
                          <Grid gridTemplateColumns="1fr 64px" gridGap={4}>
                            <Input isInvalid={meta.touched && !!meta.error} {...field} />
                            <Box backgroundColor={meta.value} borderRadius="md" />
                          </Grid>
                          {meta.touched && !!meta.error && (
                            <Text color="red.500" fontSize="sm">
                              {meta.error}
                            </Text>
                          )}
                        </Stack>
                      )}
                    </Field>
                    <Field name="appearance.steeringColor">
                      {({ field, meta }: FieldProps<string>) => (
                        <Stack spacing={2}>
                          <Text as="label" htmlFor="appearance.steeringColor" fontSize="sm">
                            Steering color
                          </Text>
                          <Grid gridTemplateColumns="1fr 64px" gridGap={4}>
                            <Input isInvalid={meta.touched && !!meta.error} {...field} />
                            <Box backgroundColor={meta.value} borderRadius="md" />
                          </Grid>
                          {meta.touched && !!meta.error && (
                            <Text color="red.500" fontSize="sm">
                              {meta.error}
                            </Text>
                          )}
                        </Stack>
                      )}
                    </Field>
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
                      <Field name="config.framerate">
                        {({ field, meta }: FieldProps<string>) => (
                          <Stack spacing={2}>
                            <Text as="label" htmlFor="config.framerate" fontSize="sm">
                              Framerate (fps)
                            </Text>
                            <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} />
                            {meta.touched && !!meta.error && (
                              <Text color="red.500" fontSize="sm">
                                {meta.error}
                              </Text>
                            )}
                          </Stack>
                        )}
                      </Field>
                      <Field name="config.accelerateButton">
                        {({ field, meta }: FieldProps<string>) => (
                          <Stack spacing={2}>
                            <Text as="label" htmlFor="config.accelerateButton" fontSize="sm">
                              Accelerate button
                            </Text>
                            <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} />
                            {meta.touched && !!meta.error && (
                              <Text color="red.500" fontSize="sm">
                                {meta.error}
                              </Text>
                            )}
                          </Stack>
                        )}
                      </Field>
                      <Field name="config.brakeButton">
                        {({ field, meta }: FieldProps<string>) => (
                          <Stack spacing={2}>
                            <Text as="label" htmlFor="config.brakeButton" fontSize="sm">
                              Brake button
                            </Text>
                            <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} />
                            {meta.touched && !!meta.error && (
                              <Text color="red.500" fontSize="sm">
                                {meta.error}
                              </Text>
                            )}
                          </Stack>
                        )}
                      </Field>
                      <Field name="config.steeringAxis">
                        {({ field, meta }: FieldProps<string>) => (
                          <Stack spacing={2}>
                            <Text as="label" htmlFor="config.steeringAxis" fontSize="sm">
                              Steering axis
                            </Text>
                            <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} />
                            {meta.touched && !!meta.error && (
                              <Text color="red.500" fontSize="sm">
                                {meta.error}
                              </Text>
                            )}
                          </Stack>
                        )}
                      </Field>
                      <Field name="config.steeringDeadzone">
                        {({ field, meta }: FieldProps<string>) => (
                          <Stack spacing={2}>
                            <Text as="label" htmlFor="config.steeringDeadzone" fontSize="sm">
                              Steering deadzone (advanced)
                            </Text>
                            <Input inputMode="numeric" isInvalid={meta.touched && !!meta.error} {...field} />
                            {meta.touched && !!meta.error && (
                              <Text color="red.500" fontSize="sm">
                                {meta.error}
                              </Text>
                            )}
                          </Stack>
                        )}
                      </Field>
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
                    <Box display="inline-block" p={6} backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.800'} borderRadius="lg">
                      <ControllerTelemetry appearance={values.appearance} config={values.config} />
                    </Box>
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
