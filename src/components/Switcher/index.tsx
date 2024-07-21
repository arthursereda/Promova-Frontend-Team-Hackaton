import { FC, useEffect, useState } from 'react';

import { ArticleItem } from '@/types/content';

import { articleComponents } from '@/constants/sections';

declare global {
  interface Window {
    pbjs: any;
  }
}

type Props = {
  item: ArticleItem;
};

const Switcher: FC<Props> = ({ item }) => {
  const [pbjsInstance, setPbjsInstance] = useState(null);

  useEffect(() => {
    const intervalPBJSCustom = setInterval(() => {
      if (window?.pbjs) {
        clearInterval(intervalPBJSCustom);

        setPbjsInstance(window.pbjs);
      }
    }, 1000);

    return () => {
      clearInterval(intervalPBJSCustom);
    };
  }, []);

  const Component = articleComponents?.[item?.type];

  if (!Component) return null;

  return <Component {...item} pbjsInstance={pbjsInstance} />;
};

export default Switcher;
