import * as React from 'react'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { LayoutRoot, Navigation, Content } from '~/components/layout'
import { Page, PageHeader, PageBody } from '~/components/page'
import { getAllPages, getPageBySlug } from '~/utils/posts'
import markdownToHtml from '~/utils/markdownToHtml'

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  if (params) {
    const post = getPageBySlug(params.slug, ['title', 'date', 'slug', 'content'])
    const content = await markdownToHtml(post.content || '')

    return {
      props: {
        post: {
          ...post,
          content
        }
      }
    }
  }

  return { props: {} }
}

export async function getStaticPaths() {
  const posts = getAllPages(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

type MarkdownPageProps = InferGetStaticPropsType<typeof getStaticProps>

const MarkdownPage: NextPage<MarkdownPageProps> = ({ post }) => {
  if (post) {
    return (
      <LayoutRoot pageTitle={post.title} isDashboard>
        <Navigation />
        <Content>
          <Page>
            <PageHeader title={post.title} />
            <PageBody content={post.content} />
          </Page>
        </Content>
      </LayoutRoot>
    )
  }

  return null
}

export default MarkdownPage
