import React from 'react'
import './ReletedProduct.css'
import data_product from '../Assets/dataset'
import Item from '../item/Item'
const ReletedProduct = () => {
 
  return (
    <div className='reletedproduct'>
      <h1>Releted Products</h1>
      <hr/>
      <div className="reletedproduct_item">
        {data_product.map((item,i)=>{
            return<Item key={i} id={item.id} names={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default ReletedProduct
