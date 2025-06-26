import React from 'react' 
import './css/Login.css'

const SignUp = () =>{
    return(


        
  <div class="form">
    <div className='form2'>
        <h2>Sign Up</h2>
        <div class=" input_box">
            
             <input type="email" required/>
             <label >email</label>
        </div>
        <div class="input_box">
            
             <input type="password" required/>
             <label > Set password</label>

        </div>
        <div class="input_box">
            
             <input type="password" required/>
             <label > Confirm password</label>

        </div>
        <div class="input_box">
            
             <input type="text" required/>
             <label >Name</label>

        </div>
        <div class="input_box">
            
            <input type="number" required/>
            <label >Mobile</label>

       </div>
       <div class="input_box">
            
            <input type="text" required/>
            <label >Buliding /Plot No</label>

       </div>
       <div class="input_box">
            
            <input type="text" required/>
            <label >Area / Street Name</label>

       </div>
       <div class="input_box">
            
            <input type="text" />
            <label >Landmark</label>

       </div>
       <div class="input_box">
            
            <input type="text" required />
            <label >Area</label>

       </div>
       <div class="input_box">
            
            <input type="text" required />
            <label >City</label>

       </div>
       <div class="input_box">
            
            <input type="text" required />
            <label >State</label>

       </div>
       <div class="input_box">
            
            <input type="text" required />
            <label >Countory</label>

       </div>
       <div class="input_box">
            
            <input type="number" required />
            <label >Pin Code</label>

       </div>


        
        <div class="pass-forgot">
            <label ><input type="checkbox"/> I can accept all terms and condition and all the information are correct</label>
            
        </div>

        <button type="submit"class="btn">Sign Up</button>

        
       
        
    </div>
</div>
    )
}

export default SignUp