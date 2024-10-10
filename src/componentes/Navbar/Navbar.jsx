import './Navbar.css'
import React from 'react'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='navlogo' src={navlogo} alt=''/>
        <img className='nav-profile'src={navProfile} alt=''/>
    </div>
  )
}

export default Navbar