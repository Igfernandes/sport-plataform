import BoxInfo from '@components/shared/layouts/BoxInfo';
import { useTaxs } from './hooks/useTaxs';
import Store from './Store';
import { Ads } from '@components/shared/layouts/Ads'

export default function Taxs() {
  const { products } = useTaxs();

  return (
    <>
      <section className="taxas">
        <div className="container-fluid brasilarco">
          <div className="row py-4">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-9 sport_development-column px-0">
                    <BoxInfo title="TAXAS">
                      <Store products={products.taxs ?? []} />
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
