import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull_icon from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import { Shopcontext } from '../../context/Shopcontext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(Shopcontext);
  return (
    <div className='Productdisplay'>
      <div className="left">
          <div className="img_list">
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />

          </div>
          
          <div className="product_img">
            <img className='product_main_img' src={product.image} alt="" />
            
          </div>
          
          
          
        
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="product_right_star">
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_icon} alt="" />
             <img src={star_dull_icon} alt="" />
             <p>(122)</p>
          </div>
          <div className="product_right_prices">
            <div className="product_right_price_old">${product.old_price}</div>
            <div className="product_right_price_new">${product.new_price}</div>
            
          </div>
          <div className="product_right_description ">
          <ol><h2>Product details</h2> </ol>
          <ol><h4>Material composition</h4>  100% Cotton</ol>
          <ol><h4>Pattern</h4>  Solid</ol>
          <ol><h4>Fit type</h4> Slim Fit</ol>
          </div>
          <div className="product_right_size">
            <h1>Select size</h1>
            <div className="product_right_sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                
                <div>XL</div>
                <div>2Xl</div>
                
            </div>
          </div>
             <button className='add' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className='product_right_catagory'><span>Category :</span> Women ,T shirt ,crop Top ,</p>
             <p className='product_right_catagory'><span>Tags :</span> mordern,latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
