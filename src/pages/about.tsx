import * as React from 'react'
import { NextPage } from 'next'

import { LayoutRoot, Navigation, Content } from '~/components/layout'
import { Page, PageBody, PageHeader } from '~/components/page'

const AboutPage: NextPage = () => (
  <LayoutRoot pageTitle="About" isDashboard>
    <Navigation />
    <Content>
      <Page>
        <PageHeader>About us.</PageHeader>
        <PageBody>
          <p>
            Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo sensus hilaretur. Nam, ut sint illa vendibiliora, haec
            uberiora certe sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers?
          </p>
        </PageBody>
      </Page>
    </Content>
  </LayoutRoot>
)

export default AboutPage
