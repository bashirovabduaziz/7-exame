import React from 'react'
import './Hero.scss'
import Back from '../../assets/bg.png'
import Shoe1 from '../../assets/Nike1.png'
import Shoe2 from '../../assets/Nike2.png'
import Shoe3 from '../../assets/Nike3.png'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero__bottom">
        <img  src={Back} alt="" width={1200}  />
       </div>
       <div className='hero__top'>
             <div className='hero__cart'>
              <h1 className='hero__title'>FS - QUILTED MAXI CROSS BAG</h1>
              <img className='hero__img' src={Shoe1} alt="" />
              <div className="hero__prices">
              <del className='hero__price'>$800</del>
              <p className='hero__pl'>%24 of</p>
              </div>
             </div>
             <div className='hero__cart'>
              <h1 className='hero__title'>FS - Nike Air Max 270 React...</h1>
              <img className='hero__img' src={Shoe2} alt="" />
              <div className="hero__prices">
              <del className='hero__price'>$800</del>
              <p className='hero__pl'>%24 of</p>
              </div>
             </div>
             <div className='hero__cart'>
              <h1 className='hero__title'>FS - Nike Air Max 270 React...</h1>
              <img className='hero__img' src={Shoe3} alt="" />
              <div className="hero__prices">
              <del className='hero__price'>$800</del>
              <p className='hero__pl'>%24 of</p>
              </div>
             </div>
       </div>
    </div>
  )
}

export default Hero