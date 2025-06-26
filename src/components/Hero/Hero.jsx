import './Hero.css';
import React from 'react'
import heroimg from '../Assets/heroimg.png'
import welcome from '../Assets/welcome.png'
import next1 from '../Assets/next1.png'
export default function Hero() {
  return (
    <div className='hero'>
         <div className="hero_left">
            <h2>New arrival's</h2>
            <div>
                <div className="icon">
                <p>New</p>
                <img src={welcome} alt=""/>
            </div>
            <p>collection</p>
            <p>for everyone</p>
         </div>
         <div className="hero-latest-button">
            <div>
                Latest collection

            </div>
            <img src={next1} alt=""/>
         </div>
         </div>
         <div className="hero_right">
            <img src={heroimg} alt=""/>

         </div>

    </div>
  )
}
