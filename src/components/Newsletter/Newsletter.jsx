import React from 'react'
import './Newsletter.css'
const  Newsletter =() => {
  return (
    <div className='news'>
        <h1>Get Exclusive offers</h1>
        <p>Suscribe to our community </p>
        <div>
            <input type='email' placeholder='Enter your email'/>
            <button>Suscribe</button>
        </div>
      
    </div>

  )
}
export default Newsletter