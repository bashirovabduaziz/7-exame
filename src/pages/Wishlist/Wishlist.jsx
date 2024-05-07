import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/Products/Product';
import './Wishlist.scss'

const Wishlist = () => {
  const wishes = useSelector(state => state.wishlist.value)
  console.log(wishes);
  return (
    <>
    <div className='wishlist'>
      <h1 className="wishlist__title">Wishlist</h1>
      {
        wishes.length ? 
        <Products data={wishes}/>
        :
        <h2>Empty</h2>
        
      }
      </div>
    </>
  )
}

export default Wishlist