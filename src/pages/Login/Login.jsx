import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.scss'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Abduaziz' && password === '8486') {
      window.location.href = '/admin';
      toast.success("Hush kelibsiz")
    } else {
      toast.error("Hatooooo!!!");

    }
  };

  return (
    <div className='login'>
     <div className='login__container'>
      <TextField 
      id="outlined-basic" 
      label="Username"
       variant="outlined"
       className='login__input'
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br />
      <TextField 
      id="filled-basic" 
      label="Password" 
      variant="outlined"
        className='login__input'
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br />
      <Button  variant="contained" className='login__btn' onClick={handleLogin}>Login</Button>
      </div>
      <ToastContainer />

    </div>
  );
}

export default Login;
