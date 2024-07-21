import { FC } from 'react';

import { TitleItem } from '@/types/content';

const Title: FC<TitleItem> = ({ content }) => <h1>{content}</h1>;

export default Title;
