import React, { useRef, useState, useEffect } from 'react';
import scss from '@styles/layout/home/carousel.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import Link from 'next/link';
import { useBanners } from './hooks/useBanners';
import { Img } from '@components/shared/content/Img';
import { When } from '@components/shared/utilities/when';

export function Banners() {
  const { banners } = useBanners();

  return (
    <>
      <Swiper
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* <When value={[].length > 0}>
          {banners.map((banner, key) => (
            <SwiperSlide key={key}>
              <Link href={banner.url}>
                <div className="carousel_slide">
                  <Img
                    src={banner.url}
                    alt={banner.legenda}
                    className={'w-full h-[82.9vh]'}
                    style={{ width: '100%', height: '82.9vh', objectFit: 'cover' }}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </When> */}
        <When value={[].length == 0}>
          <SwiperSlide key={1}>
            <Link href={'#'}>
              <div className="carousel_slide">
                <Img
                  src={`/img/background/banner-home.jpg`}
                  alt={'Sport Banner'}
                  className={'w-full h-[82.9vh]'}
                  style={{ width: '100%', height: '82.9vh', objectFit: 'cover' }}
                />
              </div>
            </Link>
          </SwiperSlide>
        </When>
      </Swiper>
      <div className="swiper-arrows">
        <div className={'swiper-button-prev ' + scss.swiper_button_prev}></div>
        <div className={'swiper-button-next ' + scss.swiper_button_next}></div>
      </div>
    </>
  );
}
