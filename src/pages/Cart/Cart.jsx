import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incCart , decCart, removeFromCart} from  '../../context/cartSlice'
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
   const carts = useSelector(state => state.cart.value)
   const dispatch = useDispatch()
   console.log(carts);

let items = carts?.map((el) => <div key={el.id}>
  <img src={el.images[0]} alt=""  width={150}/>
  <p>{el.title}</p>
  <h3>{el.price * el.quantity}</h3>
  <button onClick={() => dispatch(incCart(el))}>+</button>
  <span>{el.quantity}</span>
  <button disabled={el.quantity <= 1} onClick={() => dispatch(decCart(el))}>-</button>
  <button onClick={() => dispatch(removeFromCart(el))}><FaTrashAlt /></button>
</div>)

  return (
    <div>
        <h2>Cart</h2>
            {items}

    </div>
  )
}

export default Cart