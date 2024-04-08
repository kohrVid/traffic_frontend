import Head from "next/head";
import { SessionProvider } from '@/components/SessionContext';
import { VisitProvider } from '@/components/VisitContext';
import { Menu } from '@/components/Partials/Menu';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="description" content="Page Traffic website" />
        <link rel="icon" href="/favicon.ico" />
        <title>Page Traffic</title>
      </Head>

      <SessionProvider>
        <VisitProvider>
          <Menu />
          <main>
            <Component {...pageProps} />
          </main>
        </VisitProvider>
      </SessionProvider>
    </>
  )
}
