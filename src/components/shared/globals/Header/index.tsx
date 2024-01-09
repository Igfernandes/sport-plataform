import { A } from '@components/shared/content/A';
import { Img } from '@components/shared/content/Img';
import Head from 'next/head';
import CardLogin from './CardLogin';
import { Navbar } from './Navbar';

type HeaderProps = {
  title?: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <>
      <Head>
        <title>{`${title ?? 'Sport Plataform'} - Plataforma esportiva`}</title>
        <meta
          name="description"
          content="O site da plataforma esportiva da KM representações"
        />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <header>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development justify-content-between p-2">
                  <div className="col-5 col-md-4 sport_development-column px-0">
                    <div>
                      <div className="sport_logo">
                        <A href="/">
                          <Img
                            src="/img/logo/logotipo.png"
                            alt="#"
                            className="sport_logo_img"
                          />
                        </A>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 col-md-4 sport_development-column px-0  position-relative">
                    <CardLogin />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sport_content" style={{ backgroundColor: '#153F6C' }}>
            <div className="col-12 sport_content-column px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 sport_development-column position-relative px-0">
                    <Navbar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
