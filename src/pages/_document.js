import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='id-ID'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            expr:href='data:blog.url'
            hrefLang='x-default'
            rel='alternate'
          />
          <meta content='Indonesia' name='geo.placename' />
          <meta content='id' name='geo.country' />
          <meta name='yandex-verification' content='b23ac4a0168511cd' />
          <meta
            name='google-site-verification'
            content='44SIOyH2Zd34jd4AgPIZ0W6XxsKiWU3KWZP7iz1tqoU'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
