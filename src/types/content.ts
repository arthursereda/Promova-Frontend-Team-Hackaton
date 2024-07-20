export enum DataType {
  Image = 'image',
  Title = 'title',
  Paragraph = 'paragraph',
  Adv = 'adv',
  Video = 'video',
  Embed = 'embed',
}

export interface DataItemBase {
  type: DataType;
}

export interface ImageItem extends DataItemBase {
  type: DataType.Image;
  src: string;
}

export interface TitleItem extends DataItemBase {
  type: DataType.Title;
  content: string;
}

export interface ParagraphItem extends DataItemBase {
  type: DataType.Paragraph;
  content: string;
}

export interface AdvItem extends DataItemBase {
  type: DataType.Adv;
  id: string;
  pbjsInstance?: any;
}

export interface VideoItem extends DataItemBase {
  type: DataType.Video;
  id: string;
}

export interface EmbedItem extends DataItemBase {
  type: DataType.Embed;
  url: string;
}

export type DataItem = ImageItem | TitleItem | ParagraphItem | AdvItem | VideoItem | EmbedItem;

export interface ArticleResponse {
  data: DataItem[];
}
