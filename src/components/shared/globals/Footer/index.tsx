import { useNavigationContext } from '@contexts/Navigation';
import Link from 'next/link';
import { logos } from './_mocks_/logos';
import { subMenu } from '../Header/Navbar/mooks/subMenu';
import { menuMainList } from '@constants/menu';
import { When } from '@components/shared/utilities/when';
import { MenuData } from '@services/Menu/useGet/types';

const Footer = () => {
  const { menu } = useNavigationContext();
  const SUB_MENU = [...menu, ...subMenu];
  const EXCEPTIONS_MENU = ['ONDE PRATICAR', 'FALE CONOSCO'];

  return (
    <footer>
      <div className="container-fluid brasilarco">
        <div className="row sport_content pt-lg-5 px-0">
          <div
            className="col-12 sport_content-column"
            style={{ borderBottom: '25px solid #149138' }}
          >
            <div className="container-xl container-fluid">
              <div className="row sport_development justify-content-between">
                <div className="col-12 sport_development-column px-0">
                  <div className="sport_development-companys">
                    <ul>
                      {logos.map((logo, key) => (
                        <li key={key}>
                          <img src={logo.src} alt={logo.alt} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sport_content" style={{ backgroundColor: '#133D69' }}>
          <div className="col-12 sport_content-column px-0">
            <div className="container-xl container-fluid">
              <div className="row sport_development justify-content-between pt-4  pt-lg-5">
                <div className="col-12 col-lg-2 sport_development-column ">
                  <a href="#" className="sport_development-logo">
                    <img src="/img/logo/logo-white.png" alt="Logitpo Sport Plataform" />
                  </a>
                </div>
                <div className="col-12  col-lg-8 sport_development-column pt-3 pt-lg-0 d-flex flex flex-column justify-content-between">
                  <div className="sport_development-menu">
                    {menuMainList.map((item, key) => (
                      <When
                        value={
                          SUB_MENU.find((submenu) => submenu.grupo.toUpperCase() == item.title) ||
                          !EXCEPTIONS_MENU.includes(item.title)
                        }
                        key={key}
                      >
                        <div className="sport_development-menu--item" key={key}>
                          <When value={item.href}>
                            <Link href={String(item.href)}>
                              <a className="sport_nav_a">
                                <h6>
                                  <strong>{item.title}</strong>
                                </h6>
                              </a>
                            </Link>
                            <When value={!item.href}>
                              <a className="sport_nav_a">{item.title}</a>
                            </When>
                          </When>

                          <ul>
                            {SUB_MENU.map((subitem: MenuData, subkey) => (
                              <When value={subitem.grupo.toUpperCase() == item.title} key={subkey}>
                                <li key={subkey}>
                                  <Link
                                    href={`${
                                      subitem.link != 'noticias'
                                        ? '/' + item.slug.toLowerCase()
                                        : ''
                                    }/${subitem.link}`}
                                  >
                                    <a> - {subitem.titulo.toUpperCase()}</a>
                                  </Link>
                                </li>
                              </When>
                            ))}
                          </ul>
                        </div>
                      </When>
                    ))}
                  </div>
                  <div className="sport_development-copy">
                    <span>
                      {' '}
                      Centro de Maricá - Maricá/RJ - Brasil - CEP 24911-000 (21) 2600-0000 e
                      2600-0000 km@gmail.com Funcionamento de 2ª a 6ª de 9h às 17h
                    </span>
                  </div>
                </div>
                <div className="col-12 col-lg-2 sport_development-column position-relative">
                  <div className="sport_development-social">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/img/icon/wpp-nmodern-icon.png" alt="Icon Wpp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/icon/facebook-modern-icon.png" alt="Icon Facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/icon/twitter-modern-logo.png" alt="Icon Twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
