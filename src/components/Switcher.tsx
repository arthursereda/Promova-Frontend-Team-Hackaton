import { FC } from 'react';

import { ArticleItem } from '@/types/content';

import { articleComponents } from '@/constants/sections';
import { usePBJSInstance } from '@/hooks/usePBJSInstance';

type Props = {
  item: ArticleItem;
};

const Switcher: FC<Props> = ({ item }) => {
  const pbjsInstance = usePBJSInstance();

  const Component = articleComponents?.[item?.type];

  if (!articleComponents) return null;

  return <Component {...item} pbjsInstance={pbjsInstance} />;
};

export default Switcher;
