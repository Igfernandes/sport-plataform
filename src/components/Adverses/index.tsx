import BoxLink from '@components/BoxLink';
import Ranking from '@components/Ranking';
import { Exams } from '@components/shared/layouts/Exams';
import { Schools } from '@components/shared/layouts/Schools';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';
import { useAdverses } from './hooks/useAdverses';
import { Header } from '@components/shared/globals/Header';
import { Banner } from '@components/shared/layouts/Banner';
import { When } from '@components/shared/utilities/when';
import BoxInfo from '@components/shared/layouts/BoxInfo';
import { Ads } from '@components/shared/layouts/Ads';
import Custom404 from '@pages/404';

type Props = {
  slug?: string;
};

export default function Adverses({ slug }: Props) {
  const { adverses } = useAdverses(slug);

  if (!adverses) return <Custom404 />;

  return (
    <>
      <Header title={adverses?.titulo} />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <When value={!!adverses}>
                  <Banner src={String(adverses?.banner)} />
                </When>
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
                    <BoxInfo title={adverses?.titulo}>
                      <div dangerouslySetInnerHTML={{ __html: String(adverses?.conteudo) }}></div>
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
