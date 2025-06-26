import React, { useState } from 'react' 
import '../pages/css/Login.css'

import { Link } from 'react-router-dom'
const Login = () =>{
    const [state,setState] =useState("Login");
    const [formData ,setFormData]=useState({
        username:"",
        password:"",
        email:"",
        confirm_password:"",
        Mobile:"",
        Plot_No:"",
        Area:"",
        Landmark:"",
        City:"",
        State:"",
        Countory:"",
        Pin_Code:"",



    })
    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const login =async ()=>{
       console.log("Login  Successfully ",formData);
       let responseData;
        await fetch('http://localhost:4000/Login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('authorization',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }
    const signUp =async ()=>{
        console.log("Sign Up Successfully",formData);
        let responseData;
        await fetch('http://localhost:4000/signUp',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('authorization',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    return(


        
  <div class="form">
    <div className='form2'>
        <h2>{state}</h2>
        <div class=" input_box">
            
             <input type="email"  name='email' value={formData.email} onChange={changeHandler} required/>
             <label >email</label>
        </div>
        <div class="input_box">
            
             <input type="password" name='password' value={formData.password} onChange={changeHandler} required/>
             <label >password</label>

        </div>
        {state==="Sign Up"? <div class="input_box">
            
             <input type="password"name='confirm_password' value={formData.confirm_password} onChange={changeHandler} required/>
             <label > Confirm password</label>

        </div>:<></>}
        {state==="Sign Up"?<div class="input_box">
            
             <input name='username' value={formData.username} onChange={changeHandler} type="text" required/>
             <label >Name</label>

        </div>:<></>}
        {state==="Sign Up"?<div class="input_box">
            
            <input type="number" name='Mobile' value={formData.Mobile} onChange={changeHandler} required/>
            <label >Mobile</label>

       </div>:<></>}
       {state==="Sign Up"?<div class="input_box">
            
            <input type="text" name='Plot_No' value={formData.Plot_No} onChange={changeHandler} required/>
            <label >Buliding /Plot No</label>

       </div>:<></>}
       {state==="Sign Up"?<div class="input_box">
            
            <input type="text" name='Area' value={formData.Area} onChange={changeHandler} required/>
            <label >Area / Street Name</label>

       </div>:<></>}
       {state==="Sign Up"?<div class="input_box">
            
            <input type="text" name='Landmark' value={formData.Landmark} onChange={changeHandler} required/>
            <label >Landmark</label>

       </div>:<></>}
     
       {state==="Sign Up"?<div class="input_box">
            
            <input type="text" name='City' value={formData.City} onChange={changeHandler} required />
            <label >City</label>

       </div>:<></>}
       {state==="Sign Up"?<div class="input_box">
            
            <input type="text" name='State' value={formData.State} onChange={changeHandler}required />
            <label >State</label>

       </div>:<></>}
       {state==="Sign Up"?<div class="input_box">
            
            <input type="text"name='Countory' value={formData.Countory} onChange={changeHandler} required />
            <label >Countory</label>

       </div>:<></>}
      {state==="Sign Up"? <div class="input_box">
            
            <input type="number" name='Pin_Code' value={formData.Pin_Code} onChange={changeHandler} required />
            <label >Pin Code</label>

       </div>:<></>}


        
        
       {state==="Login"? <div class="pass-forgot">
            <label ><input type="checkbox"/> I can accept all terms and condition</label>
            
        </div>:<></>}
        {state==="Sign Up"?<div class="pass-forgot">
            <label ><input type="checkbox"/> I can accept all terms and condition and all the information are correct</label>
            
        </div>:<></>}

        <button type="submit"class="btn" onClick={()=>{state==="Login"?login():signUp()}}>Continue</button>

        <div class="login-register">
        {state==="Login"?<p>you don't have account ? <span onClick={()=>{setState("Sign Up")}}>sign up</span></p>:<></>}
                 {state==="Sign Up"?<p>Alrady have an account? <span onClick={()=>{setState("Login")}}>Login</span></p>:<></>}
         </div>
       
        
    </div>
</div>
    )
}

export default Login