/* eslint-disable react/no-danger */
import * as React from 'react'
import { ColorModeScript } from '@chakra-ui/core'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { extractCritical } from 'emotion-server'
import theme from '~/utils/theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style key="emotion-css" data-emotion-css={styles.ids.join(' ')} dangerouslySetInnerHTML={{ __html: styles.css }} />
      ]
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
