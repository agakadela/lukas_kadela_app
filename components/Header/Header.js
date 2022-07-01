import styles from './header.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import OutsideClickHandler from 'react-outside-click-handler';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const white = '#fcfcfd';

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const colorChange = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    colorChange();

    window.addEventListener('scroll', colorChange);
  });

  return (
    <header
      style={{
        background: navbar ? white : '',
        borderBottom: navbar ? '1px solid rgba(35, 38, 47, 0.1)' : '',
      }}
      className={styles.section}
    >
      <div className={cn('container', styles.container)}>
        <Link href='/'>
          <a className={cn('body-bold logo', styles.logo)}>
            <img
              className={styles.image}
              src={
                router.pathname == '/'
                  ? navbar
                    ? '/images/logo.svg'
                    : '/images/logo_white.svg'
                  : '/images/logo.svg'
              }
            />
          </a>
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div className={menu ? styles.responsive_links : styles.links}>
            {links.map((item, index) => (
              <Link key={index} href={item.href}>
                <a
                  className={cn(
                    'button-small',
                    router.pathname == item.href
                      ? styles.active
                      : styles.inactive
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}

            <button
              className={cn('button-svg', styles.close_button)}
              onClick={closeMenu}
            >
              <Icon name='close' />
            </button>

            <button className={cn('button-small', styles.menu_link)}>
              {"Let's talk"}
            </button>
          </div>
        </OutsideClickHandler>
        <Link href='/contact'>
          <a className={cn('button-small', styles.link)}>{"Let's talk"}</a>
        </Link>

        <button
          className={cn('button-svg', styles.open_button)}
          onClick={openMenu}
        >
          <Icon name='menu' />
        </button>
      </div>
    </header>
  );
};

export default Header;
