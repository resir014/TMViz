import * as React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { LayoutRoot, Navigation, Content } from '~/components/layout'
import siteMetadata from '~/_data/siteMetadata.json'

const CustomizerForm = dynamic(() => import('~/modules/customizer/CustomizerForm'))

const IndexPage: NextPage = () => {
  const { title, description } = siteMetadata

  return (
    <LayoutRoot pageTitle={`${title} · ${description}`} titleTemplate="%s">
      <Navigation />
      <Content>
        <CustomizerForm />
      </Content>
    </LayoutRoot>
  )
}

export default IndexPage
