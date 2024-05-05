import React from 'react'
import { MdPersonOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import './Header.scss'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'



const Header = () => {
  return (
    <div className='header'>
         <div className="header__container">
            <div className="header__bottom">
                <div className="header__left-b">

                    <div className="header__lef-l">
                    <p className='header__t'>EN</p>
                    <p className='header__p'>usd</p>
                    </div>
                    
                </div>
                <div className="header__right-b">
                <div className="header__lef-r">
                    <NavLink className="header__link" to={'/admin'}>
                       <MdPersonOutline  className='header__icons' />
                       </NavLink>
                       <NavLink to={'/wishlist'} className='header__link'><FaRegHeart className='header__icons' /></NavLink>
                          <NavLink to={'cart'} className='header__link'>
                       <BsCart2 className='header__icons' />
                          </NavLink>
                       <IoSearchSharp className='header__icons' />
                    </div>

                </div>
            </div>
            <hr className='header__hr'/>
            <div className="header__top">
              <NavLink to={'/'}>
                <img src={Logo} alt="" />
              </NavLink>
              
              <div className="header__top-right">
                <NavLink to={'/'} className="header__links">Home</NavLink>
                <a className="header__links">Bags</a>
                <a className="header__links">Sneakers</a>
                <a className="header__links">Belt</a>
                <NavLink to={'/contact'} className="header__links">Contact</NavLink>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Header