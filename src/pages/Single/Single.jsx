import { CircularProgress, Rating, Tabs } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Single.scss'
import { toggleToWishes } from "../../context/wishlistSlice"
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';



const Single = () => {
    const {id} = useParams()
    const [product,setProduct] = useState([])
    console.log(id);
    const [count , setCount] = useState(1)
    const [leading, setLeading] = useState(true)
    const dispatch = useDispatch()
    const wishes = useSelector(state => state.wishlist.value)

    useEffect(()=> {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {setProduct(res.data);setLeading(false)})
        .catch(res => console.log(res))
    },[])
    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

 
  return (
    
    <div className='single'>
     {
      leading ? (
        <CircularProgress color="inherit" sx={{color: 'rgba(64, 191, 255, 1)'}} />
      ) : (
        <div className="single__container">
        <div className="single__right">
       <img src={product?.thumbnail} alt="" className='single__image' />
             <div className='single__limages'>
              <img src="https://p7.hiclipart.com/preview/624/596/891/nike-free-nike-air-max-sneakers-shoe-red-shoes.jpg" alt="" className="single__limg" />
              <img src="https://e7.pngegg.com/pngimages/382/622/png-clipart-sneakers-skate-shoe-nike-one-nike-shoe-purple-fashion.png" alt="" className="single__limg" />
              <img src="https://e7.pngegg.com/pngimages/820/94/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe.png" alt="" className="single__limg" />
              <img src="https://e7.pngegg.com/pngimages/723/143/png-clipart-shoe-nike-free-air-force-nike-shoes-image-file-formats-fashion.png" alt="" className="single__limg" />
             </div>
       </div>
       <div className="single__left">
       <h1 className='single__title'>{product?.title}</h1>
       <div className="single__hh">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <p className='single__p'>Submit a review</p>
      </div>
  
      <hr  className='single__hr'/>
         <div className="single__prices">
          <p className="single__price">${product?.price}</p>
          <del className='single__del'>$534</del>
          <p className="single__s">24% Off</p>
         </div>
      <div className="single__brands">
             <p className='single__br'>Brand:{product?.brand}</p>
            <p className='single__br'>Category:{product?.category}</p>
            <p className='single__br'>Free shipping</p>
      <hr  className='single__hr'/>
              <div className="single__add">
                <div className="single__inc">
                  <button className="single__plus" onClick={() => setCount(count + 1)}>+</button>
                        <p className="single__count">{count}</p>
                  <button className="single__plus" disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
                  <button onClick={()=> dispatch(toggleToWishes(product))} className='single__like'>
            {
                wishes.some(w => w.id === product?.id) ?
                <FaHeart className='product__wish'/>:
                <FaRegHeart className='product__wish' />
            }
        </button>
              </div>
  
           </div>
  
          
      </div>
    
          
       </div>
       <div className="single__center">
                <img src={product?.thumbnail} alt="" className='single__center-i' />
                <Rating name="half-rating" defaultValue={2.5} precision={0.5}  className='single__rating'/>

                <div className='single__pris'>
                <p className='single__price' >${product?.price}</p>
                <p className="single__s">24% Off</p>
                </div>
                
           </div>
       </div>
      )
     }
    </div>
  )
}

export default Single