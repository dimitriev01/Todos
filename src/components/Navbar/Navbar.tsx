import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './Navbar.module.scss'

export const Navbar: React.FC = () => (
  <nav className={cl.nav}>
    <ul className={cl.nav__links}>
      <li className={cl.nav__link}>
        <NavLink to="/todos">Список дел</NavLink>
      </li>
      <li className={cl.nav__link}>
        <NavLink to="/">Цитата дня</NavLink>
      </li>
    </ul>
  </nav>
) 
