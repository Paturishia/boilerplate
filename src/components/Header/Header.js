import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <section className="header">
    <div className="logo"></div>
    <ul className="nav-container">
      <li>
        <IndexLink to='/components'>
          Components
        </IndexLink>
      </li>
      <li>
        <IndexLink to='/' activeClassName='route--active'>
          Getting Started
        </IndexLink>
      </li>
      <li>
        <IndexLink to='/styleguide'>
          Style Guide
        </IndexLink>
      </li>
    </ul>
  </section>
)

export default Header
