import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incCart , decCart, removeFromCart} from  '../../context/cartSlice'
import { FaTrashAlt } from "react-icons/fa";
import './Cart.scss'

const Cart = () => {
   const carts = useSelector(state => state.cart.value)
   const dispatch = useDispatch()
   console.log(carts);

let items = carts?.map((el) => <div key={el.id} className='cart__card'>
  <button onClick={() => dispatch(removeFromCart(el))} className='cart__del'><FaTrashAlt /></button>

  <img src={el.images[0]} alt=""  className='cart__img'/>
  <p className='cart__title'>{el.title}</p>
  <h3 className='cart__price'>${el.price * el.quantity}</h3>
  <div className='cart__inc'>
  <button onClick={() => dispatch(incCart(el))} className='cart__plus'>+</button>
  <span className='cart__num'>{el.quantity}</span>
  <button disabled={el.quantity <= 1} onClick={() => dispatch(decCart(el))} className='cart__plus'>-</button>
  </div>
  <p className='cart__price'>${el.price}</p>

</div>)

  return (
    <div className='cart'>

      <div className="cart__titles">
         <h3 className='cart__p'>PRODUCT</h3>
         <div className="cart__tt">
          <h3 className='cart__p1'>PRICE</h3>
          <h3 className='cart__p2'>QTY</h3>
          <h3 className='cart__p3'>UNIT PRICE</h3>
         </div>
      </div>
      <hr />
            {
              carts.length ?
            items :
            <h2>Empty</h2>
            }

    </div>
  )
}

export default Cart