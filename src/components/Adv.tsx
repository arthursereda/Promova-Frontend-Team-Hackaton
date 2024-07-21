import { FC, useEffect } from 'react';

import { AdvItem } from '@/types/content';

import { addAdUnits, loadAd } from '@/utils/advertisement';

declare global {
  interface Window {
    googletag: any;
  }
}

const Adv: FC<AdvItem> = ({ id, pbjsInstance }) => {
  useEffect(() => {
    if (pbjsInstance?.que) {
      pbjsInstance.que.push(() => {
        addAdUnits(pbjsInstance, id);

        pbjsInstance.requestBids({
          timeout: 1000,
          adUnitCodes: [id],
          bidsBackHandler: function () {
            pbjsInstance.setTargetingForGPTAsync([id]);

            const target = window.googletag
              .pubads()
              .getSlots()
              .find((slot: any) => slot.getSlotElementId() === id);

            target && window.googletag.pubads().refresh([target]);
          },
        });
      });

      loadAd(id);
    }
  }, [id, pbjsInstance]);

  return <div id={id} data-slot-type={1} />;
};

export default Adv;
