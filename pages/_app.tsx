import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '../styles/reset.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
