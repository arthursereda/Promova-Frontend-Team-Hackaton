import { FC } from 'react';

import { ParagraphItem } from '@/types/content';

const Paragraph: FC<ParagraphItem> = ({ content }) => <p>{content}</p>;

export default Paragraph;
