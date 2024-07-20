import {FC} from "react";
import Title from "@/components/Title";
import Image from "@/components/Image";
import Paragraph from "@/components/Paragraph";
import Adv from "@/components/Adv";
import Video from "@/components/Video";
import Embed from "@/components/Embed";
import {DataType, DataItem, ImageItem, TitleItem, ParagraphItem, AdvItem, VideoItem, EmbedItem} from "@/types/content";

interface MapperProps {
    data: DataItem[];
}

const Mapper: FC<MapperProps> = ({ data }) =>
    (
        <div>
            {data.map((item, index) => {
                // return <div key={index}>{item.type}</div>
                switch (item.type) {
                    case DataType.Image:
                        return <Image key={index} src={(item as ImageItem).src}/>;
                    case DataType.Title:
                        return <Title key={index} content={(item as TitleItem).content}/>;
                    case DataType.Paragraph:
                        return <Paragraph key={index} content={(item as ParagraphItem).content}/>;
                    case DataType.Adv:
                        return <Adv key={index} id={(item as AdvItem).id}/>;
                    case DataType.Video:
                        return <Video key={index} id={(item as VideoItem).id}/>;
                    case DataType.Embed:
                        return <Embed key={index} url={(item as EmbedItem).url}/>;
                    default:
                        return null;
                }
            })}
        </div>
    );

export default Mapper;