import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import scss from '@styles/components/news.module.scss';
import { NewsData } from '@services/News/types';
import { Img } from '../shared/content/Img';
import { A } from '../shared/content/A';

type CarouselNewsProps = {
  news: Array<NewsData>;
  currentNews?: NewsData;
};

export function CarouselNews({ news, currentNews }: CarouselNewsProps) {
  const [newsSlides, setNewsSlides] = useState<Array<NewsData>>([]);

  useEffect(() => {
    setNewsSlides(news.filter((article) => article.titulo != currentNews?.titulo));
  }, [news, currentNews]);

  return (
    <Swiper
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={4}
      spaceBetween={15}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {newsSlides.map((article, key) => (
        <SwiperSlide key={key}>
          <div className="sport_slide py-5">
            <div className={scss.sport_slide_news_img}>
              <div className={scss.sport_slide_news_img}>
                <Img
                  src={article.banner}
                  alt="Noticia"
                  className={scss.sport_slide_news_img_preview}
                />
              </div>
              <div className="sport_slide_news-info">
                <div className={scss.sport_slide_news_info__time}>
                  <span>{new Date(article.criacao).toLocaleDateString()}</span>
                </div>
                <div>
                  <h2 className={scss.sport_slide_news_info__title_h2}>{article.titulo}</h2>
                </div>
                <div>
                  <p
                    className={scss.sport_slide_news_info__text_p}
                    dangerouslySetInnerHTML={{
                      __html: String(article.previa),
                    }}
                  ></p>
                </div>
                <div className={scss.sport_slide_news_info__more}>
                  <A
                    href={article.link}
                    className={scss.sport_slide_news_info__more_a}
                  >
                    Saiba mais
                  </A>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
