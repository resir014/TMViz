import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import * as React from 'react';

import { LayoutRoot, Navigation, Content, Footer, SidebarAndContent } from '~/components/layout';
import { Page, PageHeader, PageBody } from '~/components/page';
import { DocsSidebar } from '~/modules/docs/components';
import { getAllPages, getPageBySlug } from '~/modules/docs/ssg';
import markdownToHtml from '~/utils/markdownToHtml';

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  if (params) {
    const post = getPageBySlug(params.slug, ['template', 'title', 'date', 'slug', 'content']);
    const content = await markdownToHtml(post.content || '');

    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    };
  }

  return { props: {} };
}

export async function getStaticPaths() {
  const posts = getAllPages(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

type DocsMarkdownPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const DocsMarkdownPage: NextPage<DocsMarkdownPageProps> = ({ post }) => {
  if (post) {
    return (
      <LayoutRoot pageTitle={post.title}>
        <Navigation />
        <SidebarAndContent>
          <DocsSidebar />
          <Content>
            <Page>
              <PageHeader title={post.title} />
              <PageBody content={post.content} template={post.template} />
            </Page>
            <Footer />
          </Content>
        </SidebarAndContent>
      </LayoutRoot>
    );
  }

  return null;
};

export default DocsMarkdownPage;
