import * as React from 'react'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'
import App from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import theme from '~/utils/theme'
import emotionCache from '~/utils/emotionCache'

import siteMetadata from '~/_data/siteMetadata.json'

import '~/styles/fonts'

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: `tmviz@${process.env.NEXT_PUBLIC_COMMIT_SHA}`,
  integrations: [new Integrations.BrowserTracing()]
})

export default class MyApp extends App {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { componentStack } = errorInfo

    Sentry.withScope(scope => {
      scope.setExtras({ componentStack })
      const eventId = Sentry.captureException(error)
      this.setState({ eventId })
    })

    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps, router } = this.props
    const { title, description, siteUrl } = siteMetadata
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || siteUrl

    return (
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#181d3a" />
            <meta name="theme-color" content="#181d3a" />
          </Head>

          <DefaultSeo
            title={title}
            titleTemplate={`%s · ${title}`}
            description={description}
            canonical={baseUrl + router.asPath || ''}
            openGraph={{
              title,
              description,
              url: baseUrl,
              type: 'website',
              site_name: title,
              images: [
                {
                  url: `${siteMetadata.siteUrl}/social.png`,
                  width: 1200,
                  height: 620,
                  alt: siteMetadata.title
                }
              ]
            }}
            twitter={{
              cardType: 'summary_large_image',
              handle: siteMetadata.author.twitter,
              site: siteMetadata.author.twitter
            }}
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    )
  }
}
