import scss from '@styles/components/cardLogin.module.scss';
import { FormGroup } from '@components/shared/forms/FormGroup';
import { Img } from '@components/shared/content/Img';
import { Button } from '@components/shared/content/Button';
import Link from 'next/link';
import { BASE_URL_API } from '@constants/references';

export default function CardLogin() {
  return (
    <>
      <div className="sport_card">
        <div className={scss.sport_card_login}>
          <form
            action={`${process.env.NEXT_PUBLIC_API_URL}/load/access/login/store`}
            method="post"
            className={scss.sport_form}
          >
            <div className={scss.sport_form_img}>
              <Img src={'/img/icon/icon_login.png'} alt="Icon Login" />
            </div>
            <div className={scss.sport_form_custom}>
              <div className={scss.sport_form_custom_field}>
                <FormGroup
                  classGroup={{
                    formGroup: 'd-flex',
                    label: `${scss.sport_form_custom_label}`,
                  }}
                  htmlfor={'login'}
                  stylelabel={{ width: '10%' }}
                  labelContent={<Img src="/img/icon/ic-1.png" alt="Icon" />}
                  type={'text'}
                  name={'cbtarco_login'}
                  id={'login'}
                  required
                />
              </div>
              <div className={scss.sport_form_custom_field}>
                <FormGroup
                  classGroup={{
                    formGroup: 'd-flex relative',
                    input: 'p-1',
                    label: `${scss.sport_form_custom_label}`,
                  }}
                  htmlfor={'password'}
                  stylelabel={{ width: '10%' }}
                  labelContent={<Img src="/img/icon/ic-2.png" alt="Icon" />}
                  type={'password'}
                  name={'cbtarco_senha'}
                  id={'password'}
                  required
                />
              </div>
              <div className={scss.sport_links}>
                <Link href={`${BASE_URL_API}`}>{'Cadastrar-se'}</Link>
                <Link href={`${BASE_URL_API}/recuperacao/senha`}>{'Esqueci minha senha'}</Link>
              </div>
              <div className={scss.sport_form_custom_submit}>
                <Button type="submit" className={scss.sport_form_custom_submit_btn}>
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
