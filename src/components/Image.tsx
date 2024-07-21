import NextImage from 'next/image';
import { FC } from 'react';

import { ImageItem } from '@/types/content';

const Image: FC<ImageItem> = ({ src }) => (
  <figure className="relative rounded-lg overflow-hidden m-4">
    <NextImage src={src} alt="Content" width={500} height={500} />
  </figure>
);

export default Image;
