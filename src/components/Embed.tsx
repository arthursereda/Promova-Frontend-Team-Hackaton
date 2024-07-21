import { FC } from 'react';
import { Tweet } from 'react-tweet';

import { EmbedItem } from '@/types/content';

const Embed: FC<EmbedItem> = ({ url }) => {
  const splitUrl = url.split('status/');
  return <Tweet id={splitUrl[1]} />;
};

export default Embed;
