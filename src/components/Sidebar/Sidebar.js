import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import './Sidebar.scss'

export const Sidebar = ({ options }) => (
  <section className="sidebar">
    <ul className="nav-container">
      {options && options.forEach((item) => {
        return (
          <li>
            <IndexLink to={item.to} activeClassName='route--active'>
              {item.text}
            </IndexLink>
          </li>
        );
      })}
    </ul>
  </section>
)

Sidebar.PropTypes = {
  activeItem: PropTypes.string,
  options: PropTypes.array,
};

export default Sidebar
