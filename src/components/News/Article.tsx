import scss from '@styles/components/newsSingle.module.scss';
import BoxInfo from '../shared/layouts/BoxInfo';
import { Img } from '../shared/content/Img';
import { CarouselNews } from './Carousel';
import { Ads } from '@components/shared/layouts/Ads';
import { useNewsContext } from '@contexts/News';

type ArticleProps = {
  newsLink: string;
  isPageNews?: boolean;
};

export function Article({ newsLink, isPageNews = false }: ArticleProps) {
  const { news } = useNewsContext();
  const currentNews = news.find((newsReference) => newsReference.link == newsLink);
  const date = new Date(String(currentNews?.criacao));

  return (
    <section>
      <div className="container-fluid brasilarco">
        <div className="row py-4">
          <div className="col-12 px-0">
            <div className="container-xl container-fluid">
              <div className="row sport_development">
                <div className="col-12 col-md-9 sport_development-column px-0">
                  <div>
                    <BoxInfo title={currentNews?.titulo}>
                      <div className="banner" style={{ float: 'left', margin: '0 1rem 0 0 ' }}>
                        <Img
                          src={String(currentNews?.banner)}
                          alt="Banner"
                          style={{ width: '25vw', height: '45vh' }}
                        />
                        <div className={scss.sport_news_info__time}>
                          <span>
                            <strong>
                              <u> {date.toLocaleDateString()} </u>
                            </strong>
                          </span>
                        </div>
                      </div>
                      <div className={isPageNews ? 'text-justify' : ''} dangerouslySetInnerHTML={{ __html: String(currentNews?.html) }}></div>
                    </BoxInfo>
                  </div>
                  <div style={{ clear: 'both' }}></div>
                  <div className="sport_development-news mt-5" style={{ position: 'relative' }}>
                    <CarouselNews currentNews={currentNews} news={news}></CarouselNews>
                  </div>
                </div>
                <div className="col-12 col-md-3 sport_development-column px-0">
                  <Ads />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
