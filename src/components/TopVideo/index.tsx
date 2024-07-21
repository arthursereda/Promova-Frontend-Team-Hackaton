import { FC, useEffect } from 'react';

import appendVidazoo from '@/utils/appendVidazoo';

const TopVideo: FC = () => {
  useEffect(() => {
    appendVidazoo('topVideo');
  }, []);

  return <div className="absolute pin-t" id="topVideo" />;
};

export default TopVideo;
