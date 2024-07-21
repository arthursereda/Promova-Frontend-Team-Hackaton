// Adv.js
import { FC, useEffect } from 'react';

import { AdvItem } from '@/types/content';

import { addAdUnits, div_1_sizes, loadAd } from '@/utils/advertisement';

type Props = Omit<AdvItem, 'type'>;

const Adv: FC<Props> = ({ id, pbjsInstance }) => {
  useEffect(() => {
    if (pbjsInstance?.que) {
      pbjsInstance.que.push(() => {
        addAdUnits(pbjsInstance, id, div_1_sizes);

        pbjsInstance.requestBids({
          timeout: 1000,
          adUnitCodes: [id],
          bidsBackHandler: function () {
            pbjsInstance.setTargetingForGPTAsync([id]);

            // @ts-ignore
            const target = googletag
              .pubads()
              .getSlots()
              // @ts-ignore
              .find((slot) => slot.getSlotElementId() === id);

            // @ts-ignore
            target && googletag.pubads().refresh([target]);
          },
        });
      });

      loadAd(id);
    }
  }, [pbjsInstance]);

  return <div id={id} data-slot-type={1} />;
};

export default Adv;
