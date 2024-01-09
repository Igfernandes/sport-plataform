import { GalleriesShape } from '@services/Galleries/types';
import { useState } from 'react';

export const useGaleria = () => {
  const [galeria, setGaleria] = useState<string[]>([]);

  function tradeGaleria(props: Array<GalleriesShape>, index: number) {
    const imgs = new Array();
    const BaseResUrl = process.env.NEXT_PUBLIC_BASERESURL;

    for (const ImagemProps of props) {
      imgs.push(BaseResUrl + ImagemProps.link);
    }

    const srcFrst = imgs.splice(index, 1);
    imgs.unshift(srcFrst[0]);

    setGaleria(imgs);
  }

  return {
    galeria,
    setGaleria,
    tradeGaleria,
  };
};
