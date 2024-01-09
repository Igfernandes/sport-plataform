import scss from '@styles/components/boxInfo.module.scss';
import { When } from '../../utilities/when';

const BoxInfo = (props: any) => {
  const { title, children } = props

  return (
    <>
      <div className={scss.sport_info}>
        <div className={scss.sport_info_title}>
          <h3 className={scss.sport_info_title_h3}>{title}</h3>
        </div>
        <div className={scss.sport_info_content}>
          <When value={children}>{children}</When>
        </div>
      </div>
    </>
  );
};

export default BoxInfo;
