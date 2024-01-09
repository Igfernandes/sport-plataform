import scss from '@styles/components/exams.module.scss';
import moment from 'moment';
import { A } from '../../content/A';
import { useExams } from './hooks/useExams';
import { baseUrl } from '@services/apiRoutes';
import { useEffect, useState } from 'react';
import { EventShape } from '@services/Exams/types';
import CollapseArrow from 'src/assets/icons/CollapseArrow';
import { limitWords } from 'src/helpers/limitWords';

export function Exams() {
  const { exams, collpaseCurrent, handleCollapseEvents } = useExams();
  const [events, setEvents] = useState<Array<EventShape>>();
  const LIMIT_WORDS_TO_EVENT_NAME = 42;

  useEffect(() => {
    const eventsCurrent = exams.map((exam) => exam.eventos);

    setEvents(
      eventsCurrent.filter(
        (event, index) =>
          index === eventsCurrent.findIndex((o) => event.nome === o.nome && event.nome === o.nome),
      ),
    );
  }, [exams]);

  return (
    <div className="brasilarco">
      <div className="sport_board">
        <div className={scss.sport_board__header}>
          <div className={scss.sport_board__title}>
            <h5 className={scss.sport_board__title_h5}>
              PROVAS AGENDADAS PARA {new Date().getFullYear()}
            </h5>
          </div>
        </div>
        <div className="sport_board-body ">
          <div className="sport_board-list">
            <div className={scss.sport_board_content}>
              {events?.map((event, key) => (
                <div key={key}>
                  <div
                    onClick={() => handleCollapseEvents(event.nome)}
                    className={scss.sport_board__list_title}
                  >
                    <p className={scss.sport_board__list_title_p}>
                      {limitWords(event.nome, LIMIT_WORDS_TO_EVENT_NAME)}
                    </p>
                    <CollapseArrow
                      style={{
                        transform:
                          collpaseCurrent == event.nome ? 'rotateX(0deg)' : 'rotateX(180deg)',
                        transition: 'all .1s',
                      }}
                    />
                  </div>
                  <div
                    className={scss.sport_board__list_content}
                    style={{ height: collpaseCurrent == event.nome ? 'auto' : 0 }}
                  >
                    <ul className={scss.sport_board__list_ul}>
                      {exams
                        .filter((exam) => exam.eventos.nome == event.nome)
                        .map((exam, key) => (
                          <li key={key}>
                            <A
                              href={`${baseUrl}/painel/provas/inscricoes/preview/?inscricao=${exam.id}`}
                              target="_blank"
                              className={scss.sport_board__list_li}
                            >
                              <div className={scss.sport_board__list_icon}>
                                <img
                                  className={scss.sport_board__list_icon_img}
                                  src="/img/icon/icon-round.png"
                                  alt=""
                                />
                              </div>
                              <div className={scss.sport_board__list_info}>
                                <div className="sport_board__list_info_title">
                                  <h6
                                    className={scss.sport_board__list_info_title_h6}
                                  >{`${exam.classificacao} ${exam.categoria} ${exam.sexo}`}</h6>
                                </div>
                                <div className="sport_board__list_info_text">
                                  <ul className={scss.sport_board__list_sub}>
                                    <li className={scss.sport_board__list_sub_li}>
                                      {exam.federacao}
                                    </li>
                                    <li className={scss.sport_board__list_sub_li}>
                                      Período da prova:{' '}
                                      {moment(exam.realizacao.inicio).format('DD/MM/YYYY')} a
                                      {` ${moment(exam.realizacao.termino).format('DD/MM/YYYY')}`}
                                    </li>
                                    <li className={scss.sport_board__list_sub_li}>
                                      Perído das inscrições:{' '}
                                      {moment(exam.inscricao.inicio).format('DD/MM/YYYY')} a
                                      {` ${moment(exam.inscricao.termino).format('DD/MM/YYYY')}`}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </A>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
