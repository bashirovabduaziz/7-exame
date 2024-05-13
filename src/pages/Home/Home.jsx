import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import axios from '../../api'
import Product from '../../components/Products/Product'
import './Home.scss'
import Bnr from '../../assets/bnr.png'
import Shoe from '../../assets/shoes.png'
import Carts from '../../assets/carts.png'
import Cartss from '../../assets/shoess.png'

const Home = () => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
   

  useEffect(()=>{
    axios
        .get("products")
        .then(res => {setData(res.data.products);setLoading(false)})
        .catch(res => console.log(res))
}, [])
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <div className='home'>
      <Hero />
      <div className='home__products'>
        <h1 className='home__title'>BEST SELLER</h1>
            
            <ul className="home__list">
              <li className="home__links"><a href="#" className='home__link'>All</a></li>
              <li className="home__links"><a href="#" className='home__link'>Bags</a></li>
              <li className="home__links"><a href="#" className='home__link'>Sneakers</a></li>
              <li className="home__links"><a href="#" className='home__link'>Belt</a></li>
              <li className="home__links"><a href="#" className='home__link'>Sunglasses</a></li>
            </ul>

      <Product  data={data.slice(0,8)} loading={loading} />

      <div className="home__container">
          <img src={Bnr} alt="" className="home__image" />
          <img src={Shoe} alt="" className="home__img" />
      </div>
      <div className="home__cartsi">
        <img src={Carts} alt="" className="home__carts-img" />
      </div>
      <div className="home__cartsi">
        <img src={Cartss} alt="" className="home__carts-img" />
      </div>
      </div>
    </div>
  )
}

export default Home