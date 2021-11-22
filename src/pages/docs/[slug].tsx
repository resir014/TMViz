import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import * as React from 'react';

import { Navigation, Content, Footer, SidebarAndContent, DashboardRoot } from '~/components/layout';
import { Page, PageHeader, PageBody } from '~/components/page';
import { DefaultLayout } from '~/layouts/default-layout';
import { DocsSidebar } from '~/modules/docs/components';
import { getAllPages, getPageBySlug } from '~/modules/docs/ssg';
import { createNextPage } from '~/utils/create-next-page';
import markdownToHtml from '~/utils/markdown-to-html';

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
      <DashboardRoot>
        <NextSeo title={post.title} />
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
      </DashboardRoot>
    );
  }

  return null;
};

export default createNextPage(DocsMarkdownPage, {
  layout: page => <DefaultLayout>{page}</DefaultLayout>,
});
