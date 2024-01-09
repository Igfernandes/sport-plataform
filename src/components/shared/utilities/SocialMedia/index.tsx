import Link from 'next/link';
import { socialMedia } from './mocks/socialMedia';
import { Img } from '../../content/Img';

export type SocialMediaProps = {
  className?: string;
};

export function SocialMedia(props: SocialMediaProps) {
  const { className } = props;

  return (
    <>
      <div className={`row sport_development` + className}>
        <div className="col-12 sport_development-column px-0">
          <div className="sport_development-social">
            <ul>
              <li>
                <Img src="/img/logo/shield-blue.png" alt="Logo BrasilArco" />
                <span>CONECTE-SE EM NOSSAS REDES SOCIAIS</span>
              </li>
              {socialMedia.map(({ ...socialMedia }, key) => (
                <li key={key}>
                  <Link href={socialMedia.href}>
                    <a target={'_blank'}>
                      <Img src={socialMedia.imgSrc} alt={socialMedia.alt} />
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <span>PARA FICAR INFORMADO</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
