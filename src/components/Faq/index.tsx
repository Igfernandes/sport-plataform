import { Header } from '../shared/globals/Header';
import { Ads } from '@components/shared/layouts/Ads';
import { Banner } from '../shared/layouts/Banner';
import SearchInfo from './SearchInfo';

export default function Faq() {
  return (
    <>
      <Header title="Faq" />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Banner src="/img/banners/bn-faq.jpg" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="container-fluid brasilarco">
          <div className="row py-4">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-9 sport_development-column px-2 px-xl-0">
                    <SearchInfo title="FAQ" metas={[]} />
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
    </>
  );
}
