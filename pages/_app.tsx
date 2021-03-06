import { SessionProvider } from 'next-auth/react';
import '@fontsource/inter';
import 'material-icons/iconfont/material-icons.css';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   return (
      <SessionProvider session={session}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </SessionProvider>
   );
}

export default MyApp;
