import { useEffect, useState } from 'react';

declare global {
  interface Window {
    pbjs: any;
  }
}

export const usePBJSInstance = () => {
  const [pbjsInstance, setPbjsInstance] = useState(null);

  useEffect(() => {
    const intervalPBJSCustom = setInterval(() => {
      if (window?.pbjs) {
        clearInterval(intervalPBJSCustom);

        setPbjsInstance(window.pbjs);
      }
    }, 1000);

    return () => {
      clearInterval(intervalPBJSCustom);
    };
  }, []);

  return pbjsInstance;
};
