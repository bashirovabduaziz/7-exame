import { Rating } from '@mui/material';
import React from 'react'
import './Products.scss'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice"
import cartSlice, { addToCart } from "../../context/cartSlice";
import { Link } from 'react-router-dom';





const Product = ({data}) => {
    const dispatch = useDispatch()
    const wishes = useSelector(state => state.wishlist.value)

     
let products = data?.map((el) => <div key={el.id} className='product__cart'>
    
    <img src={el.thumbnail} alt="" className='product__img'/>
   
    <div className='product__left'>
        <Link to={`/single-product/${el.id}`} className='product__link'>
    <p className='product__title'>{el.title}</p>
    </Link>
      
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

    <div className="product__prices">
    <p className='product__price' >${el.price}</p>
    <del className="product__old">$1000</del>
    <div className='product__hiddens'>
    <button onClick={()=> dispatch(toggleToWishes(el))} className='product__like'>
            {
                wishes.some(w => w.id === el.id) ?
                <FaHeart className='product__wish'/>:
                <FaRegHeart className='product__wish' />
            }
        </button>
        <button className='product__like' onClick={() => dispatch(addToCart(el))}>
       <BsCart2 className='product__wish'/>
       </button>
    </div>
    </div>
    </div>
</div>)

  return (
    <div className='product'>
        <div className='product__container'>
        {products}
        </div>
    </div>

  )
}

export default Product