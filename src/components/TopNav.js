import React from 'react'
import menuIcon from '../assets/Menu Icon.svg'
import logo from '../assets/Logo.svg'
import HamburgerMenu from './Hamburgermenu'

const TopNav = () => {
    return (
        <div className='top-nav px-5 py-2'>
            <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <HamburgerMenu />
                    {/* <img src={menuIcon} alt='menu-icon'/> */}
                </div>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
            </div>
        </div>
    )
}

export default TopNav