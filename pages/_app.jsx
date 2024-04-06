import Head from "next/head";
import { SessionProvider } from '@/components/SessionContext';
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
        <SessionProvider>
          <VisitProvider>
            <Component {...pageProps} />
          </VisitProvider>
        </SessionProvider>
      </main>
    </>
  )
}
