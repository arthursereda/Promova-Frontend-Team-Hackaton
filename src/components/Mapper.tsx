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

interface MapperProps {
  data: DataItem[];
}

const Mapper: FC<MapperProps> = ({ data }) => (
  <div>
    {data.map((item, index) => {
      // return <div key={index}>{item.type}</div>
      switch (item.type) {
        case DataType.Image:
          return <Image key={index} src={(item as ImageItem).src} />;
        case DataType.Title:
          return <Title key={index} content={(item as TitleItem).content} />;
        case DataType.Paragraph:
          return <Paragraph key={index} content={(item as ParagraphItem).content} />;
        case DataType.Adv:
          return <Adv key={index} id={(item as AdvItem).id} />;
        case DataType.Video:
          return <Video key={index} id={(item as VideoItem).id} />;
        case DataType.Embed:
          return <Embed key={index} url={(item as EmbedItem).url} />;
        default:
          return null;
      }
    })}
  </div>
);

export default Mapper;
