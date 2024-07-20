import { FC } from 'react';

import { EmbedItem } from '@/types/content';

type Props = Omit<EmbedItem, 'type'>;
const Embed: FC<Props> = ({ url }) => (
  <>
    <blockquote className="twitter-tweet" data-media-max-width="560">
      <a href={url} />
    </blockquote>
  </>
);

export default Embed;
