const appendVidazoo = (id: string) => {
  const vidazoo = document.createElement('script');
  vidazoo.async = true;
  vidazoo.src = 'https://static.vidazoo.com/basev/vwpt.js';
  vidazoo.setAttribute('data-widget-id', '5f7c82bd819a8b00049dd9d6');

  const intervalVidazoo = setInterval(() => {
    if (vidazoo) {
      clearInterval(intervalVidazoo);

      if (!document?.getElementById(id)?.childNodes?.length) {
        document?.getElementById(id)?.appendChild(vidazoo);
      }
    }
  }, 1000);
};

export default appendVidazoo;
