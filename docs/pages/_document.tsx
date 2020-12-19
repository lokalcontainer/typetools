import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          {/* <link
            rel="preload"
            href="/fonts/Alliance/alliance-platt.css"
            as="style"
          /> */}

          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=block"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@900&display=block"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=block"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@460&display=block"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <a className="skip-link" href="#__next">
            Skip
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
