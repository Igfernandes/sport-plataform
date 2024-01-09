import BoxLink from '@components/BoxLink';
import List from '@components/Conquest/List';
import Ranking from '@components/Ranking';
import { Header } from '@components/shared/globals/Header';
import { Ads } from '@components/shared/layouts/Ads';
import BoxInfo from '@components/shared/layouts/BoxInfo';
import { Exams } from '@components/shared/layouts/Exams';
import { Schools } from '@components/shared/layouts/Schools';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';
import Image from 'next/image';

export default function Conquintas() {
  return (
    <>
      <Header title="Conquistas - BrasilArco" />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Image
                  src="/img/banners/bn-CONQUISTAS.jpg"
                  alt="Banner"
                  width="117.9vw"
                  height="15vh"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="conquistas">
        <div className="container-fluid brasilarco">
          <div className="row py-4">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-9 sport_development-column px-0">
                    <BoxInfo title="CONQUISTAS">
                      <div id="principal" >
                        <p>
                          A participação brasileira em competições como mundiais, campeonato das
                          Américas, Jogos Pan-Amercianos e Olímpicos vem aumentando
                          significativamente, assim como os resultados alcançados.
                        </p>
                        <p>
                          Hoje temos vários atletas com experiência internacional. Com patrocínio
                          efetivo, que possibilitará uma preparação ideal da equipe, o Brasil terá
                          condições de chegar à medalha de ouro em competições como Jogos
                          Pan-Americanos e Olímpicos.
                        </p>
                        <table border={0} cellSpacing={0} cellPadding={0} width="100%">
                          <tbody>
                            <tr>
                              <td width="45">1998</td>
                              <td>Sunne (SWE)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato Mundial Outdoor Juvenil
                                <br />
                                <br />
                                <strong>4° lugar - Victor Sidi Neto</strong>
                                <br />
                                arco composto
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1997</td>
                              <td>Victoria (CAN)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato Mundial Outdoor
                                <br />
                                <br />
                                <strong>???° lugar - Márcio Sotto Maior</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>8° lugar - Roberval dos Santos</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>50° lugar - Cristina Camargo</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>58° lugar - Victor Sidi Neto</strong>
                                <br />
                                arco composto
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1996</td>
                              <td>Rio de Janeiro (BRA)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato Sul-Americano
                                <br />
                                <br />
                                <strong>Medalha de Ouro Juvenil - Douglas Ferreira</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Ouro - Vitor Krieger</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Ouro - Helena Freitas</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Ouro - Márcio Sotto Maior</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Prata Juvenil - Leonardo L. de Carvalho</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Prata Juvenil - André Guerra</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Prata - Lia Pacheco</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Prata - Dirma Miranda</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Bronze Juvenil - Victor Sidi Neto</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Arcy Kempner</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Cristina Camargo</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Fábio Passeto</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>4° lugar Juvenil - Christian Correa</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>4° lugar Juvenil - Paulo Passini</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>4° lugar - Daniela Branco</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>4° lugar - José Maurício Xavier</strong>
                                <br />
                                arco composto
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1995</td>
                              <td>Mar del Plata (ARG)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Pan-Americanos
                                <br />
                                <br />
                                <strong>4° lugar - Equipe Feminina</strong>
                                <br />
                                Maria Emília Strafacci, Lia Pacheco, Eliana Ferreira
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>6° lugar - Equipe Masculina</strong>
                                <br />
                                Renato Emílio, Vitor Krieger e Fábio Passeto
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1994</td>
                              <td>Sanctis Spiritus (CUB)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Copa das Américas
                                <br />
                                <br />
                                <strong>Medalha de Ouro - Suzete Rusca</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Prata - Nádia Rondan</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Michelle Senra</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Ronan Gouvea</strong>
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Feminina</strong>
                                <br />
                                Maria Emília Strafacci, Lia Pacheco, Eliana Ferreira
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Masculina</strong>
                                <br />
                                José Maurício Xavier, Ronan Gouvea, Márcio Sotto Maior
                                <br />
                                arco composto
                                <br />
                                <br />
                                <strong>4° lugar - Lia Pacheco</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1993</td>
                              <td>Buenos Aires (ARG)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                CUDA
                                <br />
                                <br />
                                <strong>Medalha de Ouro - Maria Emília Strafacci</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1992</td>
                              <td>Barcelona (ESP)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Olímpicos
                                <br />
                                <br />
                                <strong>30° lugar - Vitor Krieger - 1.277 pontos</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>49° lugar - Renato Emílio - 1.251 pontos</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1991</td>
                              <td>Havana (CUB)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Pan-Americanos
                                <br />
                                <br />
                                <strong>4° lugar - Renato Emílio</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>4° lugar - Equipe Masculina</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>4° lugar - Equipe Feminina</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1988</td>
                              <td>Valência (VEN)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato das Américas
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Renato Emílio, Jorge Azevedo</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1988</td>
                              <td>Seul (KOR)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Olímpicos
                                <br />
                                <br />
                                <strong>43° lugar - Renato Emílio - 1.225 pontos</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>62° lugar - Jorge Azevedo - 1.191 pontos</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1987</td>
                              <td>Indianápolis (USA)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Pan-Americanos
                                <br />
                                <br />
                                <strong>5° lugar - Equipe Feminina</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1986</td>
                              <td>Rio de Janeiro (BRA)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato das Américas
                                <br />
                                <br />
                                <strong>Medalha de Prata - Equipe Masculina</strong>
                                <br />
                                Jorge Azevedo, Renato Emílio e William Porto
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1984</td>
                              <td>Los Angeles (USA)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Olímpicos
                                <br />
                                <br />
                                <strong>44° lugar - Renato Emílio - 2.363 pontos</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1984</td>
                              <td>Montreal (CAN)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato das Américas
                                <br />
                                <br />
                                <img
                                  width="220"
                                  height="164"
                                  alt=""
                                  src="/img/foto_eq_masculina_1984.jpg"
                                />
                                <br />
                                <br />
                                <strong>Medalha de Prata - Equipe Masculina</strong>
                                <br />
                                Renato Emílio, Jorge Azevedo, Carlos Alberto Segal
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <br />
                                <img
                                  width="220"
                                  height="164"
                                  alt=""
                                  src="/img/foto_eq_feminina_1984.jpg"
                                />
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Feminina</strong>
                                <br />
                                Martha Emílio, Dayse Schimidts e Cláudia Vazques
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1983</td>
                              <td>Caracas (VEN)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Pan-Americanos
                                <br />
                                <br />
                                <strong>Medalha de Bronze a 70 metros - Renato Emílio</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Feminina</strong>
                                <br />
                                Martha Emílio, Cláudia Vazques e Beatriz
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>5° lugar - equipe Masculina</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>6° lugar - Martha Emílio</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1982</td>
                              <td>Montreal (CAN)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato das Américas
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Masculina</strong>
                                <br />
                                Renato Emílio, Jorge Azevedo, Carlos Alberto Segal
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1980</td>
                              <td>Moscou (RUS)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Olímpicos
                                <br />
                                <br />
                                <strong>26° lugar - Arcy Kempner - 2.186 pontos</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>27° lugar - Renato Emílio - 2.274 pontos</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1979</td>
                              <td>San Juan (Porto Rico)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Jogos Pan-Americanos
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Feminina</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>4° lugar - Equipe Masculina</strong>
                                <br />
                                arco recurvo
                                <br />
                                <br />
                                <strong>5° lugar - Arcy Kempner</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1979</td>
                              <td>Berlim (ALE)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato Mundial
                                <br />
                                <br />
                                <strong>6° lugar na prova de 90 metros - Renato Emílio</strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1978</td>
                              <td>Rio de Janeiro (BRA)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato das Américas
                                <br />
                                <br />
                                <strong>Medalha de Bronze - Equipe Masculina</strong>
                                <br />
                                Renato Emílio, Jorge Azevedo, Carlos Alberto Segal
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td>1977</td>
                              <td>Camberra (AUS)</td>
                            </tr>
                            <tr>
                              <td>&nbsp;</td>
                              <td>
                                Campeonato Mundial
                                <br />
                                <br />
                                <strong>
                                  13° lugar individual feminino - Maria J. Ribeiro da Silva
                                </strong>
                                <br />
                                arco recurvo
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <List />
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
