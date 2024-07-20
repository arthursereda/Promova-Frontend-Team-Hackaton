import { useEffect, useState } from 'react';

const useShowVideo = () => {
  const [isSetVidazoo, setIsSetVidazoo] = useState(false);

  useEffect(() => {
    const listener = () => {
      const videoBlock = document.getElementById('vidazoo');
      if (videoBlock) {
        const { top, height } = videoBlock.getBoundingClientRect();
        if (top + top - height > 0) {
          setIsSetVidazoo(true);
        } else {
          setIsSetVidazoo(false);
        }
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
