import { Box, Stack, Text } from '@chakra-ui/core'
import * as React from 'react'
import { Logo } from '~/components/layout'

const CustomizerLoading: React.FC = () => {
  const raf = React.useRef<number>()
  const [ellipsisCount, setEllipsisCount] = React.useState(1)

  let previous = 0

  const animate = (time: number) => {
    if (!previous || time - previous > 500) {
      previous = time
      setEllipsisCount(prevState => (prevState >= 3 ? 1 : prevState + 1))
    }

    raf.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    raf.current = requestAnimationFrame(animate)

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [])

  return (
    <Box as="section" display="flex" alignItems="center" justifyContent="center" flex="1 1 auto" px={6} pt={8} pb={12}>
      <Stack spacing={6}>
        <Logo height={72} />
        <Text textAlign="center" fontSize="lg">
          Loading{[...Array(ellipsisCount)].map(() => '.')}
        </Text>
      </Stack>
    </Box>
  )
}

export default CustomizerLoading
