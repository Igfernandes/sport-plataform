import scss from '@styles/components/ad.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper';
import { A } from '../../content/A';
import { Img } from '../../content/Img';
import { useAds } from './hooks/useAds';
import { AdsData } from 'src/services/Ads/Get/types';
import { When } from '@components/shared/utilities/when';

export function Ads() {
  const { ads } = useAds();

  return (
    <>
      <When value={[].length > 0}>
        <div className={scss.sport_anuncio}>
          <Swiper
            className={`mySwiper ${scss.sport_anuncio_content}`}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={'fade'}
            modules={[Autoplay, EffectFade]}
          >
            {ads.map((adsSingle: AdsData, key: number) => (
              <SwiperSlide key={key}>
                <A
                  href={adsSingle.link}
                  className={scss.sport_anuncio__a}
                  target="_blank"
                  style={{ background: '#fff' }}
                >
                  <div className={scss.sport_anuncio_link}>
                    <Img
                      src={adsSingle.preview}
                      alt="Banner de notícias"
                      className={'d-none d-sm-block ' + scss.sport_anuncio__img}
                    />
                    <Img
                      src={adsSingle.preview}
                      alt="Banner de notícias"
                      className={'d-md-none ' + scss.sport_anuncio__img}
                    />
                  </div>
                  <div className={scss.sport_anuncio__text}>
                    <h5 dangerouslySetInnerHTML={{ __html: String(adsSingle.descricao) }} />
                  </div>
                </A>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </When>
      <When value={[].length == 0}>
        <div className="sport_anuncio">
          <A href="#" className={scss.sport_anuncio__a}>
            <div className={scss.sport_anuncio__text}>
              <h5>ESPAÇO PARA ANUNCIAR</h5>
            </div>
            <div className="sport_anuncion_link">
              <Img
                src="/img/sidebar.png"
                alt="Banner de notícias"
                className={'d-none d-sm-block ' + scss.sport_anuncio__img}
              />
              <Img
                src="/img/sidebar-mob.jpg"
                alt="Banner de notícias"
                className={'d-md-none ' + scss.sport_anuncio__img}
              />
            </div>
            <div className={scss.sport_anuncio__text}>
              <h5>
                OU USAR COMO <br /> INFORMATIVO DE QQ COISA
              </h5>
            </div>
          </A>
        </div>
      </When>
    </>
  );
}
