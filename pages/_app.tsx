import '@fontsource/inter';
import 'material-icons/iconfont/material-icons.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
