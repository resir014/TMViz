import { NextPage } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { Content, Footer, LayoutRoot, Navigation, SidebarAndContent } from '~/components/layout'
import { Anchor, P } from '~/components/markdown'
import { Page, PageBody, PageHeader } from '~/components/page'

const NotFoundPage: NextPage = () => {
  return (
    <LayoutRoot pageTitle="404: Page not found.">
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
    </LayoutRoot>
  )
}

export default NotFoundPage
