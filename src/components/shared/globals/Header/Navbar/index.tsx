import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { menuMainList } from '@constants/menu';
import { useNavigationContext } from '@contexts/Navigation';
import { When } from '@components/shared/utilities/when';
import { MenuData } from '@services/Menu/useGet/types';
import { subMenu } from './mooks/subMenu';

export function Navbar() {
  const { menu } = useNavigationContext();
  const SUB_MENU = [...menu, ...subMenu]
  const EXCEPTIONS_MENU = ["ONDE PRATICAR", "FALE CONOSCO"]

  return (
    <>
      <nav className="sport_nav">
        <div className="mobile-nav d-md-none">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="sport_navbar">
          {menuMainList.map((item, key) => (
            <When value={SUB_MENU.find((submenu) => submenu.grupo.toUpperCase() == item.title) || EXCEPTIONS_MENU.includes(item.title)} key={key}>
              <li className="sport_navbar_item" >
                <div className="sport_nav-content">
                  <When value={item.href}>
                    <Link href={String(item.href)}>
                      <a className="sport_nav_a">{item.title}</a>
                    </Link>
                  </When>
                  <When value={!item.href}>
                    <a className="sport_nav_a">{item.title}</a>
                  </When>
                  <ul>
                    {SUB_MENU.map((subitem: MenuData, subkey) => (
                      <When value={subitem.grupo.toUpperCase() == item.title} key={subkey}>
                        <li className="sport_nav_ul_li" key={subkey}>
                          <Link
                            href={`${subitem.link != 'noticias' ? '/' + item.slug.toLowerCase() : ''
                              }/${subitem.link}`}
                          >
                            <a className="sport_nav_a">{subitem.titulo.toUpperCase()}</a>
                          </Link>
                        </li>
                      </When>
                    ))}
                  </ul>
                </div>
              </li>
            </When>
          ))}
        </ul>
      </nav>
    </>
  );
}
