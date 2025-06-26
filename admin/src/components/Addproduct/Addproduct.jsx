import React, { useState } from 'react'
import './Addproduct.css'
import { upload } from '@testing-library/user-event/dist/upload'
import upload_area from '../../assets/upload_area.svg'
const Addproduct = () => {
    const[image ,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"Men",
        new_price:"",
        old_price:""
        


    })
    const imgHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const add = async  () =>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;
        let formData=new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data});
        if (responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'content-Type':'application/json',
                }  ,
                body:JSON.stringify(product), 
            }).then((resp)=>resp.json()).then((data)=>{
               data.success?alert("product added"):alert("failed") 
            })
        }
    }
  return (
    <div className='add_product'>
        <div className="productfild">
            <h2>PRODUCT ADD</h2>
            <div class=" input_box">
            
             <input value={productDetails.name} onChange={changeHandler} type="text"  name='name' required/>
             <label >Product Name</label>
        </div>
        <div class=" input_box">
            
             <input value={productDetails.old_price} onChange={changeHandler} type="number"  name='old_price' required/>
             <label >Product Price</label>
        </div>
        <div class=" input_box">
            
             <input value={productDetails.new_price} onChange={changeHandler} type="number"  name='new_price' required/>
             <label >Offer Price</label>
        </div>
        <div class=" selection">
            
             <select  value={productDetails.category} onChange={changeHandler} name="category"className='add_product_selector'   required>
              <option value="men" >Men</option>
              <option value="women" >Women</option>
              <option value="kid" >Kids</option>
             <label >Product Category</label>
            </select>
        </div>
        <div className="addproduct_itemfield">
            <label htmlFor='file_input'><img src={image?URL.createObjectURL(image):upload_area} alt=""  className='add_product_img'/></label>
            <input  onChange={imgHandler} type='file'  name='img' id='file_input' hidden/>
        </div>
        
        <button onClick={()=>{add()}}className="add_btn">ADD</button>
        </div>
        
    </div>
  )
}

export default Addproduct
