import { useEffect, useState } from 'react';

const useShowVideo = () => {
  const [isSetVidazoo, setIsSetVidazoo] = useState(false);

  useEffect(() => {
    const listener = () => {
      const videoBlock = document.getElementById('vidazoo');
      if (videoBlock) {
        const { top, height } = videoBlock.getBoundingClientRect();

        setIsSetVidazoo(top + top - height > 0);
      }
    };

    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);

  return isSetVidazoo;
};

export default useShowVideo;
