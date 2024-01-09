import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import scss from '../../../styles/components/searchInfo.module.scss';

export default function SearchInfo(props: any) {
  const { title, metas } = props;
  const [search, setSearch] = useState('');
  const categorys: any = {};
  categorys['OUTRAS'] = new Array();

  const searchText = (ev: any) => {
    ev.preventDefault();
    let input = ev.target.querySelector("[name='faq']");

    setSearch(input.value);
  };

  metas.map((item: any) => {
    if (item.categoria.estrutura) {
      if (Array.isArray(categorys[item.categoria.estrutura]))
        categorys[item.categoria.estrutura].push(item);
      else categorys[item.categoria.estrutura] = [item];
    } else {
      categorys['OUTRAS'].push(item);
    }
  });

  if (categorys['OUTRAS'].length == 0) delete categorys['OUTRAS'];

  return (
    <>
      <div className="sport_faq">
        <div className={scss.sport_faq_content}>
          <div className={scss.sport_faq_head}>
            <div className={scss.sport_faq_title}>
              <h1 className={scss.sport_faq_title_h1}>{title}</h1>
            </div>
            <div className={scss.sport_faq_search}>
              <form method="post" onSubmit={searchText}>
                <div className={scss.sport_faq_search_bar}>
                  <input
                    className={scss.sport_faq_search_bar_input}
                    type="search"
                    name="faq"
                    placeholder="Faça uma busca"
                  />
                  <span className={scss.sport_faq_search_bar_span}>
                    <svg
                      className={scss.sport_faq_search_bar_svg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                    </svg>
                  </span>
                </div>
                <div className={scss.sport_faq_search_btn}>
                  <button className={scss.sport_faq_search_btn_button}>BUSCAR</button>
                </div>
              </form>
            </div>
          </div>
          <div className={scss.sport_faq_body}>
            {Object.entries(categorys).map(([key, items]: any) => (
              <Accordion key={key}>
                <Accordion.Item eventKey={String(key)} style={{ height: '100%' }}>
                  <Accordion.Header style={{ fontWeight: '600' }}>{key}</Accordion.Header>
                  <Accordion.Body>
                    <Accordion key={key}>
                      {items.map((item: any, key: number) =>
                        search ? (
                          item.titulo.estrutura.indexOf(search) != -1 ? (
                            <div key={key} className={scss.sport_faq_row}>
                              <div className={scss.sport_faq_td_tp1}>
                                <Accordion.Item eventKey={String(key)} style={{ height: '100%' }}>
                                  <Accordion.Header style={{ fontWeight: '600' }}>
                                    {item.titulo.estrutura ? item.titulo.estrutura : null}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: String(
                                          item.descricao.estrutura ? item.descricao.estrutura : '',
                                        ),
                                      }}
                                    ></div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </div>
                              <div className={scss.sport_faq_td_tp1}>
                                <div className={scss.sport_faq_box}>
                                  <p className={scss.sport_faq_box_p}>
                                    {item.categoria.estrutura ? item.categoria.estrutura : null}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : null
                        ) : (
                          <div key={key} className={scss.sport_faq_row}>
                            <div className={scss.sport_faq_td_tp1}>
                              <Accordion.Item eventKey={String(key)} style={{ height: '100%' }}>
                                <Accordion.Header style={{ fontWeight: '600' }}>
                                  {item.titulo.estrutura ? item.titulo.estrutura : null}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: String(
                                        item.descricao ? item.descricao.estrutura : '',
                                      ),
                                    }}
                                  ></div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                          </div>
                        ),
                      )}
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
