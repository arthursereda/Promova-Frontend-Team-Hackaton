import { FC } from 'react';

import { ParagraphItem } from '@/types/content';

type Props = Omit<ParagraphItem, 'type'>;

const Paragraph: FC<Props> = ({ content }) => <p>{content}</p>;

export default Paragraph;
