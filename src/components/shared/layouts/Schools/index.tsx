import { useLinks } from '@hooks/useLinks';
import scss from '@styles/components/schools.module.scss';
import { useSchools } from './hooks/useSchools';
import Link from 'next/link';
import { When } from '../../utilities/when';
import { ContactShape } from '@services/Schools/types';

export function Schools() {
  const {
    handleGetCities,
    schools,
    handleSubmitGetSchools,
    states,
    cities,
    setCitySelected,
    citySelected,
  } = useSchools();
  const { linkType } = useLinks();

  return (
    <div className="brasilarco">
      <div className="sport_school">
        <div className={scss.sport_school__head}>
          <div className={scss.sport_school__title}>
            <h5 className={scss.sport_school__title_h5}>ONDE PRATICAR</h5>
          </div>
        </div>
        <div className="sport_school-body">
          <div className={scss.sport_school__info}>
            <div className={scss.sport_school__info_point}>
              <img
                className={scss.sport_school__info_point_img}
                src="/img/icon/icon-map.png"
                alt="Icon"
              />
            </div>
            <div className={scss.sport_school__info_text}>
              <p className={scss.sport_school__info_text_p}>
                Conheça os clubes que oferecem treinamento em arco e flecha no Brasil
              </p>
            </div>
          </div>
          <div className={scss.sport_school__form}>
            <form onSubmit={handleSubmitGetSchools}>
              <div
                className={'form-group ' + scss.sport_school_fm_gp + ' ' + scss.sport_school_fm_slt}
              >
                <label htmlFor="estado" className={scss.sport_school__form_label}>
                  <img src="/img/icon/esclamacao.png" alt="Icon" />
                </label>
                <select
                  name="estado"
                  id="estado"
                  className={scss.sport_school__form_select}
                  onChange={handleGetCities}
                >
                  <option value="">SELECIONE O ESTADO</option>
                  {states.map((states, key: number) => (
                    <option key={key} value={states.UF}>
                      {states.Estado}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className={'form-group ' + scss.sport_school_fm_gp + ' ' + scss.sport_school_fm_slt}
              >
                <label htmlFor="cidade" className={scss.sport_school__form_label}>
                  <img src="/img/icon/esclamacao.png" alt="Icon" />
                </label>
                <select
                  name="estado"
                  id="cidade"
                  onChange={({ target }) => setCitySelected(target.value)}
                  className={scss.sport_school__form_select}
                >
                  <option value="">SELECIONE A CIDADE</option>
                  {cities.map((city, key: number) => (
                    <option key={key} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-submit">
                <button className={scss.sport_school__form_submit} type="submit">
                  BUSCAR
                </button>
              </div>
            </form>
          </div>
        </div>
        <When value={schools}>
          <div className={scss.sport_school__footer}>
            <When value={schools && schools.length > 0}>
              {schools?.map((school: any, key: number) => (
                <div key={key} className={scss.sport_school__club}>
                  <div className={scss.sport_school__club_img}>
                    <img src={school.logo} alt="Clube" />
                  </div>
                  <div className={scss.sport_school__club_info}>
                    <div className={scss.sport_school__club_title}>
                      <p className={scss.sport_school__club_title_p}>
                        <strong>{school.nome_institucional}</strong>
                      </p>
                    </div>
                    <div className="sport_school-clube-contact">
                      <ul className={scss.sport_school__club__ul}>
                        <li className={scss.sport_school__club__li}>
                          {`${school.endereco.logadouro}, ${school.endereco.complemento} - ${school.endereco.pais} ${school.endereco.estado}/${school.endereco.cidade}`}
                        </li>
                        {school.contato.map((contact: ContactShape, key: number) => (
                          <li key={key} className={scss.sport_school__club__li}>
                            <Link href={linkType({ link: contact.link, type: contact.tipo })}>
                              <a target="_blank" className="text-black text-decoration-none">
                                {contact.tipo.toUpperCase()}: {contact.link}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </When>
            <When value={citySelected && schools && schools.length == 0}>
              <div className={scss.sport_school__club}>
                <div className={scss.sport_school__club_img}>
                  <img src="/img/logo-brasilarco.png" alt="Clube" />
                </div>
                <div className={scss.sport_school__club_info}>
                  <div className={scss.sport_school__club_title + ' text-center'}>
                    <p className={scss.sport_school__club_title_p}>
                      <strong>NÃO HÁ CLUBES POR ESSA CIDADE!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </When>
          </div>
        </When>
      </div>
    </div>
  );
}
