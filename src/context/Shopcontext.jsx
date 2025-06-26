import React, { createContext, useState,useEffect } from "react";
import all_product from '../components/Assets/all_product'
export const Shopcontext = createContext(null);
const getDefaultCart = ()=>{
    let cart ={};
    for (let index = 0; index </* --*/all_product.length +1; index++) {//all_product.length replace when all product in admin panal by 300
        cart[index]=0;
        
    }
    return cart;
}
 const Shopcontextprovider = (props) =>{
    
    const [cartItems,setCartItems] = useState(getDefaultCart());
   
   
    //use when all product present in admin panal
   /*const[all_product,set_All_product]=useState([]);
  
    useEffect (()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>set_All_product(data))
    },[]) */
    

    const addToCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }
    const RemoveFromCart =(itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalcartamount= () =>{
        let totalAmount =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                 totalAmount += cartItems[item] * itemInfo.new_price;
                 
            }
           
            
            

        }
        return totalAmount;
    }
    const getTotalcartItem = ()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    const contextvalue={getTotalcartItem,getTotalcartamount,all_product,cartItems,addToCart,RemoveFromCart};
    
    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>

    )
 }
 export default Shopcontextprovider