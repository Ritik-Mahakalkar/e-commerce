import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'
const Listproduct = () => {
  const [allproducts,setallproducts]=useState([]);
  const fetchinfo=async ()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setallproducts(data)});
  }
  useEffect(()=>{
    fetchinfo();
  },[])
  const remove =async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
                headers:{
                    Accept:'application/json',
                    'content-Type':'application/json',
                }  ,
                body:JSON.stringify({id:id}), 
    })
    await fetchinfo();
  }
  return (
    <div className='list_product'>
      <h1>All Product's</h1>
      <div className="listproduct_formate_main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
       
      </div>
     
      <div className="all_product">
      <hr/>
        {allproducts.map((product,index)=>{
          return<> <div key={index} className="listproduct_formate_main Listproduct_formate">
            <img src={product.image} alt="" className="list_product_icon" />
             <p>{product.name}</p>
             <p>$ {product.old_price}</p>
             <p>$ {product.new_price}</p>
             <p>{product.category}</p>
             <img  onClick={()=>{remove(product.id)}}src={cross_icon} alt="" className="remove_icon" />

          </div> 
          <hr/></>
          
        })}

      </div>
    </div>
  )
}

export default Listproduct
