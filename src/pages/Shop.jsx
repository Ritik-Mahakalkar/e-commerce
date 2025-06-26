import React from 'react' 
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offer from '../components/offers/Offer';
import New_collection from '../components/New_collection/New_collection';
import Newsletter from '../components/Newsletter/Newsletter';

const Shop = () =>{
    return(
        <div>
             <Hero/>
             <Popular/>
             <Offer/>
             <New_collection/>
             <Newsletter/>
        </div>
    )
}

export default Shop