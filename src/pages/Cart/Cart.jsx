import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incCart , decCart, removeFromCart} from  '../../context/cartSlice'
import { FaTrashAlt } from "react-icons/fa";
import './Cart.scss'
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 10,
};

 const BOT_TOKEN = "7018452958:AAHTiQy3DYi42IJI4KfObEmCqqw_W_CG-M8"
 const USER_ID = '7072543679'
 const CHAT_ID ='-1002146385951'
//   https://api.telegram.org/bot7018452958:AAHTiQy3DYi42IJI4KfObEmCqqw_W_CG-M8/getUpdates
//  https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Cart = () => {
   const carts = useSelector(state => state.cart.value)
   const dispatch = useDispatch()
   console.log(carts);
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
  const [name,setName] = useState("")
  const [address,setAddress] = useState("")
  const [lastname,setLastname] = useState("")
  const [home,setHome] = useState("")
  const [phone,setPhone] = useState("")

 
  const handleOrder = () =>{
    let text = "Haridorning Buyurtmasi %0A%0A"
    text += `Name: ${name} %0A`
    text +=  `Address: ${address} %0A`
    text +=  `Lastname: ${lastname} %0A`
    text +=  `Delivery Address: ${home} %0A`
    text +=  `Phone: ${phone} %0A`
    console.log(name);
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    let api = new XMLHttpRequest()
    api.open("GET", url,true)
    api.send()
  }

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

<Button onClick={handleOpen} variant="contained" className='cart__buttono'>Check out</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
       <div className="cart__modal">
        <div className="cart__modal-left">
    <input type="text" className='cart__input' placeholder='First name' value={name} onChange={e => setName(e.target.value)}/>
    <input type="text" className='cart__input' placeholder='Email Address' value={address} onChange={e => setAddress(e.target.value)}/>
    </div>
    <div className="cart__modal-right">
    <input type="text" className='cart__input' placeholder='Last name' value={lastname} onChange={e => setLastname(e.target.value)}/>
    <input type="text" className='cart__input1' placeholder='Address for Delivery'  value={home} onChange={e => setHome(e.target.value)}/>
    <input type="number" className='cart__input' placeholder='Mobile Phone' value={phone} onChange={e => setPhone(e.target.value)} />
    </div>
    </div>
       

    <Button variant="contained"  className='cart__buttonc' onClick={handleOrder}>Payment</Button>

  </Box>
</Modal>

    </div>
  )
}

export default Cart