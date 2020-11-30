/* eslint-disable react/no-danger */
import * as React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import theme from '~/utils/theme'
import emotionCache from '~/utils/emotionCache'

const { extractCritical } = createEmotionServer(emotionCache)

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [initialProps.styles, <style key="emotion-css" data-emotion-css={ids.join(' ')} dangerouslySetInnerHTML={{ __html: css }} />]
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
