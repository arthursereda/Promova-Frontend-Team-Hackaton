import { VIDAZOO_WIDGET_ID } from '@/config/constants/keys';
import { VIDAZOO_PLAYER_URL } from '@/config/constants/urls';

const appendVidazoo = (id: string) => {
  const vidazoo = document.createElement('script');
  vidazoo.async = true;
  vidazoo.src = VIDAZOO_PLAYER_URL;
  vidazoo.setAttribute('data-widget-id', VIDAZOO_WIDGET_ID);

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
