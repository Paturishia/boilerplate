import React from 'react'
import Sidebar from '../../../components/Sidebar'
import './ComponentsView.scss'

export const ComponentsView = () => (
  <div>
    {/* SIDEBAR */}
    <Sidebar
      options={[
        {
          text: 'Grid',
          to: '/',
        },
        {
          text: 'UI Colors',
          to: '/',
        },
        {
          text: 'Typography',
          to: '/',
        },
        {
          text: 'Icons',
          to: '/',
        },
        {
          text: 'Media Queries',
          to: '/',
        }
      ]}
    />
    {/* END - SIDEBAR */}
    <h4>Components</h4>
  </div>
)

export default ComponentsView
