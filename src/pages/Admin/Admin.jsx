import React from 'react'
import './Admin.scss'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'


const Admin = () => {
  return (
    <div className='admin'>
        <div className="admin__container">
          <h1 className='admin__title'>Admin panel</h1>
          <p className="admin__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut laboriosam nihil unde quae? Dolorum praesentium earum alias in reprehenderit totam voluptate tempora, molestiae quam, at nulla cum repellat dolor.</p>
          <p className="admin__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut laboriosam nihil unde quae? Dolorum praesentium earum alias in reprehenderit totam voluptate tempora, molestiae quam, at nulla cum repellat dolor.</p>
          <p className="admin__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut laboriosam nihil unde quae? Dolorum praesentium earum alias in reprehenderit totam voluptate tempora, molestiae quam, at nulla cum repellat dolor.</p>
          <NavLink to={'/login'}>
        <Button variant="contained" className='admin__input admin__btn' >Log Out</Button>
               
        </NavLink>
        </div>
    </div>
  )
}

export default Admin