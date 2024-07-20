import "@/styles/globals.css";
import { AppProps } from "next/app";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Script is="quantcast" src="https://cdn.amomama.de/hackathon/scripts/quantcast.min.js"/>
    <Script async data-cfasync="false" crossOrigin="anonymous" src="https://static.kueezrtb.com/latest.js"
            id="kueezrtb_latest"/>
    <Script async src="//www.googletagservices.com/tag/js/gpt.js"/>
    <Script async src="https://cdn.amoanimals.com/prebiders/65df2430c6119531530487.js"/>
    <Script async src="https://unpkg.com/embedo/embedo.min.js"/>
    <Script src="https://cdn.amomama.de/hackathon/scripts/adv.min.js"/>
    <Script id="vidazoo" dangerouslySetInnerHTML={{
      __html: `
      const vidazoo = document.createElement("script");
      vidazoo.async = true;
      vidazoo.src = "https://static.vidazoo.com/basev/vwpt.js";
      vidazoo.setAttribute("data-widget-id", "5f7c82bd819a8b00049dd9d6");
      document.getElementById("vidazoo").appendChild(vidazoo);

      const intervalPBJSCustom = setInterval(() => {
        if (window.pbjs.que) {
          clearInterval(intervalPBJSCustom);

          window.pbjs.que.push(function () {
            window.pbjs.requestBids({
              timeout: 1000,
              adUnitCodes: ["in_article_1"],
              bidsBackHandler: function () {
                window.pbjs.setTargetingForGPTAsync(["in_article_1"]);

                const target = googletag
                  .pubads()
                  .getSlots()
                  .find((slot) => slot.getSlotElementId() === "in_article_1");

                target && googletag.pubads().refresh([target]);
              },
            });
          });
        }
      }, 1000);
      `
    }}/>
    <Component {...pageProps} />
  </>
)

export default App;
