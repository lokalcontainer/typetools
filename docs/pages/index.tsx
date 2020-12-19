// import { STATIC_HASH_LINKS } from "@/lib/constants";
import { SITE_INFO } from "@/lib/constants";
import { ProviderFontTester } from "@/lib/context/ContextFontTester";
import { FontTester } from "@components/FontTester";
import { GlyphInspector } from "@components/GlyphInspector";
import Head from "next/head";

const IndexPage = () => {
  const { site, creator } = SITE_INFO;
  return (
    <>
      <Head>
        <title>
          {site.name} by {creator.name} | {site.description}
        </title>
        <meta name="description" content={site.description} />
      </Head>
      <main>
        <div
          style={{
            height: "4rem",
            borderBottom: "1px solid",
            display: "flex",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          Running text will shown here...
        </div>
        <ProviderFontTester>
          <FontTester />
        </ProviderFontTester>
        <GlyphInspector />
        <div
          // id={STATIC_HASH_LINKS[2].url.replace(/#/g, "")}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          &copy;2020 Pulipola&trade;
        </div>
      </main>
    </>
  );
};

export default IndexPage;
