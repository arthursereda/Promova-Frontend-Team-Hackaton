import { FC } from 'react';

import { VideoItem } from '@/types/content';

type Props = Omit<VideoItem, 'type'>;
const Video: FC<Props> = ({ id }) => <div id="vidazoo" />;

export default Video;
