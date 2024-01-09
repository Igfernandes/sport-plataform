import scss from '@styles/components/boxLink.module.scss';
import { boxes } from './data/boxList';
import { A } from '../shared/content/A';

const BoxLink = () => {
  return (
    <>
      <div className="sport_box">
        {boxes.map((box, key) => (
          <div className={scss.sport_zona} key={key}>
            <div className={scss.sport_zona__title}>
              <h5 className={scss.sport_zona__title_h5}>{box.title}</h5>
            </div>
            <div className={scss.sport_zona__link}>
              <A className={scss.sport_zona__link_a} href={box.link}>
                {box.text}
              </A>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BoxLink;
