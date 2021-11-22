import { NextSeo } from 'next-seo';
import Link from 'next/link';
import * as React from 'react';
import { Content, DashboardRoot, Footer, Navigation, SidebarAndContent } from '~/components/layout';
import { Anchor, P } from '~/components/markdown';
import { Page, PageBody, PageHeader } from '~/components/page';
import { DefaultLayout } from '~/layouts/default-layout';
import { createNextPage } from '~/utils/create-next-page';

function NotFoundPage() {
  return (
    <DashboardRoot>
      <NextSeo title="404: Page not found." />
      <Navigation />
      <SidebarAndContent>
        <Content>
          <Page>
            <PageHeader title="Not Found" />
            <PageBody>
              <P>We&apos;re sorry, but we couldn&apos;t find the page you&apos;re looking for.</P>
              <P>
                <Link href="/" passHref>
                  <Anchor>Go back home?</Anchor>
                </Link>
              </P>
            </PageBody>
          </Page>
          <Footer />
        </Content>
      </SidebarAndContent>
    </DashboardRoot>
  );
}

export default createNextPage(NotFoundPage, {
  layout: page => <DefaultLayout>{page}</DefaultLayout>,
});
