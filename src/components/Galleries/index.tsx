import BoxLink from '@components/BoxLink';
import Ranking from '@components/Ranking';
import { Banner } from '@components/shared/layouts/Banner';
import BoxInfo from '@components/shared/layouts/BoxInfo';
import { Exams } from '@components/shared/layouts/Exams';
import { Schools } from '@components/shared/layouts/Schools';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';
import { Ads } from '@components/shared/layouts/Ads';
import { GalleryGrid } from './GalleryGrid';
import { useGalleries } from './hooks/useGalleries';
import { Header } from '@components/shared/globals/Header';

export default function Galleries() {
  const { galleries } = useGalleries();

  return (
    <>
      <Header title={"Galeria"} />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Banner src="/img/banners/bn-GALERIA-DE-FOTOS.jpg" />
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
                  <div className="col-12 col-md-9 sport_development-column px-0">
                    <BoxInfo title={'GALERIA DE FOTOS'}>
                      <GalleryGrid galleries={galleries} />
                    </BoxInfo>
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
    </>
  );
}
