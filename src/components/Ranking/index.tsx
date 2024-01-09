import scss from '@styles/components/ranking.module.scss';

const Ranking = () => {
  return (
    <div className="brasilarco">
      <div className="sport_ranking">
        <div className={scss.sport_ranking_head}>
          <div className={scss.sport_ranking__title}>
            <h5 className={scss.sport_ranking__title_h5}>RANKING ESPORTIVO 2022</h5>
          </div>
        </div>
        <div className="sport_ranking-body">
          <ul className={scss.sport_ranking__ul}>
            <li className={scss.sport_ranking__li}>
              <div className={scss.sport_ranking__user}>
                <div className={scss.sport_ranking__user_icon}>
                  <img
                    className={scss.sport_ranking__user_icon__img}
                    src="/img/noticia-1.png"
                    alt="perfil"
                  />
                </div>
                <div className={scss.sport_ranking__user__name}>
                  <p className={scss.sport_ranking__user__name_p}>
                    <strong>Nathan Chen</strong>
                  </p>
                  <span className={scss.sport_ranking__user__name_span}>Figure Studing</span>
                </div>
              </div>
              <div className={scss.sport_ranking__countries}>
                <img
                  className={scss.sport_ranking__countries_img}
                  src="/img/bandeira-7b.png"
                  alt=""
                />
                <p className={scss.sport_ranking__countries_p}>Brasil</p>
              </div>
            </li>
            <li className={scss.sport_ranking__li}>
              <div className={scss.sport_ranking__user}>
                <div className={scss.sport_ranking__user_icon}>
                  <img
                    className={scss.sport_ranking__user_icon__img}
                    src="/img/noticia-2.png"
                    alt="perfil"
                  />
                </div>
                <div className={scss.sport_ranking__user__name}>
                  <p className={scss.sport_ranking__user__name_p}>
                    <strong>Nathan Chen</strong>
                  </p>
                  <span className={scss.sport_ranking__user__name_span}>Figure Studing</span>
                </div>
              </div>
              <div className={scss.sport_ranking__countries}>
                <img
                  className={scss.sport_ranking__countries_img}
                  src="/img/bandeira-7b.png"
                  alt=""
                />
                <p className={scss.sport_ranking__countries_p}>Brasil</p>
              </div>
            </li>
            <li className={scss.sport_ranking__li}>
              <div className={scss.sport_ranking__user}>
                <div className={scss.sport_ranking__user_icon}>
                  <img
                    className={scss.sport_ranking__user_icon__img}
                    src="/img/noticia-3.png"
                    alt="perfil"
                  />
                </div>
                <div className={scss.sport_ranking__user__name}>
                  <p className={scss.sport_ranking__user__name_p}>
                    <strong>Nathan Chen</strong>
                  </p>
                  <span className={scss.sport_ranking__user__name_span}>Figure Studing</span>
                </div>
              </div>
              <div className={scss.sport_ranking__countries}>
                <img
                  className={scss.sport_ranking__countries_img}
                  src="/img/bandeira-7b.png"
                  alt=""
                />
                <p className={scss.sport_ranking__countries_p}>Brasil</p>
              </div>
            </li>
            <li className={scss.sport_ranking__li}>
              <div className={scss.sport_ranking__user}>
                <div className={scss.sport_ranking__user_icon}>
                  <img
                    className={scss.sport_ranking__user_icon__img}
                    src="/img/noticia-1.png"
                    alt="perfil"
                  />
                </div>
                <div className={scss.sport_ranking__user__name}>
                  <p className={scss.sport_ranking__user__name_p}>
                    <strong>Nathan Chen</strong>
                  </p>
                  <span className={scss.sport_ranking__user__name_span}>Figure Studing</span>
                </div>
              </div>
              <div className={scss.sport_ranking__countries}>
                <img
                  className={scss.sport_ranking__countries_img}
                  src="/img/bandeira-7b.png"
                  alt=""
                />
                <p className={scss.sport_ranking__countries_p}>Brasil</p>
              </div>
            </li>
            <li className={scss.sport_ranking__li}>
              <div className={scss.sport_ranking__user}>
                <div className={scss.sport_ranking__user_icon}>
                  <img
                    className={scss.sport_ranking__user_icon__img}
                    src="/img/noticia-2.png"
                    alt="perfil"
                  />
                </div>
                <div className={scss.sport_ranking__user__name}>
                  <p className={scss.sport_ranking__user__name_p}>
                    <strong>Nathan Chen</strong>
                  </p>
                  <span className={scss.sport_ranking__user__name_span}>Figure Studing</span>
                </div>
              </div>
              <div className={scss.sport_ranking__countries}>
                <img
                  className={scss.sport_ranking__countries_img}
                  src="/img/bandeira-7b.png"
                  alt=""
                />
                <p className={scss.sport_ranking__countries_p}>Brasil</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
