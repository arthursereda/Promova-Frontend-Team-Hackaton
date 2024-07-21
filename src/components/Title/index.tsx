import { FC } from 'react';

import { TitleItem } from '@/types/content';

type Props = Omit<TitleItem, 'type'>;

const Title: FC<Props> = ({ content }) => <h1>{content}</h1>;

export default Title;
