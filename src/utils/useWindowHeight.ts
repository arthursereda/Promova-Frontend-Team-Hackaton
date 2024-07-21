import { useEffect, useState } from 'react';

const useWindowHeight = (useViewportHeight?: boolean) => {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const setHeight = () => {
      if (useViewportHeight && window.visualViewport) {
        setWindowHeight(window.visualViewport.height);
        return;
      }

      setWindowHeight(window?.innerHeight);
    };
    if (window) {
      setHeight();

      window.addEventListener('resize', setHeight);
    }

    setIsRendered(true);

    return () => window.removeEventListener('resize', setHeight);
  }, []);

  return { windowHeight, isRendered };
};

export default useWindowHeight;
