import { FC } from 'react';
import { Tweet } from 'react-tweet';

import { EmbedItem } from '@/types/content';

type Props = Omit<EmbedItem, 'type'>;
const Embed: FC<Props> = ({ url }) => {
  const splitUrl = url.split('status/');
  return (
    <>
      <Tweet id={splitUrl[1]} />
    </>
  );
};

export default Embed;
