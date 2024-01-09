import React, { useState } from 'react';
import scss from 'src/styles/components/galeria.module.scss';
import { useGaleria } from './hooks/useGaleria';
import { Button } from '@components/shared/content/Button';
import { A } from '@components/shared/content/A';
import { Img } from '@components/shared/content/Img';
import { GalleriesResponse } from '@services/Galleries/types';

type Props = {
  galleries: GalleriesResponse;
};

export function GalleryGrid({ galleries }: Props) {
  const { tradeGaleria } = useGaleria();
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className={scss.sport_box_galerias}>
        {galleries.map((gallery, keyGaleria) => (
          <div className={scss.sport_galeria} key={keyGaleria}>
            <div className={scss.sport_galeria_box_title}>
              <div className="sport_galeria_title">
                <h4>{gallery.titulo}</h4>
              </div>
            </div>
            <div className={scss.sport_galeria_box}>
              {gallery.photos.map((image, key) => (
                <div className={scss.sport_galeria_box_item} key={key}>
                  <div className={scss.sport_galeria_box_item_image}>
                    <Button
                      className={scss.sport_galeria_button}
                      onClick={() => {
                        tradeGaleria(galleries[keyGaleria].photos, key);
                        setToggler(!toggler);
                      }}
                      style={{ width: '100%' }}
                    >
                      <A href={image?.link} target={'_blank'}>
                        <Img src={image?.link} alt={image?.titulo} />
                      </A>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
