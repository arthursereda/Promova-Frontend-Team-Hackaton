import { AppProps } from 'next/app';
import Script from 'next/script';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Script is="quantcast" src="https://cdn.amomama.de/hackathon/scripts/quantcast.min.js" />
    <Script
      async
      data-cfasync="false"
      crossOrigin="anonymous"
      src="https://static.kueezrtb.com/latest.js"
      id="kueezrtb_latest"
    />
    <Script async src="https://platform.twitter.com/widgets.js" />
    <Script async src="//www.googletagservices.com/tag/js/gpt.js" />
    <Script async src="https://cdn.amoanimals.com/prebiders/65df2430c6119531530487.js" />
    <Script async src="https://unpkg.com/embedo/embedo.min.js" />
    <Script
      id="vidazoo"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
      const vidazoo = document.createElement("script");
      vidazoo.async = true;
      vidazoo.src = "https://static.vidazoo.com/basev/vwpt.js";
      vidazoo.setAttribute("data-widget-id", "5f7c82bd819a8b00049dd9d6");
      document.getElementById("vidazoo").appendChild(vidazoo);
      `,
      }}
    />
    <Component {...pageProps} />
  </>
);

export default App;
