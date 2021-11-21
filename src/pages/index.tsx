import * as React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { LayoutRoot, Navigation, SidebarAndContent } from '~/components/layout';
import CustomizerLoading from '~/modules/customizer/CustomizerLoading';
import siteMetadata from '~/_data/siteMetadata.json';

const CustomizerForm = dynamic(() => import('~/modules/customizer/CustomizerForm'), {
  ssr: false,
  loading: () => <CustomizerLoading />,
});

const IndexPage: NextPage = () => {
  const { title, description } = siteMetadata;

  return (
    <LayoutRoot pageTitle={title} titleTemplate={`%s · ${description}`}>
      <Navigation />
      <SidebarAndContent>
        <CustomizerForm />
      </SidebarAndContent>
    </LayoutRoot>
  );
};

export default IndexPage;
