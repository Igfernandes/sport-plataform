import { Banner } from '../shared/layouts/Banner';
import { Header } from '../shared/globals/Header';
import DocTable from '../shared/layouts/DocTable';
import { Ads } from '../shared/layouts/Ads';
import BoxLink from '@components/BoxLink';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';
import { Exams } from '@components/shared/layouts/Exams';
import Ranking from '@components/Ranking';
import { Schools } from '@components/shared/layouts/Schools';
import { useFiles } from './hooks/useFiles';
import { When } from '@components/shared/utilities/when';

type Props = {
  slug?: string;
};

export default function Files({ slug }: Props) {
  const { files } = useFiles(slug);

  return (
    <>
      <Header title="Ficheiro" />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <When value={!!files[0]}>
                  <Banner src={files[0]?.banner} />
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
                    <DocTable title={files[0]?.titulo} files={files[0]?.arquivos ?? []} />
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
