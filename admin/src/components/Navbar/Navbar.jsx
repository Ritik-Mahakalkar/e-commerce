import React from 'react'
import './Navbar.css'
import f from '../../assets/f.png'
import f3 from '../../assets/f2.png'
const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='nav-logo'>
            <img src={f} alt=""/>
            <p>Figma  <span>Admin Panal</span></p>
        </div>
        <img src={f3} alt="" className="nav_profile" />
      
    </div>
  )
}

export default Navbar
