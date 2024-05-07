import { Button, TextField } from '@mui/material'
import React from 'react'
import './Login.scss'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="login__container">
              <TextField id="outlined-basic" label="Username" variant="outlined" className='login__input' />
              <br />
              
              <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className='login__input'
        />               
        <br />
        <NavLink to={'/admin'}>
        <Button variant="contained" className='login__input login__btn' >Login</Button>
               
        </NavLink>
            
              </div>

    </div>
  )
}

export default Login