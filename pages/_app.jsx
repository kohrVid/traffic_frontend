import Head from "next/head";
import { VisitProvider } from '@/components/VisitContext';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="description" content="Page Traffic website" />
        <link rel="icon" href="/favicon.ico" />
        <title>traffic</title>
      </Head>

      <main>
        <VisitProvider>
          <Component {...pageProps} />
        </VisitProvider>
      </main>
    </>
  )
}
