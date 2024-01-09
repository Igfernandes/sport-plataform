import BoxLink from '@components/BoxLink';
import Elections from '@components/Elections';
import Ranking from '@components/Ranking';
import Footer from '@components/shared/globals/Footer';
import { Header } from '@components/shared/globals/Header';
import { Ads } from '@components/shared/layouts/Ads';
import { Banner } from '@components/shared/layouts/Banner';
import { Exams } from '@components/shared/layouts/Exams';
import { Schools } from '@components/shared/layouts/Schools';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';

export default function tecnicos_instrutores() {
  return (
    <>
      <Header title="Eleicoes Para Comite de Técnicos-instrutores - BrasilArco" />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Banner src="/img/banners/bn-eleicao-teCNICOS-INSTRUTORES.jpg" />
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
                    <Elections type="technical" title="TÉCNICOS E INSTRUTORES" />
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
      <Footer />
    </>
  );
}
