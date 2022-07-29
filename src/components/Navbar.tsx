import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav className="nav">
    <ul className='nav-links'>
      <li className='nav-link'>
        <NavLink to="/">Список дел</NavLink>
      </li>
      <li className='nav-link'>
        <NavLink to="/about">Информация</NavLink>
      </li>
    </ul>
  </nav>
) 
