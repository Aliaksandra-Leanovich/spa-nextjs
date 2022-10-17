import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Whitepace</title>
        <link
          rel="icon"
          href="/public/icons/logo.svg"
          type="image/svg"
          sizes="32x32"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
