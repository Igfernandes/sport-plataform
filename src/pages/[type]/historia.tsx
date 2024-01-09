import Image from 'next/image';
import BoxInfo from '@components/shared/layouts/BoxInfo';
import BoxLink from '@components/BoxLink';
import { Ads } from '@components/shared/layouts/Ads';
import { SocialMedia } from '@components/shared/utilities/SocialMedia';
import { Exams } from '@components/shared/layouts/Exams';
import Ranking from '@components/Ranking';
import { Schools } from '@components/shared/layouts/Schools';
import { Header } from '@components/shared/globals/Header';

export default function Historia() {
  return (
    <>
      <Header title="História - BrasilArco" />
      <main>
        <div className="container-fluid brasilarco">
          <div className="row sport_content">
            <div className="col-12 sport_content-column px-0">
              <div className="sport_content_banner">
                <Image
                  src="/img/banners/bn_historia.jpg"
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
      <section>
        <div className="container-fluid brasilarco">
          <div className="row py-4">
            <div className="col-12 px-0">
              <div className="container-xl container-fluid">
                <div className="row sport_development">
                  <div className="col-12 col-md-9 sport_development-column px-0">
                    <BoxInfo title="HISTÓRIA DO ESPORTE NO BRASIL">
                      <p>
                        &nbsp;O Tiro com Arco no Brasil teve uma longa história até a criação da
                        Confederação Brasileira de Tiro com Arco, em 1991. Chegou ao Brasil graças a
                        um idealista, comissário de Vôo da Panair do Brasil, Sr. Adolpho Porta, nos
                        idos de 1950, quando se encontrava baseado em Lisboa, Portugal.
                      </p>
                      <p>
                        Na Feira Popular, evento anual em Lisboa, o Sr. Adolpho conheceu um hábil
                        marceneiro chamado Arlindo, que tinha um stand de tiro com arco.Notando o
                        interesse do Sr. Adolpho pelo esporte, condidou-o para ser sócio do Glória
                        Atlético Clube, onde praticava.
                      </p>
                      <p>
                        Em 1955, quando seu baseamento terminou, Rodolpho Porta regressou ao Rio de
                        Janeiro trazendo alvos, arcos e flechas fabricados por Arlindo. Trouxe
                        também um regulamento da Federação Internacional de Tiro com Arco – FITA –
                        dado pelo presidente da Federação Portuguesa de Tiro com Arco, Capitão
                        Manoel da Silva.
                      </p>
                      <p>
                        Para divulgar o esporte, foi ao Flumnense Futebol Clube, onde conheceu Rocir
                        Silveira, que o apresentou a Waldemar de Oliveira, do Clube Carioca de Tiro
                        e comerciante de artigos de caça e pesca na Rua Regente Feijó, 27. Fez
                        amizade com os filhos de Waldemar, Mazinho e Waldir, que se interessaram
                        imediatamente em divulgar o Tiro com Arco.
                      </p>
                      <p>
                        A primeira prova foi realizada em 5 de novembro de 1955, no atual General
                        Dutra, na Quinta da Boa Vista, patrocinada pelo Clube de Tiro e Diário de
                        Notícias.
                      </p>
                      <p>
                        O Fluminense foi representado por uma equipe feminina. A prova foi disputada
                        na distância de 25 metros e o vencedor, Adolpho Porta, com 119 pontos.
                      </p>
                      <p>
                        O Jornal O Globo instituiu a prova “Flecha de Prata”, com cartazes
                        espalhados pelas vitrines do comércio do Rio de Janeiro.
                      </p>
                      <p>
                        Desta época podemos recordar exímios arqueiros, praticantes por muito tempo:
                        Adolpho Porta, que atualmente mora em Brasília, Jamil Ajuz, Bento Belpomo e
                        Nelson Bastos, já falecidos.
                        <br />
                        <br />
                        Os primeiros clubes a promover este esporte foram: Clube Carioca de Tiro,
                        Andaraí Atlético Clube, Clube de Regatas Vasco da Gama, Riachuelo Tenis
                        Clube, Fluminense Futebol Clube e Clube Municipal.
                      </p>
                      <p>
                        Em 19 de novembro de 1958 foi fundada a Federação Metropolitana de Arco e
                        Flecha, no Rio de Janeiro.
                      </p>
                      <p>
                        Desde os anos 50, quando Adolpho Porta criou as primeiras associações no Rio
                        de Janeiro, o tiro com arco rompeu as barreiras estaduais e chegou a Minas
                        Gerais e São Paulo, onde outros abnegados como Sudário Ribeiro Gonçalves e
                        Otto Alfredo Rehder, respectivamente, trabalharam incansavelmente e fundaram
                        as federações de seuas estados.
                      </p>
                      <p>
                        Podemos considerar o início da década de 70 como o grande passo para o
                        reconhecimento do tiro com arco brasileiro am âmbito internacional, nesta
                        época ligada à CBF – Confederação Brasileira de Futebol – que possuía um
                        departamento que atendia a alguns esportes, incluindo o Tiro com Arco.
                      </p>
                      <p>
                        Nesta época o Brasil promoveu, entre outros, o Primeiro Torneio
                        Internacional, com a participação de Argentina, Uruguai e Brasil. O campeão
                        individual foi o brasileiro Renato Joaquim Emílio.
                      </p>
                      <p>
                        Conseguimos nos filiar à FITA em 1972, quando o Brasil teve sua primeira
                        delegação enviada ao Campeonato Mundial, em Geoble, formada pelos arqueiros
                        Renato Joaquim Emílio e Arcy Kempner.
                      </p>
                      <p>
                        Posteriormente, os esportes que compunham o departamento da CBF tiveram
                        condições de criar sua própria confederação, a CBDT, Confederação Brasileira
                        de Esporte Terrestre.
                      </p>
                      <p>
                        Sob a coordenação da CBDT e filiada à FITA, nossos atletas tiveram a
                        oportunidade de disputar vários torneios, como Jogos Pan-Americanos,
                        mundiais e Olimpíadas (4 edições - 1980 – Moscou, URSS, 1984 – Los Angeles,
                        USA, 1988 – Seul, Korea, 1992 – Barcelona, Espanha).
                      </p>
                      <p>
                        O crescimento de federações estaduais e número de atletas possibilitou a
                        criação da Confederação Brasileira de Tiro com Arco, em 1991, criando assim
                        condições para o desenvolvimento do esporte de maneira mais específica e
                        efetiva.
                      </p>
                      <p>
                        Hoje a Confederação busca patrocínios para projetos de fomento ao esporte:
                        seleção permanente e revelação de novos talentos.
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
