import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import axios from '../../api'
import Product from '../../components/Products/Product'

const Home = () => {
  const [data , setData] = useState([])
   

  useEffect(()=>{
    axios
        .get("products")
        .then(res => {setData(res.data.products)})
        .catch(res => console.log(res))
}, [])


  return (
    <div>
      <Hero />
      <Product  data={data} />
    </div>
  )
}

export default Home