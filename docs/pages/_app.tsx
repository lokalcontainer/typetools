import "@/styles/global.scss";
import App from "next/app";
import { ProviderApp } from "@/lib/context";
import { Aside } from "@components/Aside";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ProviderApp>
          <Aside />
          <Component {...pageProps} />
        </ProviderApp>

        <style jsx global>{`
          [data-theme="light"] {
            background-color: #f5f5f5;
            color: #151515;
          }
          [data-theme="dark"] {
            background-color: #151515;
            color: #f5f5f5;
          }

          body {
            background-color: inherit;
            color: inherit;
            font-family: "JetBrains Mono", monospace;
            padding: 0;
            margin: 0;
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
