import { useLinks } from '@hooks/useLinks';
import scss from '@styles/components/nacionalSchools.module.scss';
import Link from 'next/link';
import { useWherePratice } from './hooks/useWherePratice';
import { RegionsDataStates } from '@services/Regions/types';
import { When } from '../shared/utilities/when';
import { ContactShape, SchoolsData } from '@services/Schools/types';

export function WherePractice() {
  const {
    cities,
    citySelected,
    handleGetCities,
    handleSubmitGetSchools,
    setCitySelected,
    clubsSchools,
    federationsSchools,
    states,
  } = useWherePratice();
  const { linkType } = useLinks();

  return (
    <div className="brasilarco">
      <div className="sport_school">
        <div className="sport_school-body d-flex">
          <div className={scss.sport_school__info}>
            <div className={scss.sport_school__info_point}>
              <img
                className={scss.sport_school__info_point_img}
                src="/img/icon/icon-map.png"
                alt="Icon"
              />
            </div>
          </div>
          <div className={scss.sport_school__form}>
            <form onSubmit={handleSubmitGetSchools}>
              <div
                className={
                  'form-group ' + scss.sport_school_fm_gp + ' ' + scss.sport_school_fm_slt
                }
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
                  {states.map((item: RegionsDataStates, key: number) => (
                    <option key={key} value={item.UF}>
                      {item.Estado}
                    </option>
                  ))}
                </select>
              </div>
              <div
                className={
                  'form-group ' + scss.sport_school_fm_gp + ' ' + scss.sport_school_fm_slt
                }
              >
                <label htmlFor="cidade" className={scss.sport_school__form_label}>
                  <img src="/img/icon/esclamacao.png" alt="Icon" />
                </label>
                <select
                  name="cidade"
                  id="cidade"
                  className={scss.sport_school__form_select}
                  onChange={({ target }) => setCitySelected(target.value)}
                >
                  <option value="">SELECIONE A CIDADE</option>
                  {cities.map((cities: string, key: number) => (
                    <option key={key} value={cities}>
                      {cities}
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
        <div className={scss.sport_school__footer}>
          <div className={scss.sport_school__footer_state}>
            <div
              className="sport_school__footer_state_title pt-3 pb-1 px-4 mb-4"
              style={{ background: '#0f3d6a', color: '#fff' }}
            >
              <h3>FEDERAÇÕES</h3>
            </div>
            <div className={`${scss.sport_school__footer_state_content} pt-3 pb-1 px-4 mb-4`}>
              <When value={federationsSchools && federationsSchools.length > 0}>
                {federationsSchools.map((school: any, key: number) => (
                  <div key={key} className={scss.sport_school__club}>
                    <div className={scss.sport_school__club_img}>
                      <img src={school.logo} alt="Clube" />
                    </div>
                    <div className={scss.sport_school__club_info}>
                      <div className={scss.sport_school__club_title}>
                        <p className={scss.sport_school__club_title_p}>
                          <strong>{school.nome}</strong>
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
              <When
                value={
                  !federationsSchools || (federationsSchools && federationsSchools.length == 0)
                }
              >
                <div className={scss.sport_school__club}>
                  <div className={scss.sport_school__club_img}>
                    <img src="/img/logo-brasilarco.png" alt="Federacao" />
                  </div>
                  <div className={scss.sport_school__club_info}>
                    <div className={scss.sport_school__club_title + ' text-center'}>
                      <p className={scss.sport_school__club_title_p}>
                        <strong>NÃO HÁ FEDERAÇÃO</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </When>
            </div>
          </div>
          <div className={scss.sport_school__footer_city}>
            <div
              className="sport_school__footer_state_title pt-3 pb-1 px-4 mb-4"
              style={{ background: '#0d8841', color: '#fff' }}
            >
              <h3>CLUBES</h3>
            </div>
            <div className={`${scss.sport_school__footer_state_content} pt-3 pb-1 px-4 mb-4`}>
              <When value={clubsSchools && clubsSchools?.length > 0}>
                {clubsSchools.map((school: SchoolsData, key: number) => (
                  <div key={key} className={scss.sport_school__club}>
                    <div className={scss.sport_school__club_img}>
                      <img src={school.logo} alt="Clube" />
                    </div>
                    <div className={scss.sport_school__club_info}>
                      <div className={scss.sport_school__club_title}>
                        <p className={scss.sport_school__club_title_p}>
                          <strong>{school.nome}</strong>
                        </p>
                      </div>
                      <div className="sport_school-clube-contact">
                        <ul className={scss.sport_school__club__ul}>
                          <li className={scss.sport_school__club__li}>
                            {`${school.endereco.logadouro}, ${
                              school.endereco.complemento ?? ''
                            } - ${school.endereco.pais} ${school.endereco.estado}/${
                              school.endereco.cidade
                            }`}
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
              <When value={!clubsSchools || (clubsSchools && clubsSchools.length == 0)}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
