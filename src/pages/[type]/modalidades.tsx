import Image from 'next/image';
import BoxLink from '@components/BoxLink';
import BoxInfo from '@components/shared/layouts/BoxInfo';
import { Ads } from '@components/shared/layouts/Ads';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';
import Ranking from '@components/Ranking';
import { Exams } from '@components/shared/layouts/Exams';
import { Schools } from '@components/shared/layouts/Schools';
import { Header } from '@components/shared/globals/Header';
import List from '@components/Modalities/List';

export default function Modalidades() {
  return (
    <>
      <Header title="Modalidades - BrasilArco" />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Image
                  src="/img/banners/bn-modalidades.jpg"
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
      <section className="modalidades">
        <div className="container-fluid brasilarco">
          <div className="row py-4">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-9 sport_development-column px-0">
                    <BoxInfo title="MODALIDADES">
                      <div className="sport_info_subtitle ">
                        <p>
                          De acordo com a World Archery, as competições de tiro com arco estão
                          divididas da seguinte maneira:
                        </p>
                      </div>
                      <List />

                      <p>
                        <br />
                        Competidores usando diferentes tipos de equipamentos são agrupados em
                        divisões separadas e competem em diferentes eventos. <br />
                        A FITA reconhece AS seguintes divisões:
                        <br />
                        <br />
                        Para Outdoor <br />
                        Competição realizada ao ar livre, em campo aberto, geralmente gramado. O
                        campo de prova deve ser plano e sem obstáculos para os arqueiros. Somente
                        este tipo de prova (outdoor) e o arco recurvo ou olímpico fazem parte dos
                        Jogos Olímpicos e Panamericanos. O arco composto, juntamente com o recurvo,
                        fazem parte das demais provas internacionais, como os Mundiais.
                      </p>
                      <p>&nbsp;</p>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td width="30">
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Recurvo (Olímpico)</td>
                          </tr>
                          <tr>
                            <td>
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Standard</td>
                          </tr>
                          <tr>
                            <td>
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Composto</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <a id="indoor"></a>
                        <br />
                        Para Indoor <br />
                        AS provas indoor são realizadas em ambiente fechado, geralmente um ginásio
                        de esportes. Surgiu na Europa, onde é disputado durante o inverno, pois a
                        neve impede a realização de provas outdoor.
                      </p>
                      <p>&nbsp;</p>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td width="30">
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Recurvo</td>
                          </tr>
                          <tr>
                            <td>
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Composto</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <a id="field"></a>
                        <br />
                        Para Field <br />
                        Esta modalidade de tiro com arco, ao ar livre, em bosques ou florestas,
                        talvez seja uma das mais agradáveis, pois os arqueiros tem a possibilidade
                        de caminhar por um bosque, encontrando alvos dos mais variados tamanhos, nas
                        mais diferentes posições de tiro.
                        <br />
                        <br />
                        Estas características exigem do atleta uma excelência tanto NO conhecimento
                        de seu material e equipamento como na capacidade de decidir a distância para
                        a regulagem de sua mira.
                        <br />
                        <br />
                        O grau de dificuldade dessas competições pode variar de acordo com o
                        organizador do evento, podendo, por exemplo, se atirar em declive com um
                        lago atrás do alvo ou com o alvo na beira e na frente do lago, propiciando,
                        num eventual erro, a perda de uma flecha.
                        <br />
                        <br />
                        Muitos amantes da natureza acham NO field uma maneira de integração, na qual
                        a caminhada e a paisagem se tornam uma motivação a mais para a prática do
                        esporte.
                      </p>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td width="30">
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão Barebow</td>
                          </tr>
                          <tr>
                            <td>
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Recurvo</td>
                          </tr>
                          <tr>
                            <td>
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Composto</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <a id="skyarch"></a>
                        <br />
                        Para Ski-Archery
                      </p>
                      <p>&nbsp;</p>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td width="30">
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Recurvo</td>
                          </tr>
                          <tr>
                            <td>
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Composto</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <br />
                        Para Clout <br />
                        Consiste em 36 flechas atiradas nas distâncias de 165 metros para homens e
                        125 metros para mulheres. Os tiros serão dados em uma única direção. O alvo
                        para clout deverá ser circular, com 15 metros de diâmetro. O alvo pode ser
                        marcado sobre o chão ou AS linhas de pontuação podem ser determinadas
                        através de trena metálica ou uma corda não elástica. O tiro é dado para cima
                        para que a flecha caia NO alvo desenhado NO chão.
                      </p>
                      <p>&nbsp;</p>
                      <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td width="30">
                              <img width="20" height="15" src="/img/icon/marcador_seta.gif" alt="" />
                            </td>
                            <td>Divisão de Arco Recurvo</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>
                        <br />
                        Para Flight <br />
                        Os tiros flight consistem em seis flechas para AS maiores distâncias. Os
                        tiros devem ser dados em uma única direção. A disputa é para atirar uma
                        flecha o mais longe possível da linha de tiro. A área de pouso, definida
                        como sendo qualquer parte do terreno onde se espera que a flecha aterrize,
                        deve ter pelo menos 200 metro de largura e uma extensão de pelo menos 450
                        metros. Esta área deve ser livre de obstáculos ou perigos, tais como
                        árvores, construções, cercas, fossas, etc. <br />
                        &nbsp;
                      </p>
                      <p>
                        Livros de Regra da FITA - Traduzidos <br />
                        19.07.08
                        <br />
                        <br />
                        Prezados Juízes, Atletas e aficcionados pelo Tiro com Arco NO Brasil. <br />
                        <br />
                        Após dois meses de trabalhos, estamos publicando a tradução do livro “FITA{' '}
                        <br />
                        CONSTITUITION AND RULES” que é o livro que rege todo o Tiro com Arco NO
                        mundo. <br />
                        <br />
                        Esta é a quarta vez que passo por tradutor, trazendo agora a última
                        publicação da FITA que é de 1° de abril de 2008. Esta versão substitui e
                        torna obsoleta qualquer versão anterior. Nos últimos anos passamos por
                        várias alterações nas regras de Tiro, sendo portanto importante estarmos a
                        par do que é efetivo NO momento. <br />
                        <br />
                        Estamos postando NO site da CBTARCO hoje uma versão ainda não completa da
                        tradução. Faltam os apêndices do Livro 1 e o livro 4 que trata de vários
                        rounds sem muita importância para nós, como o Ski-Arc. É nossa pretensão
                        fazer a tradução destas partes que faltam, mas para não atrasar mais,
                        publicamos agora o que é mais importante.
                        <br />
                        <br />
                        Ronaldo G. De Carvalho <br />
                        Diretor de Arbitragem da CBTARCO <br />
                        Juiz Internacional FITA desde 1991 <br />
                        <br />
                        &nbsp;
                      </p>
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
