

import { Link } from 'react-router-dom';
import { HeaderData } from './HeaderData';
import './Header.css';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });

  let navbarClasses = ['nav-menu'];
  if (scrolled) {
    navbarClasses.push('scrolled');
    navbarClasses.shift();
  }
  

  return (
    <div>
      <nav className={navbarClasses.join(" ")}>
        <ul className='nav-menu-items'>
          {HeaderData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;


