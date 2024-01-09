import BoxLink from '@components/BoxLink';
import Ranking from '@components/Ranking';
import { useEffect, useState } from 'react';
import { Banners } from './Banners';
import { SocialMedia } from '../shared/utilities/SocialMedia';
import { Article } from '../shared/layouts/News/Article';
import { NewsData } from '@services/News/types';
import { useHome } from './hooks/useHome';
import News from '../shared/layouts/News/index';
import { FeaturedAthletes } from './FeaturedAthletes';
import { Schools } from '../shared/layouts/Schools';
import { Exams } from '../shared/layouts/Exams';
import { Ads } from '@components/shared/layouts/Ads';

export default function Home() {
  const { news } = useHome();
  const [newsIndexSelect, setNewsIndexSelected] = useState<number>(0);
  const [newsSelected, setNewsSelected] = useState<NewsData>(news[0]);

  useEffect(() => {
    setNewsSelected(news[newsIndexSelect]);
  }, [news, newsIndexSelect]);

  return (
    <>
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <Banners />
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div
              className="col-12 sport_content-column px-0"
              style={{ backgroundColor: '#153F6C' }}
            >
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 sport_development-column px-2 px-xl-0">
                    <div className="sport_development-faixa">
                      <h5>POR DENTRO DAS NOTÍCIAS:</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4 px-3 px-xl-0">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-5 sport_development-column px-0">
                    <Article />
                  </div>
                  <div className="col-12 col-md-4 sport_development-column ">
                    <News />
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
      <section>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 sport_development-column px-0">
                    <BoxLink />
                  </div>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development justify-content-between">
                  <div className="col-12 col-md-4 sport_development-column px-0">
                    <Exams />
                  </div>
                  <div className="col-12 col-md-5 sport_development-column px-0 px-md-3">
                    <Ranking />
                  </div>
                  <div className="col-12 col-md-3 sport_development-column px-0">
                    <Schools />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid sport pt-2 pb-5">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <FeaturedAthletes />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
