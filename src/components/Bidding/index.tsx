import scss from '@styles/components/licitacao.module.scss';
import { BiddingModal } from './Modal';
import { useBidding } from './hooks/useBidding';
import { When } from '../shared/utilities/when';
import { BiddingData } from '@services/Bidding/Get/types';

export function Bidding() {
  const {
    bidding,
    biddingStatus,
    handleClose,
    handleShow,
    show,
    id,
    setId,
    isDisponibleInscribes,
  } = useBidding();

  return (
    <>
      {bidding.map((bid: BiddingData, key: number) => (
        <div className={scss.sport_licitacoes} key={key}>
          <div className={scss.sport_licitacoes_content}>
            <div className={scss.sport_licitacoes_head + ' d-flex'}>
              <div className={scss.sport_licitacoes_head__content}>
                <div className={scss.sport_licitacoes_title}>
                  <h3 className={scss.sport_licitacoes_title_h3}>{bid.titulo}</h3>
                </div>
                <div className={scss.sport_licitacoes_opening}>
                  <span className={scss.sport_licitacoes_opening_span}>
                    DATA DE ABERTURA: {new Date(bid.inicio).toLocaleDateString()}
                  </span>
                </div>
                <div className={scss.sport_licitacoes_closure}>
                  <span className={scss.sport_licitacoes_closure_span}>
                    DATA ENCERRAMENTO: {new Date(bid.termino).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className={scss.sport_licitacoes_head__content}>
                <div className={scss.sport_licitacoes_btn}>
                  <span className={scss.sport_licitacoes_btn_span}>
                    {bid.inscricoes} Cadastro e fornecedores
                  </span>
                </div>
              </div>
            </div>
            <div className={scss.sport_licitacoes_body}>
              <div className={scss.sport_licitacoes_description}>
                <div className={scss.sport_licitacoes_description_title}>
                  <h4 className={scss.sport_licitacoes_description_title_h4}>
                    <strong>DESCRITIVO DO ITEM:</strong>
                  </h4>
                </div>
                <div className={scss.sport_licitacoes_description_text}>
                  <p
                    className={scss.sport_licitacoes_description_text_p}
                    dangerouslySetInnerHTML={{ __html: String(bid.descricao) }}
                  ></p>
                </div>
              </div>
              <div className={scss.sport_licitacoes_stages}>
                <div className={scss.sport_licitacoes_stages_title}>
                  <h6 className={scss.sport_licitacoes_stages_title_h6}>FASES DA LICITAÇÃO</h6>
                </div>
                <div className={scss.sport_licitacoes_stages_box}>
                  <div className={scss.sport_licitacoes_stages_box__item}>
                    <div className={scss.sport_licitacoes_stages_box_status}>
                      {biddingStatus.map((status, key) => (
                        <>
                          <When value={status != bid.status} key={key}>
                            <div
                              className={scss.sport_licitacoes_stages_box_status__item}
                              key={key}
                            >
                              <span
                                className={scss.sport_licitacoes_stages_box_status__item_span}
                              >
                                {status}
                              </span>
                            </div>
                          </When>
                          <When value={status == bid.status} key={key + 1}>
                            <div
                              className={scss.sport_licitacoes_stages_box_status__item}
                              style={{ background: '#123E6A', color: '#fff' }}
                              key={key}
                            >
                              <span
                                className={scss.sport_licitacoes_stages_box_status__item_span}
                              >
                                {status}
                              </span>
                            </div>
                          </When>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className={scss.sport_licitacoes_stages_box__item}>
                    <When
                      value={isDisponibleInscribes({
                        inicio: bid.inicio,
                        status: bid.status,
                        termino: bid.termino,
                      })}
                    >
                      <a
                        className={scss.sport_licitacoes_stages_box__item_a + ' on'}
                        onClick={(ev) => {
                          handleShow();
                          setId(bid.id);
                        }}
                        style={{ background: '#018740', cursor: 'pointer' }}
                      >
                        Enviar Proposta
                      </a>
                    </When>
                    <When
                      value={
                        !isDisponibleInscribes({
                          inicio: bid.inicio,
                          status: bid.status,
                          termino: bid.termino,
                        })
                      }
                    >
                      <a className={scss.sport_licitacoes_stages_box__item_a}>
                        Enviar Proposta
                      </a>
                    </When>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <BiddingModal show={show} id={id} handleClose={handleClose} />
    </>
  );
}
