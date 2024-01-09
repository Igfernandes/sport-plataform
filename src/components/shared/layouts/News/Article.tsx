import scss from '@styles/components/newsSingle.module.scss';
import { useNewsContext } from '@contexts/News';

export function Article() {
  const { currentNews } = useNewsContext();
  const published = new Date(currentNews?.criacao ?? new Date());
  published.setDate(published.getDate());

  return (
    <>
      <div className="brasilarco">
        <div className={`sport_news ` + scss.sport_news_box}>
          <div className={scss.sport_news_img}>
            <img src={currentNews?.banner} alt="Noticia" className={scss.sport_news_img_preview} />
          </div>
          <div className="sport_news-info">
            <div className={scss.sport_news_info__time}>
              <span>{published.toLocaleDateString()}</span>
            </div>
            <div>
              <h2 className={scss.sport_news_info__title_h2}>{currentNews?.titulo}</h2>
            </div>
            <div>
              <p
                className={scss.sport_news_info__text_p}
                dangerouslySetInnerHTML={{ __html: String(currentNews?.previa) }}
              ></p>
            </div>
            <div className={scss.sport_news_info__more}>
              <a href={`noticias/${currentNews?.link}`} className={scss.sport_news_info__more_a}>
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
