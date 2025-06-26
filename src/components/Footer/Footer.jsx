import React from 'react'
import './Footer.css'
import f from '../Assets/f.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
       <div className="logo">
        <img src={f} alt=''/>
        <p>Figma</p>
       </div>
       <ul className="footer_link">
        <li>Compony</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer_social_icon">
        <div className="footer_icon">
           <img src={instagram_icon} alt=''/>
        </div>
        <div className="footer_icon">
           <img src={pintester_icon} alt=''/>
        </div>
        <div className="footer_icon">
           <img src={whatsapp_icon} alt=''/>
        </div>
       </div>
       
    </div>
  )
}

export default Footer
