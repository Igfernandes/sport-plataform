import scss from '@styles/components/news.module.scss';
import { useNewsContext } from '@contexts/News';

export function News() {
  const { news, currentNews, setCurrentNews } = useNewsContext();

  console.log(currentNews)
  return (
    <article>
      <div className="sport_news">
        <div className="sport_news__list">
          <ul className={scss.sport_news__list_ul}>
            {news.slice(0, 7).map((singleNews, index) => (
              <li
                key={index}
                className={
                  scss.sport_news__li +
                  (currentNews?.titulo == singleNews.titulo ? ' is_active' : '')
                }
                onClick={() => setCurrentNews(singleNews)}
              >
                <div className={scss.sport_news__img}>
                  <img
                    src={singleNews.banner}
                    alt="Noticia"
                    className={scss.sport_news__img_preview}
                  />
                </div>
                <div className={scss.sport_news__title}>
                  <h6 className={scss.sport_news__title_h6}> {singleNews.titulo}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default News;
