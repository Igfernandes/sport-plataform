import { useEffect, useState } from 'react';
import scss from '../../styles/components/resultados.module.scss';

export function Results(props: any) {
  return (
    <>
      <div className={scss.resultados}>
        <div className={`d-flex ` + scss.eventos}>
          <div className="col-12 col-lg-6 px-0">
            <div className={scss.resultados_title_linha_estaduais}>
              <p className={scss.resultados_title_linha_estaduais_p}>Eventos Estaduais</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-0 d-flex justify-content-end">
            <div className={scss.resultados_title_linha_nacionais}>
              <p className={scss.resultados_title_linha_nacionais_p}>Eventos Eventos Nacionais</p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="col-12  px-0">
            <div className={scss.resultados_years_line}>
              <ul className={scss.resultados_years_line_list}>
                <li>2016</li>
                <li>2017</li>
                <li>2018</li>
                <li>2019</li>
                <li>2020</li>
                <li>2021</li>
                <li>2022</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className={scss.resultados_busca}>
            <div className={scss.resultados_busca_estado}>
              <div className={scss.resultados_busca_estado_label}>
                <label>Busque seu Estado</label>
              </div>
              <div className={scss.resultados_busca_estado_input}>
                <input type="text" placeholder="Rio de Janeiro" />
              </div>
            </div>
            <div className={scss.resultados_busca_atleta}>
              <div className={scss.resultados_busca_atleta_label}>
                <label htmlFor="">Busque o atleta</label>
              </div>
              <div className={scss.resultados_busca_atleta_input}>
                <input type="text" placeholder="Nome Completo" />
              </div>
            </div>
            <div className={scss.resultados_busca_button}>
              <button>Buscar</button>
            </div>
          </div>
        </div>
        <div className="d-flex mt-2">
          <div className="col-12  px-0">
            <div className={scss.resultados_events_line}>
              <ul className={scss.resultados_events_list}>
                <li>EVENTO 1</li>
                <li>EVENTO 2</li>
                <li>EVENTO 3</li>
                <li>EVENTO 4</li>
                <li>EVENTO 5</li>
                <li>EVENTO 7</li>
                <li>EVENTO 8</li>
                <li>EVENTO 9</li>
                <li>EVENTO 10</li>
                <li className={scss.resultados_events_list_itemEspecial}>
                  Rio municipal chalenger jsedvs
                </li>
                <li>EVENTO 4</li>
                <li>EVENTO 11</li>
                <li>EVENTO 12</li>
                <li>EVENTO 13</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="d-flex mt-2">
                    <div className="col-12  px-0">
                        <div className={scss.resultados_events_line}>
                            <ul className={scss.resultados_events_list}>
                                <li>EVENTO 9</li>
                                <li>EVENTO 10</li>
                                <li className={scss.resultados_events_list_itemEspecial}>Rio municipal chalenger jsedvs</li>
                                <li>EVENTO 4</li>
                                <li>EVENTO 11</li>
                                <li>EVENTO 12</li>
                                <li>EVENTO 13</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
        <div className="d-flex mt-2">
          <div className={scss.resultados_busca}>
            <div className={scss.resultados_busca_evento}>
              <div className={scss.resultados_busca_evento_title}>
                <h1>EVENTO 4</h1>
              </div>
            </div>
            <div className={`d-flex ` + scss.resultados_busca_evento_categoria}>
              <div className={scss.resultados_busca_evento_categoria_label}>
                <label htmlFor="">Categoria</label>
              </div>
              <div className={scss.resultados_busca_evento_categoria_input}>
                <input type="text" placeholder="Nome Completo" />
              </div>
            </div>
            <div className={scss.resultados_busca_evento_button}>
              <button>Buscar</button>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className={scss.resultados_busca_table}>
            <table>
              <thead>
                <tr>
                  <th>Colocação</th>
                  <th>Nome</th>
                  <th>Estado</th>
                  <th>Clube</th>
                  <th>Distância 1</th>
                  <th>Distância 2</th>
                  <th>Pontos</th>
                  <th>M</th>
                  <th>X</th>
                  <th>Data</th>
                  <th>Pontos Geral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1º Colocado</td>
                  <td>João Silva Nunes</td>
                  <td>RJ</td>
                  <td>Paulista PSQ</td>
                  <td>918</td>
                  <td>918</td>
                  <td>16</td>
                  <td>16</td>
                  <td>4</td>
                  <td>01/12/2022</td>
                  <td>700</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
