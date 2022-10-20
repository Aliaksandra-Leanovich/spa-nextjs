import "../styles/globals.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
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
}
