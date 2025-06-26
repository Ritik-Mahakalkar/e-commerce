
import React, { useContext, useState } from 'react'
import './Nevbar.css'
import f from '../Assets/f.png'

import shopping_trolly from '../Assets/shopping_trolly.png'
import { Link, NavLink } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'

const Nevbar = () => {
    const[menu,setMenu] =useState("shop");
    const{getTotalcartItem}=useContext(Shopcontext);
  return (
    <div className='nevbar'>
        <div className='nav-logo'>
            <img src={f} alt=""/>
            <p>Figma </p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'black'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none',color:'black'} }to="/mens">Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'black'}} to="/womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration :'none',color:'black'}}to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-cont'>
            {localStorage.getItem('authorization')
            ?<button onClick={()=>{localStorage.removeItem('authorization');window.location.replace('/')}}>Logout</button>
        :<Link to='/Login'> <button>login</button></Link>}
        
        <Link to="/Cart"><img src={shopping_trolly} alt=""/></Link>
            <div className='nav-cont-count'>{getTotalcartItem()}</div>
        </div>
    </div>
  )
}

export default Nevbar
