import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <section className="header">
    <div className="logo"></div>
    <ul className="nav-container">
      <li>
        <IndexLink to='/' activeClassName='route--active'>
          Style Guide
        </IndexLink>
      </li>
      <li>
        <IndexLink to='/documentation'>
          Documentation
        </IndexLink>
      </li>
    </ul>
  </section>
)

export default Header
