import { SITE_INFO } from "@/lib/constants";
import Head from "next/head";

const About = () => {
  const { site } = SITE_INFO;
  return (
    <>
      <Head>
        <title>{site.name} | About</title>
        <meta name="description" content={site.description} />
      </Head>
      About
    </>
  );
};

export default About;
