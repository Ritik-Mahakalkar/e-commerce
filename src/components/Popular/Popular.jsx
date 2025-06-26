import React from 'react'
import  './Popular.css'
import data_product from '../Assets/data'
import Item from '../item/Item'
export default function Popular() {
  return (
    <div className=' popular'>
        <h1>POPULAR IN NEW GENRATION</h1>
        <hr />
        <div className='popular_item'>
            {data_product.map((item,i)=>{
                return<Item key={i} id={item.id} names={item.names} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}
