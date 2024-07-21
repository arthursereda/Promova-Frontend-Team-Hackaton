import { FC } from 'react';

import { ArticleItem, DataType } from '@/types/content';

import Adv from '@/components/Adv';
import Embed from '@/components/Embed';
import Image from '@/components/Image';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import Video from '@/components/Video';

export const articleComponents: Record<DataType, FC<ArticleItem>> = {
  [DataType.Image]: Image,
  [DataType.Title]: Title,
  [DataType.Paragraph]: Paragraph,
  [DataType.Adv]: Adv,
  [DataType.Video]: Video,
  [DataType.Embed]: Embed,
};
