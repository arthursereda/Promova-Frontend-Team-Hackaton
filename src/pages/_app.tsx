import { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (sessionStorage.getItem('firstVisit') === 'true') {
      alert('RELOAD!');
      sessionStorage.removeItem('firstVisit');
    }

    sessionStorage.setItem('firstVisit', 'true');
  }, []);

  return (
    <>
      <Script is="quantcast" src="https://cdn.amomama.de/hackathon/scripts/quantcast.min.js" />
      <Script
        strategy="afterInteractive"
        data-cfasync="false"
        crossOrigin="anonymous"
        src="https://static.kueezrtb.com/latest.js"
        id="kueezrtb_latest"
      />
      <Script strategy="afterInteractive" src="//www.googletagservices.com/tag/js/gpt.js" />
      <Script
        strategy="afterInteractive"
        src="https://cdn.amoanimals.com/prebiders/65df2430c6119531530487.js"
      />
      <Component {...pageProps} />
    </>
  );
};
export default App;
