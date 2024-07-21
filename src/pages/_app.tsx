import { AppProps } from 'next/app';
import Script from 'next/script';

import useFirstVisitHack from '@/hooks/useFirstVisitHack';
import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  useFirstVisitHack();

  return (
    <>
      <Script is="quantcast" src="https://cdn.amomama.de/hackathon/scripts/quantcast.min.js" />
      <Script
        async
        data-cfasync="false"
        crossOrigin="anonymous"
        src="https://static.kueezrtb.com/latest.js"
        id="kueezrtb_latest"
      />
      <Script async src="//www.googletagservices.com/tag/js/gpt.js" />
      <Script async src="https://cdn.amoanimals.com/prebiders/65df2430c6119531530487.js" />
      <Script async src="https://unpkg.com/embedo/embedo.min.js" />
      <Component {...pageProps} />
    </>
  );
};
export default App;
