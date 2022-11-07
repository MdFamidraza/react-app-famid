import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const[a,b]=useState("")

    const navigate=useNavigate()

    const log=(url)=>{
        if(a.length>5){
           navigate(url)
        }else{
            console.log('hgfhg')
        }
       
    }
  return (
    <div className='maindiv'>
        <div className='childdiv'>
            <input type='text' onChange={(e)=>{b(e.target.value)}} placeholder='name'/><br/>
            <input type='passsword' onChange={(e)=>{b(e.target.value)}} placeholder='password'/><br/>
            <button style={{marginTop:'30px',borderRadius:'5px',backgroundColor:'green'}} onClick={()=>{log('/dashboard')}}>LogIn</button>
        </div>
    </div>
  )
}

export default Login