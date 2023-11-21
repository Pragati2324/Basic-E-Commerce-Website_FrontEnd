import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp=()=>{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  
  useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
  },);

  const rname=(e)=>{
        setName(e.target.value);
  }

  const remail=(e)=>{
     setEmail(e.target.value);
  }

  const rpassword=(e)=>{
    setPassword(e.target.value);
  }

  const handleRegister=async()=>{
    console.warn(name,email,password);
    let result=await fetch("http://localhost:5000/register",{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/');
  }
   return(
    
    <div className="register">
        <h1>Register</h1>
        <input className="inputBox" type="text" placeholder="Enter Name" onChange={rname}/>
        <input className="inputBox" type="text" placeholder="Enter Email Address" onChange={remail}/>
        <input className="inputBox" type="password" placeholder="Enter Password" onChange={rpassword}/>
        <button className="appButton" type="button" onClick={handleRegister}>Sign Up</button>
    </div>
  )
}
export default SignUp