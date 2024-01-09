import { Article } from '../shared/layouts/News/Article';
import NewsLayout from '../shared/layouts/News/index';

export function News() {
  return (
    <>
      <div className="container-fluid brasilarco">
        <div className="row py-4 px-2 px-xl-0">
          <div className="col-12 px-0">
            <div className="container-xl container-fluid">
              <div className="row sport_development">
                <div className="col-12 col-md-7 sport_development-column px-0">
                  <Article />
                </div>
                <div className="col-12 col-md-5 sport_development-column ">
                  <NewsLayout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
