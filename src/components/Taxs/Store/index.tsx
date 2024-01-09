import scss from '@styles/components/store.module.scss';
import { TaxShape, TaxsData } from '@services/Taxs/Get/types';
import { Img } from '@components/shared/content/Img';

type Props = {
  products: Array<TaxShape>;
};

export function Store({ products }: Props) {
  return (
    <>
      <div className="brasilarco">
        <div className={scss.brasilaro_store}>
          <div className={scss.sport_store_content}>
            {products.map((product: TaxShape, key: number) => (
              <div key={key} className={scss.sport_store_item} style={{ width: '25vw' }}>
                <div className={scss.sport_store_preview}>
                  <Img
                    src={product.preview ?? '/img/ilustracao.png'}
                    alt={product.titulo}
                    height={'20vh'}
                  />
                </div>
                <div className={scss.sport_store_info}>
                  <div className={scss.sport_store_info_name}>
                    <p className={scss.sport_store_info_name_p}>{product.titulo}:</p>
                  </div>
                  <div className={scss.sport_store_info_preco}>
                    <p
                      className={scss.sport_store_info_preco_p}
                      dangerouslySetInnerHTML={{ __html: String(product.descricao) }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={scss.sport_store_notify}>
          <div className={scss.sport_store_notify_text}>
            <p className={scss.sport_store_notify_text_p}>
              obs: Atletas desligados a 3 anos ou mais: mesma taxa dos iniciantes.
            </p>
          </div>
        </div>
        <div className={scss.sport_store_box}>
          <div className={scss.sport_store_box__item}>
            <div className={scss.sport_store_content}>
              <div className={scss.sport_box_preview}>
                <Img src={'/img/logo-caixa.jpg'} alt="./" width={'15vw'} height={'15vh'} />
              </div>
              <div className={scss.sport_store_box_info}>
                <ul className={scss.sport_store_box_info_ul}>
                  <li>Confederação Brasileira de Tiro com Arco</li>
                  <li>Banco: 104 - Caixa Econômica Federal</li>
                  <li>Agência: 1244</li>
                  <li>Operação: 003 - Pessoa Jurídica</li>
                  <li>Conta Corrente: 1650-5</li>
                  <li>CNPJ: 68.760.693/0001-54</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={scss.sport_store_box__item}>
            <div className={scss.sport_store_box_preview}>
              <Img
                src={'/img/logo/logo-horizontal.png'}
                alt="./"
                width={'20vw'}
                height={'15vh'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
