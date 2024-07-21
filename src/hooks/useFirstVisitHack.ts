import { useEffect } from 'react';

const useFirstVisitHack = () => {
  useEffect(() => {
    if (sessionStorage.getItem('firstVisit') === 'true') {
      alert('RELOAD!');
      sessionStorage.removeItem('firstVisit');
    }

    sessionStorage.setItem('firstVisit', 'true');
  }, []);
};

export default useFirstVisitHack;
