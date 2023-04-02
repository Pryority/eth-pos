import Head from "next/head";
import type { NextPage } from "next";
import Terminal from "~~/components/terminal";

const Home: NextPage = () => (
  <>
    <Head>
      <title>EPOS</title>
      <meta name="description" content="An Ethereum Point-of-Sale application created with 🏗 scaffold-eth" />
    </Head>

    <Terminal />
  </>
);

export default Home;
