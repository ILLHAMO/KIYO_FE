import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../app.styled';

class _AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
    const page = renderPage(
      (App) => (props) =>
        sheet.collectStyles(
          <>
            <GlobalStyle />
            <App {...props} />
          </>
        )
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=b9c12625660d559bf867321cde2e6853&libraries=services"></script>

          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          {this.props.styleTags}
          <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
        </Head>
        <body data-env={process.env.KIYO_ENV}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _AppDocument;
