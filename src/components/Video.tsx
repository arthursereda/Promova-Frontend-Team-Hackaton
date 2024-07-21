import { FC } from 'react';

import { VideoItem } from '@/types/content';

const Video: FC<VideoItem> = ({ id }) => <div id={id} />;

export default Video;
