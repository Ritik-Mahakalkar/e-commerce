import React, { useEffect,useState } from 'react'
import  './New_collection.css'
import new_collections from '../Assets/new_collections'
import Item from '../item/Item'
const New_collection = () => {
  const [new_collection,setnew_collection]=useState([]);//if all item present in database then set 'new_collection ' as 'new_collections'
    
  
  useEffect(()=>{
        fetch('http://localhost:4000/newcollection')
        .then((response)=>response.json())
        .then((data)=>setnew_collection(data));
  },[])
  return (
    <div className='new_collection'>
      <h1>New Collection</h1>
      <hr/>
      <div className='collection'>
        {new_collections .map((item,i)=>{
            return<Item key={i} id={item.id} names={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
       </div>
    </div>
  )
}
export default New_collection
