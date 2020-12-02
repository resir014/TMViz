import * as React from 'react'
import { InferGetStaticPropsType, NextPage } from 'next'
import { Stack } from '@chakra-ui/react'

import { LayoutRoot, Navigation, Content } from '~/components/layout'
import { Page, PageBody, PageHeader } from '~/components/page'
import { getAllChangelogs } from '~/modules/changelog/ssg'
import { ChangelogItem } from '~/modules/changelog'
import { renderMarkdown } from '~/utils/markdownToHtml'

export async function getStaticProps() {
  const changelogs = getAllChangelogs(['title', 'slug', 'date', 'content']).map(post => ({
    ...post,
    content: renderMarkdown(post.content || '')
  }))

  return {
    props: { changelogs }
  }
}

type ChangelogsPageProps = InferGetStaticPropsType<typeof getStaticProps>

const ChangelogsPage: NextPage<ChangelogsPageProps> = ({ changelogs }) => {
  return (
    <LayoutRoot pageTitle="Changelog">
      <Navigation />
      <Content>
        <Page>
          <PageHeader title="Changelog" _containerProps={{ maxWidth: 800 }} />
          <PageBody mt={8} _containerProps={{ maxWidth: 800 }}>
            <Stack spacing={8}>
              {changelogs.map(item => (
                <ChangelogItem key={item.slug} changelog={item} />
              ))}
            </Stack>
          </PageBody>
        </Page>
      </Content>
    </LayoutRoot>
  )
}

export default ChangelogsPage
