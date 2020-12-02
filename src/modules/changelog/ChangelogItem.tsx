import { Heading, Stack, StackProps } from '@chakra-ui/react'
import * as React from 'react'
import convert from 'htmr'
import dynamic from 'next/dynamic'
import { BasePageProps } from '~/types/common'
import htmrTransform from '~/utils/htmrTransform'

interface ChangelogItemProps extends StackProps {
  changelog: BasePageProps
}

const ChangelogItem: React.FC<ChangelogItemProps> = ({ changelog, ...rest }) => {
  return (
    <Stack as="article" spacing={4} {...rest}>
      <Heading as="h2" size="md">
        {changelog.title}
      </Heading>
      <Stack spacing={4}>
        {convert(changelog.content, {
          transform: {
            ...htmrTransform,
            ul: dynamic(() => import('./components/UL')),
            li: dynamic(() => import('./components/LI')),
            span: dynamic(() => import('./components/Label'))
          }
        })}
      </Stack>
    </Stack>
  )
}

export default ChangelogItem
