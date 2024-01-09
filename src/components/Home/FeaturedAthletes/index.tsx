import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import scss from '@styles/layout/home/athletesSlides.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Navigation } from 'swiper';
import Link from 'next/link';
import { useFeaturedAthletes } from './hooks/useFeaturedAthletes';
import { SOCIAL_MEDIA_ICONS } from './__mocks__/socialMediaIcons';

type SocialMediasTypes = 'Facebook' | 'Twitter' | 'Instagram';

export function FeaturedAthletes() {
  const { athletes } = useFeaturedAthletes();

  return (
    <>
      <Swiper
        effect={'fade'}
        navigation={{
          prevEl: '.swiper-button-athletes-prev',
          nextEl: '.swiper-button-athletes-next',
        }}
        modules={[EffectFade, Navigation]}
        className="athletesSliders"
      >
        {athletes.map((athlete, key) => (
          <SwiperSlide key={key}>
            <div className={scss.sport_slider}>
              <div className={scss.sport_slider__box}>
                <div className={scss.sport_slider__box__first}>
                  <div className={scss.sport_slider__info}>
                    <div className={scss.sport_slider__title}>
                      <h4 className={scss.sport_slider__title_h4}>Atleta em destaque</h4>
                    </div>
                    <div className={scss.sport_slider__name}>
                      <h1 className={scss.sport_slider__name_h1}>
                        {athlete.nome.split(' ').filter((nameWords, key) => key <= 3).join(" ")}
                      </h1>
                      <div className={scss.sport_slider__name_span__box}>
                        <span className={scss.sport_slider__name_span}>
                          {athlete.clube ? athlete.clube.name : athlete.federacao?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={scss.sport_slider__social}>
                    <div className={scss.sport_slider__social_title}>
                      <h4 className={scss.sport_slider__social_title_h4}>Redes Socais</h4>
                    </div>
                    <div className={scss.sport_slider__social_icons}>
                      <ul className={scss.sport_slider__social_icons_ul}>
                        {athlete.redes_sociais.map((mediaSocial, key: any) => (
                          <li key={key} className={scss.sport_slider__social_icons_li}>
                            <Link href={mediaSocial.link ?? '#'}>
                              <a className={scss.sport_slider__social_icons_a} target="_blank">
                                <img
                                  src={
                                    SOCIAL_MEDIA_ICONS[mediaSocial.tipo as SocialMediasTypes].src
                                  }
                                  alt={
                                    SOCIAL_MEDIA_ICONS[mediaSocial.tipo as SocialMediasTypes].alt
                                  }
                                />
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={scss.sport_slider__box__last}>
                  <div className={scss.sport_slider__content}>
                    <div className={scss.sport_slider__athletes}>
                      <img
                        className={scss.sport_slider__athletes_img}
                        src={athlete.foto}
                        alt="Atleta"
                      />
                    </div>
                    <div className={scss.sport_slider__club}>
                      <img
                        className={scss.sport_slider__club_img}
                        src={
                          (athlete.clube ? athlete.clube.logo : athlete.federacao?.logo) ??
                          'https://brasilarco.org.br/img/admin.jpg'
                        }
                        alt="Brasão do Clube"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={scss.sport_swiper__arrows}>
        <div
          className={
            'swiper-arrow-itens swiper-button-athletes-prev ' +
            scss.sport_swiper__arrows_athletes_prev
          }
        ></div>
        <div
          className={
            'swiper-arrow-itens swiper-button-athletes-next ' +
            scss.sport_swiper__arrows_athletes_next
          }
        ></div>
      </div>
    </>
  );
}
