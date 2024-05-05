import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
    const {id} = useParams()
    const [data,setData] = useState([])
    console.log(id);

    useEffect(()=> {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {setData(res.data.products)})
        .catch(res => console.log(res))
    },[])
  return (
    <div>Single</div>
  )
}

export default Single