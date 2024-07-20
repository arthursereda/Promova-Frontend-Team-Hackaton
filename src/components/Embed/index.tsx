import {FC} from "react";
import {EmbedItem} from "@/types/content";


type Props = Omit<EmbedItem, 'type'>
const Embed: FC<Props> = ({ url }) => <iframe src={url} title="Embed" />;


export default Embed;