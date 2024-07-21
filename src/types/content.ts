export enum DataType {
  Image = 'image',
  Title = 'title',
  Paragraph = 'paragraph',
  Adv = 'adv',
  Video = 'video',
  Embed = 'embed',
}

export type TitleItem = {
  content: string;
};

export type ImageItem = {
  src: string;
};

export type ParagraphItem = {
  content: string;
};

export type AdvItem = {
  id: string;
  pbjsInstance?: any;
};

export type VideoItem = {
  id: string;
};

export type EmbedItem = {
  url: string;
};

export type ArticleItem = {
  type: DataType;
} & TitleItem &
  ImageItem &
  ParagraphItem &
  AdvItem &
  VideoItem &
  EmbedItem;

export type DataItem = ImageItem | TitleItem | ParagraphItem | AdvItem | VideoItem | EmbedItem;

export interface ArticleResponse {
  data: ArticleItem[];
}
