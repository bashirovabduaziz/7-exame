import React from 'react'
import './Hero.scss'
import Back from '../../assets/bg.png'
import Shoe from '../../assets/shoe.png'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero__bottom">
        <img src={Back} alt="" width={1200}  />
       </div>
       
    </div>
  )
}

export default Hero