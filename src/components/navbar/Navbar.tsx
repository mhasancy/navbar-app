import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

import { NavbarProps } from '../../types';

const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const pages: string[] = ['home', 'about', 'blog', 'download', 'contact', 'games'];

  const handleScroll = useCallback(() => {
    const currentScrollPos: number = window.scrollY;
    const isVisible: boolean = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [handleScroll]);

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav style={{ top: visible ? '0' : '-100px', transition: 'top 0.6s' }}>
      <Link to="/" className="title" onClick={closeMenu}>
        Navbar App
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        {pages.map((item) => (
          <li key={`link-${item}`}>
            <NavLink to={`/${item}`} onClick={closeMenu}>
              {item.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
