import React from 'react'
import'./Bread.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const BreadCrum = (props) => {
    const{product}=props;
  return (
    <div className='bread'>
      HOME<img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>{product.Catagory} <img src={arrow_icon} alt=''/>{product.name}
      
    </div>
  )
}

export default BreadCrum
