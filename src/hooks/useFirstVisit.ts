import { useEffect } from 'react';

export const useFirstVisit = () => {
  useEffect(() => {
    if (sessionStorage.getItem('firstVisit') === 'true') {
      alert('RELOAD!');
      sessionStorage.removeItem('firstVisit');
    }

    sessionStorage.setItem('firstVisit', 'true');
  }, []);
};

export default useFirstVisit;
