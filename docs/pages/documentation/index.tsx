import { SITE_INFO } from "@/lib/constants";
import Head from "next/head";
const Documentation = () => {
  const { site } = SITE_INFO;
  return (
    <>
      <Head>
        <title>{site.name} | How to use</title>
      </Head>
      Documentation
    </>
  );
};

export default Documentation;
