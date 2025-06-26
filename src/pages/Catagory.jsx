import React, { useContext } from 'react' 
import './css/Catagory.css'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import { Shopcontext } from '../context/Shopcontext'
import Item from '../components/item/Item'
const Catagory = (props) =>{
    const {all_product} = useContext(Shopcontext);
    return(
        <div className=' shop_catagory'>
         <img  className='shop_catagory_banner'src={props.banner} alt=''/>
         <div className='catagory_index'>
            <p>
                <span>Showing Some </span>out of 1000's product
            </p>
            <div className="sort">
                sort by<img src={dropdown_icon} alt=''/>
            </div>
         </div>
         <div className="products">
            {all_product.map((item,i)=>{
                if (props.Catagory===item.category){
                    return <Item key={i} id={item.id} names={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                    return null;
                }
            } )}
         </div>
         <div className="load">
            Explore More
         </div>
        </div>
    )
}

export default Catagory