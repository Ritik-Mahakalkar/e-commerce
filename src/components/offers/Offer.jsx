import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div  className='offers'>
      <div className="offer_left">
        <h1>Exclusive </h1>
        <h1>offers for you</h1>
        <p>Only for the best products</p>
        <button>Check now</button>

      </div>
      <div className="offer_rigth">
        <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offer
