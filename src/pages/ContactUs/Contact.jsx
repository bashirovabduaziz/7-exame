import React from 'react'
import './ContactUs.scss'
import { TextField } from '@mui/material'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact__container">
          <div className="contact__left">
            <h1 className='contact__title'>Get in touch</h1>
            <p className="contact__p">contact@e-comm.ng</p>
            <p className='contact__p'>+234 4556 6665 34</p>
            <p className="contact__p">20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            
          </div>
          <div className="contact__right">
          <TextField id="outlined-basic" label="FullName" variant="outlined" className='contact__input' />
          <br />
          <TextField id="outlined-basic" label="Email" variant="outlined"  className='contact__input1'/>
       
          </div>
        </div>
    </div>
  )
}

export default Contact