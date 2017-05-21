import React from 'react'
import Sidebar from '../../../components/Sidebar'
import './StyleGuideView.scss'

export const StyleGuideView = () => (
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
    <h4>Style Guide!</h4>
  </div>
)

export default StyleGuideView
