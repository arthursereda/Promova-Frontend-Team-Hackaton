import { FC } from 'react';

import { ImageItem } from '@/types/content';

type Props = Omit<ImageItem, 'type'>;
const Image: FC<Props> = ({ src }) => <img src={src} alt="Content" />;

export default Image;
