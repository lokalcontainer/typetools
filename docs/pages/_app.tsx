import "@/styles/global.scss";
import App from "next/app";
import { ThemeProvider } from "next-themes";
import { ProviderApp } from "@/lib/context";
import { Aside } from "@components/Aside";
// import { Borders } from "@components/Borders";

export default class MyApp extends App<{ theme: string }> {
  render() {
    const { Component, pageProps, theme } = this.props;
    return (
      <>
        <ThemeProvider forcedTheme={theme || undefined} defaultTheme="system">
          <ProviderApp>
            {/* <Borders /> */}
            <Aside />
            <Component {...pageProps} />
          </ProviderApp>
        </ThemeProvider>

        <style jsx global>{`
          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattBlack.woff") format("woff");
            font-weight: 900;
            font-style: normal;
            font-display: block;
          }

          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattBold.woff") format("woff");
            font-weight: bold;
            font-style: normal;
            font-display: block;
          }

          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattExtraBold.woff")
              format("woff");
            font-weight: 800;
            font-style: normal;
            font-display: block;
          }

          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattLight.woff") format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: block;
          }

          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattSemiBold.woff")
              format("woff");
            font-weight: 600;
            font-style: normal;
            font-display: block;
          }

          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattMedium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: block;
          }

          @font-face {
            font-family: "Alliance Platt";
            src: url("/fonts/Alliance/Alliance-PlattRegular.woff")
              format("woff");
            font-weight: normal;
            font-style: normal;
            font-display: block;
          }

          body {
            padding: 0;
            margin: 0;
            background-color: inherit;
            color: inherit;
            font-family: "Alliance Platt", sans-serif;
            /*font-family: "Space Grotesk", sans-serif;*/
            /*font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;*/
          }

          .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: inherit;
            color: inherit;
            padding: 8px;
            z-index: 3000;
          }

          .skip-link:focus {
            top: 0;
          }
        `}</style>
      </>
    );
  }
}
