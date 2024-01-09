import moment from 'moment';
import scss from '../../styles/components/eleicoes.module.scss';
import { Img } from '../shared/content/Img';
import { Label } from '../shared/forms/Label';
import { When } from '../shared/utilities/when';
import { useElections } from './hooks/useElections';
import { ElectionsProps } from './type';
import BoxInfo from '../shared/layouts/BoxInfo';
import { CandidateShape, ElectionsData } from '@services/Elections/Get/types';
import Link from 'next/link';

export default function Elections({ type, title }: ElectionsProps) {
  const { elections } = useElections({ type });

  return (
    <>
      <div className={'container container-sm-fluid ' + scss.eleicoes}>
        <div className="row">
          <div className="col-12 px-0">
            <div className={scss.linha}>
              <p className={scss.eleicoes_title_p}>{`ELEIÇÕES PARA ${title}`}</p>
            </div>
          </div>
        </div>
        <When value={elections.length > 0}>
          {elections.map((election: ElectionsData, key: number) => (
            <BoxInfo title={election.titulo} key={key}>
              {election.candidatos.map((candidato: CandidateShape, key: number) => (
                <div key={key} className={'row ' + scss.position_relative_mobile}>
                  <div className="col-12 col-lg-3 px-0 ">
                    <div className={scss.box_image}>
                      <Img src={candidato.foto ? candidato.foto : '/img/ilustracao.png'} alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-9 px-0 px-lg-3">
                    <div className={scss.box_info_eleicoes}>
                      <div className={'box_info_line d-flex ' + scss.box_info_line}>
                        <div className={'box-label ' + scss.box_label}>
                          <Label className={scss.box_label_label} htmlFor="">
                            NOME: {candidato.nome}
                          </Label>
                        </div>
                      </div>
                      <div className={'box_info_line d-flex mt-4 ' + scss.box_info_line}>
                        <div className={'box-label ' + scss.box_label}>
                          <Label className={scss.box_label_label} htmlFor="">
                            CLUBE: {candidato.clube}
                          </Label>
                        </div>
                      </div>
                      <div className={'box_info_line d-flex mt-4 ' + scss.box_info_line}>
                        <div className={'box-label ' + scss.box_label}>
                          <Label className={scss.box_label_label} htmlFor="">
                            FEDERAÇÃO: {candidato.federacao}
                          </Label>
                        </div>
                      </div>
                      <div className={'box_info_line d-flex mt-4 ' + scss.box_info_line}>
                        <div className={'box-label ' + scss.box_label}>
                          <Label className={scss.box_label_label} htmlFor="">
                            IDADE: {String(candidato.data_nasc)}
                          </Label>
                        </div>
                      </div>
                      <div className={'box_info_line d-flex mt-4 ' + scss.box_info_line}>
                        <div className={'box-label ' + scss.box_label}>
                          <Label className={scss.box_label_label} htmlFor="">
                            TÉRMINO: {moment(election.termino).format('L')}
                          </Label>
                        </div>
                      </div>
                      <div className={scss.box_button_eleicoes}>
                        <Link
                          href={`${process.env.NEXT_PUBLIC_API_URL}/painel/eleicoes/urna?eleicao=${election.id}`}
                        >
                          <a className={'mt-3 ' + scss.button_eleicoes} target="_blank">
                            VOTAR
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </BoxInfo>
          ))}
        </When>
        <When value={elections.length == 0 || elections.length < 0}>
          {
            <div className={'row ' + scss.position_relative_mobile}>
              <div className="col-12 px-0 px-lg-3">
                <div className={scss.box_info_eleicoes}>
                  <div className={'box_info_line d-flex text-center ' + scss.box_info_line}>
                    <div className={'box-label ' + scss.box_label}>
                      <Label className={scss.box_label_label} htmlFor="">
                        NÃO HÁ ELEIÇÕES DISPONÍVEIS{' '}
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </When>
      </div>
    </>
  );
}
