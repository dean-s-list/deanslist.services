import React from 'react'
import logo from '../assets/logo.svg'
import { HamburgerMenu } from './Hamburgermenu'

export function TopNav() {
  return (
    <div className="top-nav px-5 py-2">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <HamburgerMenu />
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}
