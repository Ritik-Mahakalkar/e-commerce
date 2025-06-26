import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import cart_icon from '../../assets/cart_icon.png'
import next from '../../assets/list.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar_item">
            <img src={cart_icon} alt=''/>
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar_item">
            <img src={next} alt=''/>
            <p>List of Product</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
