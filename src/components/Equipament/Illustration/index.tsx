import scss from '@styles/components/illustration.module.scss';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Keyboard, Pagination } from 'swiper';
import { Img } from '@components/shared/content/Img';
import { When } from '@components/shared/utilities/when';
import { useIllustration } from './hooks/useIllustration';

const Illustration = (metas: any) => {
  const { titles, sliders } = metas;
  const { bullet } = useIllustration({ titles });

  return (
    <>
      <div className={scss.sport_illustration + ' carousel_equipamentos'}>
        <div className={scss.sport_illustration_item}>
          <div className={scss.sport_illustration_nav}>
            <div
              className={scss.sport_illustration_nav_ul + ' swiper-illustration_pagination'}
            ></div>
          </div>
        </div>

        <div className={scss.sport_illustration_item}>
          <Swiper
            slidesPerView={1}
            effect={'fade'}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-illustration_pagination',
              renderBullet: bullet,
            }}
            modules={[EffectFade, Keyboard, Pagination]}
            className="swiper-illustration"
          >
            {sliders.map((equipament: any, key: number) => (
              <SwiperSlide key={key}>
                <div className={scss.sport_illustration_content}>
                  <div className={scss.sport_illustration_preview}>
                    <div className={scss.sport_illustration_preview_img}>
                      <Img
                        src={equipament.preview ? equipament.preview : '/img/ilustracao.png'}
                        alt="Preview Seção"
                      />
                    </div>
                  </div>
                  <div className={scss.sport_illustration_info}>
                    <div className={scss.sport_illustration_info_title}>
                      <h5 className={scss.sport_illustration_info_title_h5}>
                        <When value={equipament.titulo}>{equipament.titulo}</When>
                        <When value={!equipament.titulo}>{''}</When>
                      </h5>
                    </div>
                    <div
                      className={scss.sport_illustration_info_content}
                      dangerouslySetInnerHTML={{
                        __html: String(equipament.descricao ?? ''),
                      }}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Illustration;
