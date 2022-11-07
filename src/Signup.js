import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate=useNavigate()
   const[user,setuser]=useState("")
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("")
  

const gaf=(par)=>{ 

if(user.length>5||email.length>5){
navigate(par)

}else{
  console.log("else")
}
}


  return (
    <>
    <form>
    <div className='mainContanier'>
    <div className='form'>
    <div style={{height:'30px',width:'auto',backgroundColor:'red',transform:'translate(0,-10px)',borderRadius:'10px'}}>
      <h4>Signup Form</h4>
    </div>
   <input type='text' onChange={(e)=>{setuser(e.target.value)}} placeholder='Enter user name'required/><br/>
   <input type='email' onChange={(e)=>{setemail(e.target.value)}}  placeholder='Enter mail' required/><br/><br/>
   <input type='password' onChange={(e)=>{setpassword(e.target.value)}}  placeholder='Enter password' required/><br/>
   <br/>
   <button id='signup' onClick={()=>{gaf('/login')}}>Signup</button>

    </div>
    </div>
    </form>
    </>
  )
}

export default Signup