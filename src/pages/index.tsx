import * as React from 'react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

import { DashboardRoot, Navigation, SidebarAndContent } from '~/components/layout';
import { DefaultLayout } from '~/layouts/default-layout';
import CustomizerLoading from '~/modules/customizer/customizer-loading';
import siteMetadata from '~/_data/siteMetadata.json';
import { createNextPage } from '~/utils/create-next-page';

const CustomizerForm = dynamic(() => import('~/modules/customizer/customizer-form'), {
  ssr: false,
  loading: () => <CustomizerLoading />,
});

function IndexPage() {
  const { title, description } = siteMetadata;

  return (
    <DashboardRoot>
      <NextSeo title={title} titleTemplate={`%s · ${description}`} />
      <Navigation />
      <SidebarAndContent>
        <CustomizerForm />
      </SidebarAndContent>
    </DashboardRoot>
  );
}

export default createNextPage(IndexPage, {
  layout: page => <DefaultLayout>{page}</DefaultLayout>,
});
