import BoxInfo from '@components/shared/layouts/BoxInfo';
import { Banner } from '@components/shared/layouts/Banner';
import Illustration from './Illustration';
import { useEquipaments } from './hooks/useEquipaments';
import { When } from '@components/shared/utilities/when';
import { Ads } from '@components/shared/layouts/Ads';
import { useEffect, useState } from 'react';
import { EquipamentsShape } from '@services/Equipaments/types';

export default function Equipaments() {
  const { equipaments } = useEquipaments();
  const [equipamentsFiltereds, setEquipamentsFiltereds] =
    useState<Array<EquipamentsShape>>([]);

  useEffect(() => {
    if (equipaments)
      setEquipamentsFiltereds(equipaments.equipamentos.filter((equipament) => !!equipament.titulo));
  }, [equipaments]);

  return (
    <>
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Banner src="/img/banners/bn-EQUIPAMENTOS.jpg" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="equipamentos">
        <div className="container-fluid brasilarco">
          <div className="row py-4">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-9 sport_development-column px-0">
                    <BoxInfo title="EQUIPAMENTOS">
                      <div className="sport_info_subtitle ">
                        <p dangerouslySetInnerHTML={{ __html: String(equipaments?.conteudo) }}></p>
                      </div>
                      <When
                        value={
                          equipamentsFiltereds &&
                          Array.isArray(equipamentsFiltereds) &&
                          equipamentsFiltereds.length > 0
                        }
                      >
                        <Illustration
                          titles={equipamentsFiltereds
                            .map((equipament) => equipament.titulo)
                            .filter((title) => !!title)}
                          sliders={equipamentsFiltereds}
                        />
                      </When>
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
    </>
  );
}
