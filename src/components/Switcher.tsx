import { FC } from 'react';

import {
  AdvItem,
  DataItem,
  DataType,
  EmbedItem,
  ImageItem,
  ParagraphItem,
  TitleItem,
  VideoItem,
} from '@/types/content';

import Adv from '@/components/Adv';
import Embed from '@/components/Embed';
import Image from '@/components/Image';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import Video from '@/components/Video';

type Props = {
  item: DataItem;
};

const Switcher: FC<Props> = ({ item }) => {
  switch (item?.type) {
    case DataType.Image:
      return <Image src={(item as ImageItem).src} />;
    case DataType.Title:
      return <Title content={(item as TitleItem).content} />;
    case DataType.Paragraph:
      return <Paragraph content={(item as ParagraphItem).content} />;
    case DataType.Adv:
      return <Adv id={(item as AdvItem).id} />;
    case DataType.Video:
      return <Video id={(item as VideoItem).id} />;
    case DataType.Embed:
      return <Embed url={(item as EmbedItem).url} />;
    default:
      return null;
  }
};

export default Switcher;
