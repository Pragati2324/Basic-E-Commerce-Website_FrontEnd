import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/');
    }
  })
  const loginEmail = (e) => {
    setEmail(e.target.value);
  }
  const loginPassword = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token',JSON.stringify(result.user)); 
      navigate('/')
    } else {
      alert("Please Enter Details")
    }
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text' className='inputBox' placeholder='Enter email' onChange={loginEmail} value={email} />
      <input type='password' className='inputBox' placeholder='Enter password' onChange={loginPassword} value={password} />
      <button type='button' onClick={handleLogin} className='appButton'>Login</button>
    </div>
  )
}

export default Login
