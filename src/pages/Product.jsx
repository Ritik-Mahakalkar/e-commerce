import React, { useContext } from 'react' 
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/Bread/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import ReletedProduct from '../components/ReletedProduct/ReletedProduct';



const Product = () =>{
    const {all_product}=useContext(Shopcontext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
    return(
        <div>
         
         <BreadCrum product={product}/>
         <ProductDisplay product={product}/>
         
         <DescriptionBox/>
         <ReletedProduct/>
        </div>
    )
}

export default Product