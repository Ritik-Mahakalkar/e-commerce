import React, { useContext } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalcartItem,getTotalcartamount,all_product,cartItems,RemoveFromCart} = useContext(Shopcontext);
  return (
    <div className='cartitems'>
      <div className="cartitems">
        <div className="cartitems_formate_main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
       {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return  <div>
            <div className="cartitems_formate cartitems_formate_main">
                <img src={e.image} alt="" className='caticon_product_icon'/>
                <p>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className="cartItems_quantity">{cartItems[e.id]}</button>
                <p> ${e.new_price*cartItems[e.id]}</p>
                <img  className='cartitem_remove_icon'src={remove_icon} onClick={()=>{RemoveFromCart(e.id)}} alt="" />
            </div>
            <hr/>
        </div>
            
        }
        return null;
       })}
       <div className="cartitem_down">
        <div className="cartitem_total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitem_total_item">
                    <p>Total Items</p>
                    <p>{getTotalcartItem()}</p>
                </div>
                <hr/>
                <div className="cartitem_total_item">
                    <p>Sheeping </p>
                    <p><span>Free</span></p>
                </div>
                <hr/>
                <div className="cartitem_total_item">
                    <h3>Total</h3>
                    <h3>$ {getTotalcartamount()}</h3>
                </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_item_promocode">
            <p>If you have a code ,Enter it here</p>
            <div className="cartitem_promobox">
                <input type="text"placeholder='promo' />
                <button>Submit</button>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default CartItems
